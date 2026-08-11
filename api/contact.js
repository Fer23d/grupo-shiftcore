const allowedSubjects = new Set(['Parceria', 'Comercial', 'Tecnologia', 'Outros'])

function sanitizeText(value, maxLength) {
  return String(value || '')
    .trim()
    .slice(0, maxLength)
}

function getClientIp(request) {
  const forwardedFor = request.headers['x-forwarded-for']

  if (Array.isArray(forwardedFor)) {
    return forwardedFor[0] || null
  }

  return forwardedFor?.split(',')[0]?.trim() || request.socket?.remoteAddress || null
}

function getRequestBody(request) {
  if (!request.body) {
    return {}
  }

  if (typeof request.body === 'string') {
    return JSON.parse(request.body)
  }

  return request.body
}

function validateContactPayload(payload) {
  const name = sanitizeText(payload.name, 120)
  const email = sanitizeText(payload.email, 180).toLowerCase()
  const company = sanitizeText(payload.company, 140)
  const subject = sanitizeText(payload.subject, 60)
  const message = sanitizeText(payload.message, 4000)

  if (!name || !email || !subject || !message) {
    return {
      isValid: false,
      message: 'Preencha nome, email, assunto e mensagem.',
    }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      isValid: false,
      message: 'Informe um email válido.',
    }
  }

  if (!allowedSubjects.has(subject)) {
    return {
      isValid: false,
      message: 'Selecione um assunto válido.',
    }
  }

  if (message.length < 12) {
    return {
      isValid: false,
      message: 'Escreva uma mensagem um pouco mais detalhada.',
    }
  }

  return {
    isValid: true,
    data: {
      name,
      email,
      company: company || null,
      subject,
      message,
    },
  }
}

async function saveContact(contact, request) {
  const supabaseUrl = process.env.SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  const tableName = process.env.SUPABASE_CONTACTS_TABLE || 'shiftcore_contacts'

  if (!supabaseUrl || !serviceRoleKey) {
    return {
      ok: false,
      status: 503,
      message: 'Envio indisponível. Configure SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY na Vercel.',
    }
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/${tableName}`, {
    method: 'POST',
    headers: {
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      ...contact,
      status: 'new',
      source: 'shiftcore_contact_page',
      metadata: {
        user_agent: request.headers['user-agent'] || null,
        ip_address: getClientIp(request),
      },
    }),
  })

  if (!response.ok) {
    return {
      ok: false,
      status: 502,
      message: 'Não foi possível registrar sua mensagem agora.',
    }
  }

  return { ok: true }
}

export default async function handler(request, response) {
  response.setHeader('Allow', 'POST, OPTIONS')

  if (request.method === 'OPTIONS') {
    return response.status(204).end()
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Método não permitido.' })
  }

  try {
    const payload = getRequestBody(request)
    const validation = validateContactPayload(payload)

    if (!validation.isValid) {
      return response.status(400).json({ message: validation.message })
    }

    const result = await saveContact(validation.data, request)

    if (!result.ok) {
      return response.status(result.status).json({ message: result.message })
    }

    return response.status(201).json({ message: 'Mensagem enviada com sucesso.' })
  } catch {
    return response.status(400).json({ message: 'Não foi possível processar a mensagem.' })
  }
}
