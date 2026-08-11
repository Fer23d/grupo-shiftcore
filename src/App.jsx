import './App.css'

const ecosystemLinks = [
  {
    id: 1,
    title: 'Produto Principal',
    description: 'Acesse nossa principal solucao digital para clientes e parceiros.',
    url: 'https://www.seu-produto-principal.com',
  },
  {
    id: 2,
    title: 'Servicos Corporativos',
    description: 'Conheca nosso portfolio de servicos especializados para empresas.',
    url: 'https://www.seus-servicos.com',
  },
  {
    id: 3,
    title: 'Central de Suporte',
    description: 'Encontre ajuda, documentacao e canais oficiais de atendimento.',
    url: 'https://www.seu-suporte.com',
  },
  {
    id: 4,
    title: 'Blog Institucional',
    description: 'Acompanhe noticias, artigos e atualizacoes do nosso ecossistema.',
    url: 'https://www.seu-blog.com',
  },
]

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="logo" href="/" aria-label="Pagina inicial">
          NaveMae
        </a>

        <nav className="main-nav" aria-label="Menu principal">
          <a href="#ecosystem">Ecossistema</a>
          <a href="#about">Empresa</a>
          <a href="#contact">Contato</a>
        </nav>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="hero" id="about">
      <div className="container hero-content">
        <span className="hero-eyebrow">Portal Corporativo Central</span>
        <h1>Conectando todo o ecossistema digital da nossa empresa.</h1>
        <p>
          Um hub institucional criado para orientar clientes, parceiros e equipes
          aos nossos principais produtos, servicos e canais oficiais.
        </p>
        <a className="hero-button" href="#ecosystem">
          Explorar ecossistema
        </a>
      </div>
    </section>
  )
}

function EcosystemCard({ title, description, url }) {
  return (
    <article className="ecosystem-card">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <a
        className="card-link"
        href={url}
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
    <section className="ecosystem-section" id="ecosystem">
      <div className="container">
        <div className="section-heading">
          <span>Ecossistema</span>
          <h2>Nossos dominios estrategicos</h2>
          <p>
            Escolha abaixo o ambiente que deseja acessar dentro da nossa rede de
            produtos e servicos.
          </p>
        </div>

        <div className="ecosystem-grid">
          {ecosystemLinks.map((item) => (
            <EcosystemCard
              key={item.id}
              title={item.title}
              description={item.description}
              url={item.url}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container footer-content">
        <p>© {new Date().getFullYear()} NaveMae. Todos os direitos reservados.</p>
        <p>contato@suaempresa.com</p>
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
