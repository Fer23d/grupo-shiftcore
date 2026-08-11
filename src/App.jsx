import './App.css'

const futureSlots = [
  { id: 1, label: 'Novo produto em breve' },
  { id: 2, label: 'Nova solução em desenvolvimento' },
  { id: 3, label: 'Nova tecnologia em pesquisa' },
]

const vectorCadFeatures = [
  'Vetorização inteligente',
  'Exportação CAD',
  'Geração 3D',
  'IA integrada',
  'Processamento de imagens',
]

const pillars = [
  { id: 1, icon: '🚀', title: 'Produtos próprios' },
  { id: 2, icon: '🤖', title: 'Inteligência Artificial' },
  { id: 3, icon: '⚙️', title: 'Engenharia e tecnologia' },
  { id: 4, icon: '🌎', title: 'Soluções digitais' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <a className="brand" href="#inicio" aria-label="Página inicial do Grupo Shiftcore">
          Grupo Shiftcore
        </a>

        <nav className="main-nav" aria-label="Menu principal">
          <a href="#sobre">Sobre</a>
          <a href="#vectorcad">VectorCAD</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-background" aria-hidden="true">
        <span className="tech-line tech-line-one" />
        <span className="tech-line tech-line-two" />
        <span className="tech-node tech-node-one" />
        <span className="tech-node tech-node-two" />
      </div>

      <div className="container hero-layout">
        <div className="hero-content">
          <span className="eyebrow">Tecnologia própria para mercados técnicos</span>
          <h1>Construindo tecnologias próprias para transformar ideias em soluções digitais</h1>
          <p>
            O Grupo Shiftcore desenvolve produtos de tecnologia com foco em
            inovação, engenharia e inteligência artificial.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#vectorcad">
              Conhecer o VectorCAD
            </a>
            <a className="button button-secondary" href="#contato">
              Entrar em contato
            </a>
          </div>
        </div>

        <aside className="hero-visual" aria-label="Resumo tecnológico do Grupo Shiftcore">
          <div className="visual-grid">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="visual-card">
            <span>Shiftcore OS</span>
            <strong>Produtos digitais inteligentes</strong>
            <p>Engenharia, IA e automação aplicada.</p>
          </div>
        </aside>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="about-section" id="sobre">
      <div className="container split-section">
        <div>
          <span className="eyebrow">Sobre o Grupo</span>
          <h2>Sobre o Grupo Shiftcore</h2>
        </div>
        <p>
          O Grupo Shiftcore é uma empresa de tecnologia focada no desenvolvimento
          de soluções próprias. Nosso objetivo é criar ferramentas inteligentes
          que resolvem problemas reais em diferentes áreas.
        </p>
      </div>
    </section>
  )
}

function ProductSection() {
  return (
    <section className="product-section" id="vectorcad">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Nosso primeiro produto</span>
          <h2>VectorCAD</h2>
          <p>
            Plataforma inteligente para transformar imagens em vetores CAD,
            arquivos DXF, SVG e modelos 3D.
          </p>
        </div>

        <article className="product-showcase">
          <div className="product-copy">
            <span className="product-label">Produto oficial</span>
            <h3>VECTORCAD</h3>
            <p>
              Uma solução criada para acelerar fluxos de desenho técnico,
              processamento visual e geração de arquivos vetoriais para ambientes
              profissionais.
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

          <div className="product-device" aria-hidden="true">
            <div className="device-toolbar">
              <span />
              <span />
              <span />
            </div>
            <div className="cad-canvas">
              <span className="cad-shape cad-shape-one" />
              <span className="cad-shape cad-shape-two" />
              <span className="cad-shape cad-shape-three" />
              <span className="cad-axis cad-axis-x" />
              <span className="cad-axis cad-axis-y" />
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

function FutureSection() {
  return (
    <section className="future-section" id="futuro">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Ecossistema futuro</span>
          <h2>Novas tecnologias em desenvolvimento</h2>
          <p>
            O Grupo Shiftcore está construindo uma nova geração de produtos
            digitais. Este é apenas o começo.
          </p>
        </div>

        <div className="future-grid">
          {futureSlots.map((slot) => (
            <article className="future-card" key={slot.id}>
              <span>{slot.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PillarsSection() {
  return (
    <section className="pillars-section">
      <div className="container pillars-grid">
        {pillars.map((pillar) => (
          <article className="pillar-card" key={pillar.id}>
            <span aria-hidden="true">{pillar.icon}</span>
            <strong>{pillar.title}</strong>
          </article>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer" id="contato">
      <div className="container footer-layout">
        <div>
          <strong>Grupo Shiftcore</strong>
          <p>Direitos reservados.</p>
        </div>

        <div className="footer-links">
          <span>Produto:</span>
          <a href="https://vetorcad.com.br" target="_blank" rel="noopener noreferrer">
            VectorCAD
          </a>
          <a href="mailto:contato@shiftcore.com.br">Contato</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div id="shiftcore-v1">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductSection />
        <FutureSection />
        <PillarsSection />
      </main>
      <Footer />
    </div>
  )
}
