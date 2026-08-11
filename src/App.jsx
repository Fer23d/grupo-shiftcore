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
        <a className="logo" href="/" aria-label="Página inicial do Grupo Shiftcore">
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
          <span className="hero-kicker">shiftcore.com.br</span>
          <h1>Engenharia, tecnologia e inovação em um ecossistema conectado.</h1>
          <p>
            O Grupo Shiftcore desenvolve softwares profissionais para apoiar
            projetos técnicos, cálculos avançados e plataformas de estudo com
            precisão, confiabilidade e foco em produtividade.
          </p>
          <a className="primary-button" href="#ecossistema">
            Conhecer soluções
          </a>
        </div>

        <div className="hero-panel" aria-label="Resumo institucional">
          <span>Hub corporativo</span>
          <strong>Produtos digitais para fluxos técnicos exigentes.</strong>
          <p>CAD, engenharia, estudo técnico e soluções especializadas.</p>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, description, url }) {
  return (
    <article className="project-card">
      <div>
        <span className="card-label">Projeto Shiftcore</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <a
        className="card-button"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Acessar projeto
      </a>
    </article>
  )
}

function EcosystemHub() {
  return (
    <section className="ecosystem-section" id="ecossistema">
      <div className="container">
        <div className="section-heading">
          <span>Ecossistema Shiftcore</span>
          <h2>Domínios e softwares profissionais do grupo</h2>
          <p>
            A nave-mãe organiza o acesso aos produtos e serviços do Grupo
            Shiftcore, direcionando visitantes para cada solução especializada.
          </p>
        </div>

        <div className="projects-grid">
          {projetos.map((projeto) => (
            <ProjectCard
              key={projeto.id}
              title={projeto.title}
              description={projeto.description}
              url={projeto.url}
            />
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
