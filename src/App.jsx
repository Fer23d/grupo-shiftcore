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

const productFlow = [
  {
    id: '01',
    title: 'Ideia',
    detail: 'Um problema técnico identificado em fluxos reais de engenharia.',
  },
  {
    id: '02',
    title: 'Engenharia',
    detail: 'Critérios, dados, geometria e restrições viram arquitetura de solução.',
  },
  {
    id: '03',
    title: 'Software',
    detail: 'Interface, automação e inteligência aplicada são construídas em produto.',
  },
  {
    id: '04',
    title: 'Produto',
    detail: 'A tecnologia entra em operação, evolui e se torna parte do ecossistema.',
  },
]

const ecosystemNodes = [
  'Core técnico',
  'Bibliotecas internas',
  'Automação',
  'Produto em evolução',
]

const narrativeScenes = [
  {
    id: '01',
    label: 'Cena 1',
    title: 'Quem é a Shiftcore',
    description:
      'Uma empresa de tecnologia que cria produtos digitais próprios para resolver problemas técnicos com clareza, engenharia e visão de longo prazo.',
  },
  {
    id: '02',
    label: 'Cena 2',
    title: 'Como construímos',
    description:
      'Partimos de processos reais, modelamos sistemas e desenvolvemos ferramentas que reduzem repetição, organizam fluxos e aumentam precisão.',
  },
  {
    id: '03',
    label: 'Cena 3',
    title: 'Ecossistema Shiftcore',
    description:
      'A marca central concentra pesquisa, engenharia de produto e evolução tecnológica para sustentar softwares proprietários.',
  },
  {
    id: '04',
    label: 'Cena 4',
    title: 'VetorCAD como primeiro produto',
    description:
      'O VetorCAD materializa essa visão ao conectar imagem, vetor, CAD e geração 3D em uma plataforma técnica.',
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
  { code: 'PT-BR', label: 'Português (Brasil)', available: true },
  { code: 'EN', label: 'English', available: false },
  { code: 'ES', label: 'Español', available: false },
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

        document.documentElement.style.setProperty('--scroll-progress', progress.toFixed(4))
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY.toFixed(0)}px`)
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

function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [languageNotice, setLanguageNotice] = useState('')

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

  function handleLanguageSelect(language) {
    if (language.available) {
      setLanguageNotice('')
      setIsLanguageOpen(false)
      return
    }

    setLanguageNotice(`${language.label} em breve.`)
  }

  return (
    <header className="site-header">
      <div className="top-bar" aria-label="Barra institucional">
        <div className="container top-bar-content">
          <a className="brand top-bar-brand" href="/#inicio" aria-label="Página inicial do Grupo Shiftcore">
            Grupo Shiftcore
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

            <div className="language-shell">
              <button
                className="language-indicator"
                type="button"
                aria-expanded={isLanguageOpen}
                onClick={() => setIsLanguageOpen((currentState) => !currentState)}
              >
                PT-BR
              </button>

              {isLanguageOpen ? (
                <div className="language-menu">
                  {languageOptions.map((language) => (
                    <button
                      className={language.available ? 'is-active' : ''}
                      type="button"
                      key={language.code}
                      onClick={() => handleLanguageSelect(language)}
                    >
                      <span>{language.label}</span>
                      <small>{language.available ? 'Ativo' : 'Em breve'}</small>
                    </button>
                  ))}
                  {languageNotice ? <p>{languageNotice}</p> : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function HeroProductPreview() {
  return (
    <div className="hero-product-preview engineering-stage" aria-label="Sistema técnico em construção">
      <div className="stage-coordinate stage-coordinate-x" aria-hidden="true" />
      <div className="stage-coordinate stage-coordinate-y" aria-hidden="true" />

      <div className="cad-construction" aria-hidden="true">
        <span className="cad-line cad-line-one" />
        <span className="cad-line cad-line-two" />
        <span className="cad-line cad-line-three" />
        <span className="cad-node cad-node-one" />
        <span className="cad-node cad-node-two" />
        <span className="cad-node cad-node-three" />
      </div>

      <div className="product-window">
        <div className="product-window-bar">
          <span>VetorCAD</span>
          <small>proprietary product</small>
        </div>
        <img src={vectorCadProduct} alt="Interface do VetorCAD em demonstração técnica" />
      </div>

      <div className="build-stack" aria-label="Arquitetura Shiftcore">
        <span>Grupo Shiftcore</span>
        <span>Engineering System</span>
        <strong>VetorCAD</strong>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" id="inicio">
      <div className="technical-grid" aria-hidden="true" />
      <div className="hero-depth-field" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="eyebrow">Shiftcore Engineering System</span>
          <h1>Tecnologia proprietária em construção.</h1>
          <p>
            O Grupo Shiftcore projeta, desenvolve e evolui produtos digitais
            próprios. O VetorCAD é o primeiro software do ecossistema: uma
            plataforma profissional para fluxos CAD, vetorização e engenharia.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#vectorcad">
              Conhecer VetorCAD
            </a>
            <a className="button button-secondary" href="#sobre">
              Sobre o Grupo
            </a>
          </div>

          <div className="hero-metrics" aria-label="Indicadores institucionais">
            <span><strong>01</strong> produto oficial</span>
            <span><strong>CAD</strong> como primeiro vertical</span>
            <span><strong>IA</strong> aplicada a fluxos técnicos</span>
          </div>
        </div>

        <HeroProductPreview />
      </div>
    </section>
  )
}

function ScrollNarrativeSection() {
  return (
    <section className="scroll-narrative-section construction-narrative" aria-label="Narrativa experiencial Shiftcore">
      <div className="container scroll-narrative-layout">
        <div className="scroll-narrative-sticky" data-reveal>
          <span className="eyebrow">Cena 2 / Como produtos são criados</span>
          <h2>Um processo de construção, não uma vitrine de serviços.</h2>
          <p>
            Cada produto nasce de uma cadeia técnica: entender o problema,
            projetar a solução, construir software e evoluir com uso real.
          </p>
        </div>

        <div className="construction-track">
          {productFlow.map((step) => (
            <article className="construction-step" key={step.id} data-reveal>
              <span>{step.id}</span>
              <strong>{step.title}</strong>
              <p>{step.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function VectorCadSection() {
  return (
    <section className="vector-section vector-showcase-section" id="vectorcad">
      <div className="container vector-layout">
        <div className="product-image-shell vector-showcase-visual" data-reveal>
          <img src={vectorCadProduct} alt="Interface do VetorCAD mostrando vetorização e preview técnico" />
          <span className="measurement-line measurement-horizontal" aria-hidden="true" />
          <span className="measurement-line measurement-vertical" aria-hidden="true" />
          <span className="product-callout callout-vector">Vetorização</span>
          <span className="product-callout callout-cad">DXF / SVG / CAD</span>
          <span className="product-callout callout-model">Modelo 3D</span>
        </div>

        <div className="vector-copy" data-reveal>
          <span className="eyebrow">Cena 3 / Produto proprietário</span>
          <h2>VetorCAD</h2>
          <p>
            Um software profissional criado pela Shiftcore para transformar
            imagens e referências técnicas em vetores CAD, arquivos DXF, SVG e
            modelos 3D com inteligência aplicada ao fluxo de engenharia.
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
            Acessar VetorCAD
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
          <span className="eyebrow">Cena 1 / Quem é a Shiftcore</span>
          <h2>Uma empresa de software que constrói suas próprias tecnologias.</h2>
        </div>
        <p>
          A Shiftcore não nasce como vitrine de serviços. Nasce como uma
          foundry de software: pesquisamos problemas, projetamos arquitetura,
          criamos produto próprio e evoluímos tecnologia com disciplina de
          engenharia.
        </p>
      </div>
    </section>
  )
}

function PillarsSection() {
  return (
    <section className="pillars-section method-section" id="construimos">
      <div className="container product-flow-layout">
        <div className="section-heading product-flow-heading" data-reveal>
          <span className="eyebrow">Sistema de produto</span>
          <h2>Engenharia digital aplicada a softwares próprios.</h2>
          <p>
            A estrutura interna combina arquitetura, automação e produto para
            criar ferramentas técnicas com maturidade operacional.
          </p>
        </div>

        <div className="method-grid" aria-label="Pilares técnicos da Shiftcore">
          {narrativeScenes.slice(0, 3).map((scene) => (
            <article className="method-panel" key={scene.id} data-reveal>
              <span>{scene.id}</span>
              <strong>{scene.title}</strong>
              <p>{scene.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function FutureSection() {
  return (
    <section className="future-section ecosystem-section" id="futuro">
      <div className="container future-layout ecosystem-layout">
        <div className="ecosystem-copy" data-reveal>
          <span className="eyebrow">Cena 4 / Ecossistema futuro</span>
          <h2>Uma arquitetura preparada para novos produtos.</h2>
          <p>
            O ecossistema começa com um produto real e uma base técnica
            reutilizável. O próximo passo é expandir essa arquitetura sem
            diluir a precisão da marca.
          </p>
        </div>

        <div className="ecosystem-map future-architecture" data-reveal aria-label="Mapa do ecossistema Shiftcore">
          <div className="ecosystem-core">
            <span>Core</span>
            <strong>Grupo Shiftcore</strong>
          </div>

          <div className="ecosystem-ring" aria-hidden="true" />

          <div className="ecosystem-capabilities">
            {ecosystemNodes.map((node) => (
              <span key={node}>{node}</span>
            ))}
          </div>

          <div className="ecosystem-product-node">
            <span>Produto proprietário</span>
            <strong>VetorCAD</strong>
            <p>Software profissional para CAD, vetorização e modelos técnicos.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function HomeContactSection() {
  return (
    <section className="home-contact-section">
      <div className="container home-contact-layout" data-reveal>
        <span className="eyebrow">Cena 5 / Contato</span>
        <h2>Vamos conversar sobre tecnologia proprietária, produtos digitais e engenharia aplicada.</h2>
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
            <ScrollNarrativeSection />
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
