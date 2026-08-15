import { useEffect, useState } from 'react'
import vectorCadProduct from './assets/vectorcad-product.png'
import './App.css'

const vectorCadFeatures = [
  'Conversão de imagens',
  'Vetorização',
  'Exportação CAD',
  'Geração 3D',
  'IA integrada',
]

const pillars = [
  {
    id: 1,
    title: 'Produtos proprietários',
    description: 'Soluções digitais nascidas dentro da Shiftcore, com visão de longo prazo e controle técnico.',
  },
  {
    id: 2,
    title: 'Automação aplicada',
    description: 'Fluxos que reduzem repetição, organizam processos e transformam conhecimento em ferramenta.',
  },
  {
    id: 3,
    title: 'Interfaces técnicas',
    description: 'Produtos desenhados para tarefas reais, com precisão, clareza operacional e uso profissional.',
  },
]

const approachSteps = [
  {
    id: '01',
    title: 'Entender o problema',
    description: 'Antes da interface, vem o processo: contexto, restrições, usuários e decisão técnica.',
  },
  {
    id: '02',
    title: 'Projetar o sistema',
    description: 'A solução nasce como arquitetura de produto, não como uma tela isolada.',
  },
  {
    id: '03',
    title: 'Evoluir com uso real',
    description: 'Cada produto amadurece a partir de validação, precisão e melhoria contínua.',
  },
]

const contactCards = [
  {
    title: 'EMAIL',
    content: 'contato@shiftcore.com.br',
    href: 'mailto:contato@shiftcore.com.br',
  },
  {
    title: 'PARCERIAS',
    content: 'Soluções digitais, integrações e projetos tecnológicos.',
    href: null,
  },
  {
    title: 'TECNOLOGIA',
    content: 'Conheça nossas soluções e produtos próprios.',
    href: null,
  },
]

const subjectOptions = ['Parceria', 'Comercial', 'Tecnologia', 'Outros']

const initialContactForm = {
  name: '',
  email: '',
  company: '',
  subject: subjectOptions[0],
  message: '',
}

const legalPages = {
  '/termos-de-uso': {
    eyebrow: 'Documento legal',
    title: 'Termos de Uso',
    description:
      'Estes termos regulam o acesso e a utilização dos produtos digitais desenvolvidos pelo Grupo Shiftcore, incluindo o VectorCAD.',
    updatedAt: 'Última atualização: agosto de 2026',
    sections: [
      {
        title: '1. Sobre o Grupo Shiftcore',
        body: [
          'O Grupo Shiftcore desenvolve softwares próprios e soluções digitais com foco em engenharia, automação, inteligência artificial e criação de produtos tecnológicos.',
          'A empresa atua na construção de ferramentas digitais destinadas a resolver problemas reais por meio de interfaces técnicas, processamento de dados e fluxos profissionais.',
        ],
      },
      {
        title: '2. Sobre o VectorCAD',
        body: [
          'O VectorCAD, disponível em vetorcad.com.br, é uma plataforma digital criada para apoiar fluxos técnicos de conversão, vetorização e geração de arquivos utilizados em ambientes CAD.',
        ],
        items: [
          'conversão de imagens;',
          'vetorização inteligente;',
          'geração e exportação de arquivos CAD;',
          'exportação em SVG e DXF;',
          'criação de modelos 3D;',
          'ferramentas inteligentes de processamento visual.',
        ],
      },
      {
        title: '3. Aceitação dos termos',
        body: [
          'Ao acessar ou utilizar os serviços, sites, plataformas e produtos digitais do Grupo Shiftcore, o usuário declara que leu, compreendeu e concorda com estes Termos de Uso.',
          'Caso não concorde com qualquer condição apresentada, o usuário deve interromper o uso dos serviços.',
        ],
      },
      {
        title: '4. Responsabilidades do usuário',
        body: [
          'O usuário é responsável por utilizar as plataformas de forma correta, ética e compatível com a legislação aplicável.',
          'Também é de responsabilidade do usuário garantir que possui autorização para enviar, processar ou converter arquivos utilizados nos serviços.',
        ],
        items: [
          'não utilizar os produtos para atividades ilegais, abusivas ou fraudulentas;',
          'não tentar interferir na segurança, infraestrutura ou funcionamento das plataformas;',
          'manter a confidencialidade de seus dados de acesso, quando houver conta de usuário;',
          'assumir responsabilidade pelos arquivos, imagens, projetos e conteúdos enviados.',
        ],
      },
      {
        title: '5. Propriedade intelectual',
        body: [
          'A marca Grupo Shiftcore, a marca VectorCAD, os softwares, códigos, interfaces, elementos visuais, textos, fluxos de produto, tecnologias e demais ativos digitais pertencem ao Grupo Shiftcore ou a seus licenciadores.',
          'Nenhum conteúdo das plataformas pode ser copiado, reproduzido, distribuído, modificado ou explorado comercialmente sem autorização prévia e expressa.',
        ],
      },
      {
        title: '6. Disponibilidade do serviço',
        body: [
          'O Grupo Shiftcore trabalha para manter seus serviços disponíveis, seguros e atualizados, mas não garante funcionamento contínuo, livre de interrupções ou erros.',
          'Podem ocorrer manutenções, atualizações, melhorias técnicas, ajustes de infraestrutura ou indisponibilidades temporárias necessárias para evolução dos produtos.',
        ],
      },
      {
        title: '7. Alterações dos termos',
        body: [
          'Estes Termos de Uso podem ser atualizados a qualquer momento para refletir melhorias nos produtos, mudanças operacionais, exigências legais ou novos recursos.',
          'A versão publicada nesta página será considerada a versão vigente.',
        ],
      },
      {
        title: '8. Contato',
        body: [
          'Em caso de dúvidas sobre estes Termos de Uso, o usuário pode entrar em contato pelo email contato@shiftcore.com.br.',
        ],
      },
    ],
  },
  '/politica-de-privacidade': {
    eyebrow: 'Privacidade e dados',
    title: 'Política de Privacidade',
    description:
      'Esta política explica como o Grupo Shiftcore trata dados relacionados aos seus sites, plataformas e produtos digitais, incluindo o VectorCAD.',
    updatedAt: 'Última atualização: agosto de 2026',
    sections: [
      {
        title: '1. Introdução',
        body: [
          'O Grupo Shiftcore valoriza a privacidade dos usuários e adota medidas para proteger os dados tratados em seus produtos digitais.',
          'Esta Política de Privacidade se aplica ao Grupo Shiftcore e ao VectorCAD, incluindo suas funcionalidades, páginas, fluxos de cadastro, processamento de arquivos e canais de atendimento.',
        ],
      },
      {
        title: '2. Dados coletados',
        body: [
          'Podemos coletar dados necessários para o funcionamento das plataformas, autenticação, suporte, segurança e melhoria contínua dos serviços.',
        ],
        groups: [
          {
            title: 'Dados de cadastro',
            items: ['nome;', 'email;', 'informações da conta.'],
          },
          {
            title: 'Dados de uso',
            items: ['projetos criados;', 'arquivos enviados;', 'histórico de utilização.'],
          },
          {
            title: 'Dados técnicos',
            items: ['navegador;', 'dispositivo;', 'informações de acesso.'],
          },
        ],
      },
      {
        title: '3. Finalidade do tratamento',
        body: [
          'Os dados são utilizados para permitir a operação adequada dos produtos, melhorar a experiência do usuário e manter a segurança das plataformas.',
        ],
        items: [
          'funcionamento da plataforma;',
          'autenticação e gestão de conta;',
          'processamento dos arquivos enviados;',
          'melhoria dos serviços e recursos;',
          'suporte técnico e comunicação com o usuário;',
          'prevenção de fraude, abuso ou uso indevido.',
        ],
      },
      {
        title: '4. Armazenamento',
        body: [
          'Os dados são armazenados em ambientes com medidas técnicas e organizacionais de segurança compatíveis com a natureza dos serviços prestados.',
          'O Grupo Shiftcore busca utilizar práticas adequadas de controle de acesso, proteção de infraestrutura e gestão segura das informações.',
        ],
      },
      {
        title: '5. Compartilhamento',
        body: [
          'O Grupo Shiftcore não vende dados pessoais dos usuários.',
          'Alguns dados podem ser tratados por fornecedores necessários para viabilizar a operação dos serviços, como infraestrutura, pagamentos, autenticação, análise técnica, hospedagem e suporte.',
          'Quando houver compartilhamento operacional, ele será limitado ao necessário para a prestação dos serviços.',
        ],
      },
      {
        title: '6. Direitos do usuário',
        body: [
          'Nos termos da Lei Geral de Proteção de Dados (LGPD), o usuário pode solicitar informações relacionadas ao tratamento de seus dados pessoais.',
        ],
        items: [
          'acesso aos dados tratados;',
          'correção de dados incompletos, inexatos ou desatualizados;',
          'exclusão de dados, quando aplicável;',
          'informações sobre o tratamento e eventuais compartilhamentos;',
          'revogação de consentimento, quando o tratamento depender dele.',
        ],
      },
      {
        title: '7. Cookies',
        body: [
          'Os sites e produtos do Grupo Shiftcore podem utilizar cookies e tecnologias semelhantes para melhorar a navegação, manter sessões, compreender o uso da plataforma e aprimorar recursos técnicos.',
          'O usuário pode gerenciar cookies diretamente nas configurações do navegador, ciente de que alguns recursos podem depender dessas tecnologias para funcionar corretamente.',
        ],
      },
      {
        title: '8. Contato',
        body: [
          'Para solicitações relacionadas à privacidade, proteção de dados ou exercício de direitos previstos na LGPD, entre em contato pelo email contato@shiftcore.com.br.',
        ],
      },
    ],
  },
}

function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')

    if (!elements.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: '0px 0px -80px 0px',
        threshold: 0.12,
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="brand" href="/#inicio" aria-label="Página inicial do Grupo Shiftcore">
          Grupo Shiftcore
        </a>

        <nav className="main-nav" aria-label="Menu principal">
          <a href="/#sobre">Grupo</a>
          <a href="/#construimos">Construção</a>
          <a href="/#vectorcad">VectorCAD</a>
          <a href="/contato">Contato</a>
        </nav>
      </div>
    </header>
  )
}

function HeroProductPreview() {
  return (
    <div className="hero-product-preview" aria-label="Ecossistema real do Grupo Shiftcore" data-reveal>
      <div className="ecosystem-board">
        <div className="ecosystem-node ecosystem-root">
          <span>Empresa</span>
          <strong>Shiftcore</strong>
          <p>Engenharia de software e tecnologias próprias.</p>
        </div>

        <div className="ecosystem-connector" aria-hidden="true" />

        <div className="ecosystem-node">
          <span>Modelo</span>
          <strong>Produtos próprios</strong>
          <p>Ferramentas digitais criadas, operadas e evoluídas internamente.</p>
        </div>

        <div className="ecosystem-connector" aria-hidden="true" />

        <div className="ecosystem-product">
          <span>Produto principal</span>
          <strong>VectorCAD</strong>
          <p>Plataforma para vetorização, exportação CAD e geração 3D com inteligência aplicada.</p>
          <a href="#vectorcad">Conhecer o produto</a>
        </div>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" id="inicio">
      <div className="technical-grid" aria-hidden="true" />

      <div className="container hero-layout">
        <div className="hero-copy" data-reveal>
          <span className="eyebrow">Empresa de tecnologia e engenharia</span>
          <h1>A Shiftcore cria produtos digitais próprios. O primeiro é o VectorCAD.</h1>
          <p>
            Desenvolvemos tecnologias proprietárias combinando engenharia,
            automação e inteligência aplicada. Nosso produto principal é o
            VectorCAD, uma plataforma para transformar imagens em vetores CAD,
            SVG, DXF e modelos 3D.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#vectorcad">
              Conhecer VectorCAD
            </a>
            <a className="button button-secondary" href="#sobre">
              Sobre o Grupo
            </a>
          </div>
        </div>

        <HeroProductPreview />
      </div>
    </section>
  )
}

function VectorCadSection() {
  return (
    <section className="vector-section" id="vectorcad">
      <div className="container vector-layout">
        <div className="product-image-shell" data-reveal>
          <img
            src={vectorCadProduct}
            alt="Interface do VectorCAD mostrando vetorização e preview técnico"
          />
        </div>

        <div className="vector-copy" data-reveal>
          <span className="eyebrow">Um produto desenvolvido pela Shiftcore</span>
          <h2>VectorCAD</h2>
          <p>
            Plataforma inteligente para transformar imagens em vetores CAD,
            arquivos DXF, SVG e modelos 3D. Uma ferramenta criada para reduzir
            retrabalho em fluxos técnicos e aproximar imagem, vetor e projeto.
          </p>

          <ul className="feature-list">
            {vectorCadFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <a
            className="button button-primary"
            href="https://vetorcad.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Acessar VectorCAD
          </a>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="about-section" id="sobre">
      <div className="container about-layout" data-reveal>
        <span className="section-number">01</span>
        <div className="about-title">
          <span className="eyebrow">Quem somos</span>
          <h2>Uma empresa de engenharia de software orientada por produto.</h2>
        </div>
        <p>
          A Shiftcore existe para transformar problemas técnicos em sistemas
          digitais próprios. Trabalhamos na interseção entre engenharia,
          automação e experiência de uso, construindo produtos que precisam ser
          confiáveis antes de serem chamativos.
        </p>
      </div>
    </section>
  )
}

function PillarsSection() {
  return (
    <section className="pillars-section" id="construimos">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">O que construímos</span>
          <h2>Software próprio para processos técnicos, produtos digitais e automação.</h2>
        </div>

        <div className="pillar-rows">
          {pillars.map((pillar) => (
            <article className="pillar-row" key={pillar.id} data-reveal>
              <span>0{pillar.id}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FutureSection() {
  return (
    <section className="future-section" id="futuro">
      <div className="container future-layout" data-reveal>
        <div>
          <span className="eyebrow">Nossa abordagem</span>
          <h2>Construção com profundidade antes de expansão.</h2>
        </div>
        <div className="approach-list">
          {approachSteps.map((step) => (
            <article key={step.id}>
              <span>{step.id}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function HomeContactSection() {
  return (
    <section className="home-contact-section">
      <div className="container home-contact-layout" data-reveal>
        <span className="eyebrow">Contato</span>
        <h2>Fale com a Shiftcore sobre tecnologia, produtos digitais ou parcerias.</h2>
        <a className="button button-primary" href="/contato">
          Entrar em contato
        </a>
      </div>
    </section>
  )
}

function LegalSection({ section }) {
  return (
    <article className="legal-card" data-reveal>
      <h2>{section.title}</h2>

      {section.body?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      {section.items ? (
        <ul>
          {section.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      {section.groups?.map((group) => (
        <div className="legal-group" key={group.title}>
          <h3>{group.title}</h3>
          <ul>
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </article>
  )
}

function LegalPage({ page }) {
  return (
    <section className="legal-page">
      <div className="technical-grid" aria-hidden="true" />

      <div className="container legal-layout">
        <div className="legal-hero" data-reveal>
          <span className="eyebrow">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.description}</p>
          <small>{page.updatedAt}</small>
        </div>

        <div className="legal-content">
          {page.sections.map((section) => (
            <LegalSection section={section} key={section.title} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactPage() {
  const [formData, setFormData] = useState(initialContactForm)
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  function updateField(event) {
    const { name, value } = event.target
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus({ type: 'loading', message: 'Enviando sua mensagem...' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(result.message || 'Não foi possível enviar sua mensagem agora.')
      }

      setFormData(initialContactForm)
      setStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso. O Grupo Shiftcore retornará em breve.',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message,
      })
    }
  }

  return (
    <section className="contact-page">
      <div className="technical-grid" aria-hidden="true" />

      <div className="container contact-layout">
        <div className="contact-copy" data-reveal>
          <span className="eyebrow">Contato</span>
          <h1>Vamos construir algo juntos?</h1>
          <p>
            Entre em contato com o Grupo Shiftcore para falar sobre tecnologia,
            parcerias, produtos digitais e novas oportunidades.
          </p>

          <div className="contact-cards">
            {contactCards.map((card) => (
              <article className="contact-info-card" key={card.title} data-reveal>
                <span>{card.title}</span>
                {card.href ? (
                  <a
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {card.content}
                  </a>
                ) : (
                  <p>{card.content}</p>
                )}
              </article>
            ))}
          </div>
        </div>

        <form className="contact-form-card" onSubmit={handleSubmit} data-reveal>
          <div className="form-heading">
            <span className="eyebrow">Mensagem</span>
            <h2>Envie uma mensagem</h2>
          </div>

          <label>
            <span>Nome</span>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={updateField}
              autoComplete="name"
              required
            />
          </label>

          <label>
            <span>Email</span>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={updateField}
              autoComplete="email"
              required
            />
          </label>

          <label>
            <span>Empresa</span>
            <input
              name="company"
              type="text"
              value={formData.company}
              onChange={updateField}
              autoComplete="organization"
            />
          </label>

          <label>
            <span>Assunto</span>
            <select name="subject" value={formData.subject} onChange={updateField} required>
              {subjectOptions.map((subject) => (
                <option value={subject} key={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>Mensagem</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={updateField}
              rows="6"
              required
            />
          </label>

          <button className="button button-primary" type="submit" disabled={status.type === 'loading'}>
            {status.type === 'loading' ? 'Enviando...' : 'Enviar mensagem'}
          </button>

          {status.message ? (
            <p className={`form-status form-status-${status.type}`} role="status">
              {status.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer" data-reveal>
      <div className="container footer-layout">
        <div className="footer-brand">
          <strong>Grupo Shiftcore</strong>
          <span className="footer-divider" aria-hidden="true" />
          <p>Softwares próprios para engenharia, automação e produtos digitais.</p>
        </div>

        <div className="footer-columns">
          <nav className="footer-column" aria-label="Links institucionais">
            <span>Institucional</span>
            <a href="/blog">Blog</a>
            <a href="/#sobre">Sobre</a>
            <a href="/contato">Contato</a>
          </nav>

          <nav className="footer-column" aria-label="Links legais">
            <span>Legal</span>
            <a href="/termos-de-uso">Termos de Uso</a>
            <a href="/politica-de-privacidade">Política de Privacidade</a>
            <a href="/contato">Contato</a>
            <a href="/ads.txt">ads.txt</a>
          </nav>
        </div>

        <small className="footer-copy">
          © {new Date().getFullYear()} Grupo Shiftcore. Todos os direitos reservados.
        </small>
      </div>
    </footer>
  )
}

export default function App() {
  useScrollReveal()

  const currentPath = window.location.pathname.replace(/\/$/, '') || '/'
  const legalPage = legalPages[currentPath]
  const isContactPage = currentPath === '/contato'

  return (
    <div id="shiftcore-product-focused">
      <Header />
      <main>
        {isContactPage ? (
          <ContactPage />
        ) : legalPage ? (
          <LegalPage page={legalPage} />
        ) : (
          <>
            <HeroSection />
            <AboutSection />
            <PillarsSection />
            <VectorCadSection />
            <FutureSection />
            <HomeContactSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
