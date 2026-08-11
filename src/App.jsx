import './App.css'

const projetos = [
  {
    id: 1,
    title: 'VetorCAD',
    description: 'Plataforma e soluções focadas em desenho assistido por computador.',
    url: 'https://vetorcad.com.br',
  },
  {
    id: 2,
    title: 'FRENG',
    description: 'Calculadora de engenharia avançada e módulo de estudos teóricos.',
    url: '#',
  },
  {
    id: 3,
    title: 'Bovino Study',
    description:
      'Aplicativo de estudos veterinários, biometria e catálogo de raças bovinas.',
    url: '#',
  },
]

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="brand" href="/" aria-label="Página inicial do Grupo Shiftcore">
          Grupo Shiftcore
        </a>

        <nav className="main-nav" aria-label="Menu principal">
          <a href="#inicio">Início</a>
          <a href="#ecossistema">Ecossistema</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" id="inicio">
      <div className="container hero-layout">
        <div className="hero-content">
          <span className="eyebrow">Software, engenharia e conhecimento</span>
          <h1>Um ecossistema digital para soluções técnicas de alta precisão.</h1>
          <p>
            O Grupo Shiftcore conecta plataformas de engenharia, ferramentas de
            cálculo e produtos de estudo avançado em um hub corporativo moderno,
            claro e orientado a produtividade.
          </p>
          <a className="button button-primary" href="#ecossistema">
            Explorar ecossistema
          </a>
        </div>

        <aside className="hero-card" aria-label="Resumo do Grupo Shiftcore">
          <span className="hero-card-label">Grupo Shiftcore</span>
          <strong>Softwares profissionais para fluxos técnicos complexos.</strong>
          <p>CAD, engenharia, estudos aplicados e plataformas digitais especializadas.</p>
        </aside>
      </div>
    </section>
  )
}

function FrengMark() {
  return (
    <div className="freng-mark" aria-label="Marca FRENG shiftcore">
      <span>FRENG</span>
      <small>shiftcore</small>
    </div>
  )
}

function ProjectCard({ projeto }) {
  const isFreng = projeto.title === 'FRENG'

  return (
    <article className={`project-card${isFreng ? ' project-card-featured' : ''}`}>
      <div className="project-card-content">
        <div className="project-card-header">
          <span className="card-label">Projeto</span>
          {isFreng && <FrengMark />}
        </div>
        <h3>{projeto.title}</h3>
        <p>{projeto.description}</p>
      </div>

      <a
        className="button card-button"
        href={projeto.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Acessar
      </a>
    </article>
  )
}

function EcosystemHub() {
  return (
    <section className="ecosystem-section" id="ecossistema">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Ecossistema Shiftcore</span>
          <h2>Produtos e softwares profissionais do grupo</h2>
          <p>
            A nave-mãe centraliza o acesso aos domínios e projetos estratégicos
            do Grupo Shiftcore, direcionando cada visitante para a solução mais
            adequada.
          </p>
        </div>

        <div className="projects-grid">
          {projetos.map((projeto) => (
            <ProjectCard key={projeto.id} projeto={projeto} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} Grupo Shiftcore. Todos os direitos reservados.</p>
        <a href="https://shiftcore.com.br" target="_blank" rel="noopener noreferrer">
          shiftcore.com.br
        </a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <EcosystemHub />
      </main>
      <Footer />
    </>
  )
}
