import './App.css'

const vectorCadFeatures = [
  'Vetorização inteligente de imagens',
  'Exportação DXF e SVG',
  'Modelos 3D a partir de referências visuais',
  'Processamento com inteligência artificial',
]

const pillars = [
  {
    id: 1,
    title: 'Tecnologia própria',
    description: 'Produtos desenvolvidos internamente, com visão de longo prazo e domínio técnico.',
  },
  {
    id: 2,
    title: 'Inteligência Artificial',
    description: 'IA aplicada para acelerar interpretação visual, automação e tomada de decisão.',
  },
  {
    id: 3,
    title: 'Engenharia aplicada',
    description: 'Soluções pensadas para fluxos técnicos, precisão operacional e produtividade.',
  },
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
          <a href="#futuro">Futuro</a>
        </nav>
      </div>
    </header>
  )
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="cad-plane">
        <span className="cad-line cad-line-a" />
        <span className="cad-line cad-line-b" />
        <span className="cad-line cad-line-c" />
        <span className="cad-node cad-node-a" />
        <span className="cad-node cad-node-b" />
      </div>
      <div className="ai-panel">
        <span>AI VECTOR ENGINE</span>
        <strong>CAD automation layer</strong>
        <small>image · vector · model</small>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" id="inicio">
      <div className="digital-field" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="eyebrow">Deep tech software holding</span>
          <h1>Construindo a próxima geração de softwares inteligentes.</h1>
          <p>
            O Grupo Shiftcore desenvolve produtos digitais próprios combinando
            engenharia, inteligência artificial e tecnologia.
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

        <HeroVisual />
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="about-section" id="sobre">
      <div className="container about-layout">
        <span className="section-index">01</span>
        <div>
          <span className="eyebrow">Sobre o Grupo</span>
          <h2>Construímos tecnologia própria para transformar ideias em produtos.</h2>
        </div>
        <p>
          O Grupo Shiftcore nasce para criar produtos digitais com profundidade
          técnica. Em vez de operar como um portfólio de links, a marca concentra
          pesquisa, engenharia e inteligência artificial para transformar problemas
          complexos em softwares claros, úteis e escaláveis.
        </p>
      </div>
    </section>
  )
}

function VectorCadSection() {
  return (
    <section className="vector-section" id="vectorcad">
      <div className="container vector-layout">
        <div className="product-screen" aria-label="Visual conceitual do VectorCAD">
          <div className="screen-topbar">
            <span />
            <span />
            <span />
          </div>
          <div className="screen-canvas">
            <div className="vector-path vector-path-one" />
            <div className="vector-path vector-path-two" />
            <div className="vector-path vector-path-three" />
            <div className="scan-beam" />
          </div>
        </div>

        <div className="vector-copy">
          <span className="eyebrow">Produto oficial</span>
          <h2>VectorCAD</h2>
          <p>
            Plataforma inteligente para transformar imagens em vetores CAD,
            arquivos DXF, SVG e modelos 3D.
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

function PillarsSection() {
  return (
    <section className="pillars-section">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Pilares</span>
          <h2>Uma base técnica para produtos de alto impacto.</h2>
        </div>

        <div className="pillars-list">
          {pillars.map((pillar) => (
            <article className="pillar-item" key={pillar.id}>
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
      <div className="container future-panel">
        <span className="eyebrow">Próximos ciclos</span>
        <h2>O começo de um ecossistema.</h2>
        <p>
          O VectorCAD é o primeiro produto oficial do Grupo Shiftcore. A partir
          dele, a empresa prepara uma arquitetura de novas tecnologias próprias,
          sem antecipar nomes ou promessas antes da validação técnica.
        </p>
        <div className="future-slots" aria-label="Espaços para produtos futuros">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <strong>Grupo Shiftcore</strong>
        <div>
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
    <div id="shiftcore-deeptech">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <VectorCadSection />
        <PillarsSection />
        <FutureSection />
      </main>
      <Footer />
    </div>
  )
}
