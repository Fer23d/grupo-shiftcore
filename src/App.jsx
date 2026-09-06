import { useEffect, useState } from 'react'
import vectorCadProduct from './assets/vectorcad-product.png'
import shiftcoreBlueprintHero from './assets/shiftcore-blueprint-hero.jpg'
import './App.css'

const vectorCadFeatures = [
  'Imagem para vetor',
  'Exportação DXF',
  'Arquivos SVG',
  'Modelo 3D',
  'Processamento assistido',
]

const buildStages = [
  {
    id: '01',
    code: 'SFT-CPT',
    title: 'Conceito',
    detail: 'Um problema técnico real é isolado, compreendido e transformado em direção.',
  },
  {
    id: '02',
    code: 'SFT-ARC',
    title: 'Arquitetura',
    detail: 'Regras, dados e restrições definem a estrutura que sustentará o produto.',
  },
  {
    id: '03',
    code: 'SFT-ENG',
    title: 'Engenharia',
    detail: 'Interface, automação e inteligência aplicada são construídas como sistema.',
  },
  {
    id: '04',
    code: 'SFT-SFT',
    title: 'Software',
    detail: 'A arquitetura ganha operação, clareza de uso e capacidade de evolução.',
  },
  {
    id: '05',
    code: 'SFT-PRD',
    title: 'Produto',
    detail: 'A tecnologia entra em uso, resolve o processo e passa a evoluir continuamente.',
  },
]

const manifestoPhases = ['Problema técnico', 'Arquitetura', 'Construção', 'Produto']

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

const searchItems = [
  {
    title: 'Home',
    description: 'Página inicial do Grupo Shiftcore.',
    url: '/#inicio',
    type: 'Institucional',
  },
  {
    title: 'Grupo Shiftcore',
    description: 'Empresa de tecnologia que cria produtos digitais próprios.',
    url: '/#sobre',
    type: 'Institucional',
  },
  {
    title: 'Soluções / Produtos',
    description: 'Software próprio para processos técnicos, produtos digitais e automação.',
    url: '/#construimos',
    type: 'Institucional',
  },
  {
    title: 'VetorCAD',
    description: 'Produto principal da Shiftcore para vetorização, CAD, SVG, DXF e geração 3D.',
    url: '/#vectorcad',
    type: 'Produto',
  },
  {
    title: 'Contato',
    description: 'Canal oficial para empresas, parceiros e novas oportunidades.',
    url: '/contato',
    type: 'Institucional',
  },
  {
    title: 'Termos de Uso',
    description: 'Termos aplicáveis ao Grupo Shiftcore e seus produtos digitais.',
    url: '/termos-de-uso',
    type: 'Legal',
  },
  {
    title: 'Política de Privacidade',
    description: 'Informações sobre privacidade e tratamento de dados.',
    url: '/politica-de-privacidade',
    type: 'Legal',
  },
  {
    title: 'Política de Cookies',
    description: 'Informações sobre cookies necessários e ausência de rastreamento de terceiros.',
    url: '/politica-de-cookies',
    type: 'Legal',
  },
  {
    title: 'Blog',
    description: 'Artigos institucionais da Shiftcore em preparação.',
    url: '/blog',
    type: 'Blog',
  },
]

const languageOptions = [
  { code: 'PT-BR', symbol: 'BR', label: 'Português (Brasil)', available: true },
  { code: 'EN', symbol: 'US', label: 'English', available: false },
  { code: 'ES', symbol: 'ES', label: 'Español', available: false },
]

const legalPages = {
  '/termos-de-uso': {
    eyebrow: 'Documento legal',
    title: 'Termos de Uso',
    description:
      'Estes termos regulam o acesso e a utilização dos produtos digitais desenvolvidos pelo Grupo Shiftcore, incluindo o VetorCAD.',
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
        title: '2. Sobre o VetorCAD',
        body: [
          'O VetorCAD, disponível em vetorcad.com.br, é uma plataforma digital criada para apoiar fluxos técnicos de conversão, vetorização e geração de arquivos utilizados em ambientes CAD.',
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
          'A marca Grupo Shiftcore, a marca VetorCAD, os softwares, códigos, interfaces, elementos visuais, textos, fluxos de produto, tecnologias e demais ativos digitais pertencem ao Grupo Shiftcore ou a seus licenciadores.',
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
      'Esta política explica como o Grupo Shiftcore trata dados relacionados aos seus sites, plataformas e produtos digitais, incluindo o VetorCAD.',
    updatedAt: 'Última atualização: agosto de 2026',
    sections: [
      {
        title: '1. Introdução',
        body: [
          'O Grupo Shiftcore valoriza a privacidade dos usuários e adota medidas para proteger os dados tratados em seus produtos digitais.',
          'Esta Política de Privacidade se aplica ao Grupo Shiftcore e ao VetorCAD, incluindo suas funcionalidades, páginas, fluxos de cadastro, processamento de arquivos e canais de atendimento.',
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
            title: 'Dados coletados pelo formulário',
            items: ['nome;', 'email;', 'empresa;', 'assunto;', 'mensagem.'],
          },
          {
            title: 'Dados de uso',
            items: ['projetos criados;', 'arquivos enviados;', 'histórico de utilização.'],
          },
          {
            title: 'Dados técnicos',
            items: [
              'navegador;',
              'dispositivo;',
              'informações de acesso;',
              'endereço IP;',
              'user-agent/navegador.',
            ],
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
          'atendimento e resposta a mensagens enviadas pelo formulário;',
          'comunicação institucional, comercial ou técnica solicitada pelo usuário;',
          'prevenção de fraude, abuso ou uso indevido;',
          'segurança e prevenção de abuso nos canais de contato.',
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
        title: '5. Retenção dos dados',
        body: [
          'Os dados enviados pelo formulário de contato serão mantidos pelo tempo necessário para atendimento, comunicação, registro histórico da solicitação, cumprimento de obrigações legais e proteção dos interesses legítimos do Grupo Shiftcore.',
          'Quando os dados deixarem de ser necessários para essas finalidades, poderão ser eliminados, anonimizados ou mantidos apenas quando houver obrigação legal, regulatória ou necessidade de preservação de direitos.',
        ],
      },
      {
        title: '6. Compartilhamento',
        body: [
          'O Grupo Shiftcore não vende dados pessoais dos usuários.',
          'Alguns dados podem ser tratados por fornecedores necessários para viabilizar a operação dos serviços, como infraestrutura, pagamentos, autenticação, análise técnica, hospedagem e suporte.',
          'Quando houver compartilhamento operacional, ele será limitado ao necessário para a prestação dos serviços.',
        ],
      },
      {
        title: '7. Direitos do usuário',
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
        title: '8. Cookies',
        body: [
          'Atualmente, o site institucional do Grupo Shiftcore não utiliza cookies de análise, publicidade ou rastreamento de terceiros.',
          'Cookies necessários podem ser utilizados apenas quando indispensáveis para funcionamento técnico, segurança, navegação, preferências básicas ou recursos essenciais do site.',
          'Caso ferramentas de análise, marketing ou rastreamento sejam adicionadas futuramente, esta política será atualizada para informar categorias, finalidades e opções de gerenciamento aplicáveis.',
          'O usuário também pode gerenciar cookies diretamente nas configurações do navegador, ciente de que alguns recursos podem depender dessas tecnologias para funcionar corretamente.',
        ],
      },
      {
        title: '9. Contato',
        body: [
          'Para solicitações relacionadas à privacidade, proteção de dados ou exercício de direitos previstos na LGPD, entre em contato pelo email contato@shiftcore.com.br.',
        ],
      },
    ],
  },
  '/politica-de-cookies': {
    eyebrow: 'Privacidade e transparência',
    title: 'Política de Cookies',
    description:
      'Esta política explica como o site institucional do Grupo Shiftcore trata cookies e tecnologias semelhantes.',
    updatedAt: 'Última atualização: agosto de 2026',
    sections: [
      {
        title: '1. Uso atual de cookies',
        body: [
          'Atualmente, o site institucional do Grupo Shiftcore não utiliza cookies de publicidade, pixels, analytics ou rastreamento comportamental.',
          'Também não foram implementadas ferramentas como pixels de marketing, tags de publicidade, plataformas externas de analytics ou tecnologias de perfilamento comportamental no site institucional.',
        ],
      },
      {
        title: '2. Cookies necessários',
        body: [
          'Cookies necessários são tecnologias usadas para permitir funcionamento técnico, segurança, navegação, preferências básicas ou recursos essenciais de um site.',
          'Caso algum recurso essencial venha a exigir cookies técnicos, esses cookies serão utilizados apenas para a finalidade necessária ao funcionamento do serviço.',
        ],
      },
      {
        title: '3. Ferramentas futuras',
        body: [
          'Se o Grupo Shiftcore adicionar futuramente ferramentas de análise, publicidade, medição de audiência ou rastreamento de terceiros, esta política será atualizada.',
          'Quando aplicável, serão informadas as categorias de cookies, finalidades, fornecedores envolvidos e opções de gerenciamento de consentimento.',
        ],
      },
      {
        title: '4. Gerenciamento pelo navegador',
        body: [
          'O usuário pode bloquear, remover ou gerenciar cookies diretamente nas configurações do navegador utilizado.',
          'A desativação de cookies necessários pode afetar o funcionamento de recursos técnicos ou preferências básicas do site.',
        ],
      },
      {
        title: '5. Contato',
        body: [
          'Em caso de dúvidas sobre cookies, privacidade ou tratamento de dados, entre em contato pelo email contato@shiftcore.com.br.',
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

function usePageMotion() {
  useEffect(() => {
    let frame = 0

    function updateMotion() {
      if (frame) {
        return
      }

      frame = window.requestAnimationFrame(() => {
        const scrollableHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
        const progress = Math.min(1, window.scrollY / scrollableHeight)
        const heroScroll = Math.min(window.innerHeight, window.scrollY)

        document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4))
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY.toFixed(0)}px`)
        document.documentElement.style.setProperty('--hero-shift', `${(heroScroll * 0.035).toFixed(1)}px`)
        frame = 0
      })
    }

    updateMotion()
    window.addEventListener('scroll', updateMotion, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateMotion)
      if (frame) {
        window.cancelAnimationFrame(frame)
      }
    }
  }, [])
}

function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const [notice, setNotice] = useState('')

  function handleSelect(language) {
    if (language.available) {
      setNotice('')
      setIsOpen(false)
      return
    }

    setNotice(`${language.label} em breve.`)
  }

  return (
    <div className={`language-shell technical-language ${isOpen ? 'is-open' : ''}`}>
      <button
        className="language-indicator"
        type="button"
        aria-expanded={isOpen}
        aria-controls="shiftcore-language-menu"
        onClick={() => setIsOpen((currentState) => !currentState)}
      >
        <span>PT-BR</span>
        <i aria-hidden="true" />
      </button>

      {isOpen ? (
        <div className="language-menu technical-language-menu" id="shiftcore-language-menu" role="menu">
          <div className="language-menu-heading">
            <span>Idioma do sistema</span>
            <small>Locale / 01</small>
          </div>
          {languageOptions.map((language) => (
            <button
              className={language.available ? 'is-active' : ''}
              type="button"
              role="menuitemradio"
              aria-checked={language.available}
              key={language.code}
              onClick={() => handleSelect(language)}
            >
              <span className="language-name"><i>{language.symbol}</i>{language.label}</span>
              <small>{language.available ? 'Ativo' : 'Em breve'}</small>
            </button>
          ))}
          {notice ? <p className="language-notice" role="status">{notice}</p> : null}
        </div>
      ) : null}
    </div>
  )
}

function Header({ isHome = false }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const normalizedQuery = searchQuery.trim().toLowerCase()
  const searchResults = normalizedQuery
    ? searchItems.filter((item) =>
        `${item.title} ${item.description} ${item.type}`.toLowerCase().includes(normalizedQuery),
      )
    : searchItems.slice(0, 4)

  function handleSearchSubmit(event) {
    event.preventDefault()

    if (searchResults[0]) {
      window.location.href = searchResults[0].url
    }
  }

  return (
    <header className={`site-header ${isHome ? 'site-header-build' : ''}`}>
      <div className="top-bar" aria-label="Barra institucional">
        <div className="container top-bar-content">
          <a className="brand top-bar-brand" href="/#inicio" aria-label="Página inicial do Grupo Shiftcore">
            <span>Shiftcore</span>
            {isHome ? <small>Engineering<br />Software<br />Systems</small> : null}
          </a>

          <nav className="top-bar-nav" aria-label="Navegação institucional superior">
            <a href="/#inicio">Home</a>
            <a href="/#sobre">Grupo</a>
            <a href="/#construimos">Soluções / Produtos</a>
            <a href="/#vectorcad">VetorCAD</a>
            <a href="/contato">Contato</a>
          </nav>

          <div className="top-bar-actions">
            <div className={`search-shell ${isSearchOpen ? 'is-open' : ''}`}>
              <button
                className="top-search"
                type="button"
                aria-label="Abrir busca"
                aria-expanded={isSearchOpen}
                onClick={() => setIsSearchOpen((currentState) => !currentState)}
              >
                <span aria-hidden="true" />
              </button>

              {isSearchOpen ? (
                <div className="search-panel">
                  <form className="search-form" onSubmit={handleSearchSubmit}>
                    <label htmlFor="site-search">Buscar no site</label>
                    <input
                      id="site-search"
                      type="search"
                      value={searchQuery}
                      onChange={(event) => setSearchQuery(event.target.value)}
                      placeholder="Buscar páginas, produtos ou artigos"
                      autoComplete="off"
                      autoFocus
                    />
                  </form>

                  <div className="search-results" aria-live="polite">
                    {searchResults.length ? (
                      searchResults.map((item) => (
                        <a href={item.url} key={`${item.type}-${item.title}`}>
                          <span>{item.type}</span>
                          <strong>{item.title}</strong>
                          <small>{item.description}</small>
                        </a>
                      ))
                    ) : (
                      <p>Nenhum resultado encontrado.</p>
                    )}
                  </div>
                </div>
              ) : null}
            </div>

            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  )
}

function CADConstructionAnimation() {
  return (
    <svg className="cad-construction-animation" viewBox="0 0 1000 620" role="presentation">
        <g className="build-grid-lines">
          <path d="M70 60V560M215 60V560M360 60V560M505 60V560M650 60V560M795 60V560M930 60V560" />
          <path d="M42 110H958M42 230H958M42 350H958M42 470H958" />
        </g>
        <g className="cad-axis-lines">
          <path d="M94 520H930" />
          <path d="M94 520V76" />
        </g>
        <g className="build-geometry">
          <path className="system-stroke system-stroke-a" d="M138 442H252V352H374V238H506" />
          <path className="system-stroke system-stroke-b" d="M506 238H646V330H770V184H912" />
          <path className="system-stroke system-stroke-c" d="M252 352L374 442H646L770 330" />
          <path className="system-stroke system-stroke-d" d="M374 238V142H646V238" />
          <path className="system-stroke system-stroke-e" d="M428 442V352H586V442M506 238V352" />
          <circle className="cad-radius system-stroke system-stroke-f" cx="506" cy="352" r="46" />
          <circle className="system-node node-a" cx="138" cy="442" r="7" />
          <circle className="system-node node-b" cx="374" cy="238" r="7" />
          <circle className="system-node node-c" cx="506" cy="238" r="7" />
          <circle className="system-node node-d" cx="646" cy="330" r="7" />
          <circle className="system-node node-e" cx="770" cy="330" r="7" />
          <circle className="system-node node-f" cx="912" cy="184" r="7" />
        </g>
        <g className="build-measurements">
          <path d="M138 478V504M138 492H374M374 478V504" />
          <path d="M870 184H940M928 184V330M870 330H940" />
          <path d="M374 116V152M374 128H646M646 116V152" />
        </g>
        <g className="cad-center-mark">
          <path d="M488 352H524M506 334V370" />
        </g>
      </svg>
  )
}

function SystemLabels({ variant }) {
  return (
    <div className={`system-labels system-labels-${variant}`}>
      <dl className="system-identity">
        <div><dt>System</dt><dd>Shiftcore</dd></div>
        <div><dt>Project</dt><dd>{variant === 'hero' ? 'VetorCAD' : 'Build process'}</dd></div>
        <div><dt>State</dt><dd>Processing</dd></div>
      </dl>
      <div className="system-coordinates">
        <span>X: 1280.00</span>
        <span>Y: 720.00</span>
        <span>Z: 0.00</span>
      </div>
      <span className="system-revision">REV 01.06 / SC-BUILD</span>
    </div>
  )
}

function VectorCADReveal() {
  return (
    <div className="vectorcad-reveal">
      <span>Saída do sistema</span>
      <strong>VetorCAD</strong>
      <small>Produto 01 / pronto</small>
    </div>
  )
}

function TechnicalCanvas({ variant = 'hero' }) {
  return (
    <div className={`technical-canvas build-system-canvas build-system-canvas-${variant}`} aria-hidden="true">
      <CADConstructionAnimation />
      <SystemLabels variant={variant} />
      {variant === 'hero' ? <VectorCADReveal /> : null}
      <div className="canvas-build-progress"><span /></div>
    </div>
  )
}

function BlueprintMetadata() {
  return (
    <div className="blueprint-metadata" aria-hidden="true">
      <div className="blueprint-coordinates">
        <span>X: 1280.00</span>
        <span>Y: 720.00</span>
        <span>Z: 0.00</span>
      </div>
      <div className="blueprint-project">
        <span>Project: VetorCAD</span>
        <span>Type: Engineering software</span>
        <span>Scale: 1:100</span>
      </div>
      <span className="blueprint-radius">R 1800</span>
      <span className="blueprint-signature">Designed, engineered<br />and evolved by Shiftcore.</span>
    </div>
  )
}

function BlueprintHeroScene() {
  return (
    <div className="blueprint-hero-scene" aria-hidden="true">
      <img src={shiftcoreBlueprintHero} alt="" />
      <span className="blueprint-scan-line" />
      <span className="blueprint-origin" />
      <BlueprintMetadata />
    </div>
  )
}

function BuildHero() {
  return (
    <section className="build-hero blueprint-hero build-scene" id="inicio" data-stage="00">
      <BlueprintHeroScene />

      <div className="container blueprint-hero-interface">
        <div className="blueprint-hero-copy" data-reveal>
          <span>Grupo Shiftcore</span>
          <h1>Engenharia que se transforma em software proprietário.</h1>
          <p>O VetorCAD é o primeiro produto construído por esse sistema.</p>
        </div>

        <a className="blueprint-output" href="#vectorcad" data-reveal>
          <span>Saída do sistema</span>
          <strong>VetorCAD</strong>
          <small>Produto 01 / em operação</small>
        </a>

        <div className="blueprint-hero-status" aria-label="Status do sistema">
          <span>System: Shiftcore</span>
          <span>Build: Active</span>
          <span>SC / 2026</span>
        </div>
      </div>
    </section>
  )
}

function ShiftcoreManifesto() {
  return (
    <section className="build-manifesto build-scene" id="sobre" data-stage="01">
      <div className="container build-manifesto-layout">
        <div className="build-scene-index" data-reveal>
          <span>01</span>
          <small>Dentro da Shiftcore</small>
        </div>

        <div className="build-manifesto-copy" data-reveal>
          <p className="build-overline">Não entregamos discurso sobre tecnologia.</p>
          <h2>Transformamos conhecimento técnico em ferramentas que entram em operação.</h2>
        </div>

        <div className="manifesto-system" data-reveal aria-label="Filosofia de construção da Shiftcore">
          {manifestoPhases.map((phase, index) => (
            <div className="manifesto-phase" key={phase}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{phase}</strong>
            </div>
          ))}
        </div>

        <p className="build-manifesto-note" data-reveal>
          A Shiftcore existe para projetar software próprio com precisão de engenharia,
          visão de produto e capacidade de evolução contínua.
        </p>
      </div>
    </section>
  )
}

function EngineeringTimeline() {
  return (
    <section className="engineering-timeline build-scene" id="construimos" data-stage="02">
      <div className="container">
        <div className="build-section-heading" data-reveal>
          <div className="build-scene-index">
            <span>02</span>
            <small>Build System</small>
          </div>
          <h2>Um produto não começa na interface.</h2>
          <p>Ele começa na leitura correta do problema e avança por um sistema disciplinado.</p>
        </div>

        <ol className="engineering-sequence">
          {buildStages.map((stage, index) => (
            <li key={stage.id} data-reveal style={{ '--sequence-index': index }}>
              <div className="sequence-marker">
                <span>{stage.id}</span>
                <i />
              </div>
              <small>{stage.code}</small>
              <strong>{stage.title}</strong>
              <p>{stage.detail}</p>
            </li>
          ))}
        </ol>

        <div className="timeline-geometry" data-reveal>
          <TechnicalCanvas variant="process" />
          <div className="timeline-readout">
            <span>Entrada</span>
            <strong>Problema técnico</strong>
          </div>
          <div className="timeline-readout timeline-readout-output">
            <span>Saída</span>
            <strong>Produto em operação</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

function VetorCADShowcase() {
  return (
    <section className="vector-build-showcase build-scene" id="vectorcad" data-stage="03">
      <div className="container">
        <div className="vector-build-intro" data-reveal>
          <div className="build-scene-index">
            <span>03</span>
            <small>Engenharia materializada</small>
          </div>
          <h2>Este é o resultado da nossa engenharia.</h2>
          <p>
            O VetorCAD transforma imagens e referências técnicas em vetores CAD,
            arquivos DXF, SVG e modelos 3D dentro de um fluxo profissional.
          </p>
        </div>

        <div className="vector-product-stage" data-reveal>
          <div className="vector-stage-bar">
            <div>
              <span className="stage-state" />
              <strong>VetorCAD</strong>
            </div>
            <span>Produto Shiftcore / Em operação</span>
          </div>

          <div className="vector-stage-screen">
            <img src={vectorCadProduct} alt="Demonstração real do VetorCAD em um fluxo técnico de vetorização CAD" />
            <span className="vector-crosshair crosshair-a" aria-hidden="true" />
            <span className="vector-crosshair crosshair-b" aria-hidden="true" />
            <span className="vector-dimension dimension-x">1280 / viewport</span>
            <span className="vector-dimension dimension-y">760 / system</span>
          </div>

          <div className="vector-stage-readout">
            <span>Imagem → geometria</span>
            <span>Vetor → DXF / SVG</span>
            <span>Geometria → modelo 3D</span>
          </div>
        </div>

        <div className="vector-build-footer" data-reveal>
          <div>
            <span>Primeiro produto proprietário</span>
            <strong>VetorCAD</strong>
          </div>
          <ul className="vector-capability-list">
            {vectorCadFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <a
            className="build-link build-link-external"
            href="https://vetorcad.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            Abrir VetorCAD <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function FutureArchitecture() {
  return (
    <section className="build-future build-scene" id="futuro" data-stage="04">
      <div className="container build-future-layout">
        <div className="build-section-heading" data-reveal>
          <div className="build-scene-index">
            <span>04</span>
            <small>Arquitetura futura</small>
          </div>
          <h2>Um núcleo criado para continuar construindo.</h2>
          <p>
            O VetorCAD inaugura uma arquitetura de produto preparada para receber
            novas tecnologias quando elas estiverem prontas.
          </p>
        </div>

        <div className="future-system-map" data-reveal aria-label="Arquitetura de produtos do Grupo Shiftcore">
          <div className="future-system-node future-system-core">
            <span>Core</span>
            <strong>Grupo Shiftcore</strong>
            <small>Engenharia / arquitetura / evolução</small>
          </div>
          <div className="future-system-path" aria-hidden="true"><i /><i /><i /></div>
          <div className="future-system-node future-system-product">
            <span>Produto 01</span>
            <strong>VetorCAD</strong>
            <small>Ativo / em operação</small>
          </div>
          <div className="future-system-path future-system-path-open" aria-hidden="true"><i /><i /><i /></div>
          <div className="future-system-node future-system-open">
            <span>Extensão</span>
            <strong>Próximas tecnologias</strong>
            <small>Arquitetura disponível</small>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="build-contact build-scene" data-stage="05">
      <div className="container build-contact-layout" data-reveal>
        <div className="build-contact-endpoint" aria-hidden="true">
          <span />
          <i />
        </div>
        <span className="build-overline">Fim da linha / início da conversa</span>
        <h2>Projetos sérios começam com uma conversa clara.</h2>
        <p>Parcerias, tecnologia proprietária e oportunidades para construir produtos digitais.</p>
        <a className="build-link" href="/contato">
          Falar com a Shiftcore <span aria-hidden="true">→</span>
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

          <p className="privacy-notice">
            Ao enviar este formulário, você concorda com o tratamento dos seus dados conforme nossa{' '}
            <a href="/politica-de-privacidade">Política de Privacidade</a>.
          </p>

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
            <a href="/politica-de-cookies">Política de Cookies</a>
            <a href="/contato">Contato</a>
            <a href="/ads.txt">ads.txt</a>
          </nav>
        </div>

        <small className="footer-copy">
          © {new Date().getFullYear()} Grupo Shiftcore. Todos os direitos reservados.
        </small>
        <small className="footer-signature">Designed, engineered and evolved by Shiftcore.</small>
      </div>
    </footer>
  )
}

export default function App() {
  useScrollReveal()
  usePageMotion()

  const currentPath = window.location.pathname.replace(/\/$/, '') || '/'
  const legalPage = legalPages[currentPath]
  const isContactPage = currentPath === '/contato'
  const isHomePage = !isContactPage && !legalPage

  return (
    <div id="shiftcore-product-focused">
      <Header isHome={isHomePage} />
      <main>
        {isContactPage ? (
          <ContactPage />
        ) : legalPage ? (
          <LegalPage page={legalPage} />
        ) : (
          <div className="build-home">
            <BuildHero />
            <ShiftcoreManifesto />
            <EngineeringTimeline />
            <VetorCADShowcase />
            <FutureArchitecture />
            <ContactSection />
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
