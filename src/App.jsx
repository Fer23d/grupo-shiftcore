import vectorCadHome from './assets/vectorcad-home.png'
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
    title: 'Engenharia aplicada',
    description: 'Produtos pensados para precisão, escala técnica e fluxos profissionais.',
  },
  {
    id: 2,
    title: 'Software próprio',
    description: 'Tecnologia desenvolvida internamente para resolver problemas reais.',
  },
  {
    id: 3,
    title: 'Inteligência Artificial',
    description: 'Automação e análise visual integradas a ferramentas produtivas.',
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
          <a href="#vectorcad">VectorCAD</a>
          <a href="#sobre">Grupo</a>
          <a href="#futuro">Futuro</a>
        </nav>
      </div>
    </header>
  )
}

function HeroProductPreview() {
  return (
    <div className="hero-product-preview" aria-label="Interface real do VectorCAD">
      <div className="preview-frame preview-frame-primary">
        <img src={vectorCadHome} alt="Tela real do VectorCAD com preview técnico CAD" />
      </div>

      <div className="preview-chip chip-one">SVG / DXF</div>
      <div className="preview-chip chip-two">Escala técnica</div>
      <div className="preview-chip chip-three">Preview CAD</div>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" id="inicio">
      <div className="technical-grid" aria-hidden="true" />

      <div className="container hero-layout">
        <div className="hero-copy">
          <span className="eyebrow">Software próprio para engenharia</span>
          <h1>Criamos softwares que transformam conhecimento técnico em ferramentas inteligentes.</h1>
          <p>
            O Grupo Shiftcore desenvolve produtos digitais próprios combinando
            engenharia, inteligência artificial e automação.
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
        <div className="product-image-shell">
          <img
            src={vectorCadProduct}
            alt="Interface do VectorCAD mostrando vetorização e preview técnico"
          />
        </div>

        <div className="vector-copy">
          <span className="eyebrow">Produto oficial</span>
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
      <div className="container about-layout">
        <span className="section-number">01</span>
        <div className="about-title">
          <span className="eyebrow">Sobre o Grupo</span>
          <h2>O Grupo Shiftcore cria tecnologia própria para transformar problemas complexos em soluções digitais.</h2>
        </div>
        <p>
          A empresa nasce com foco em produtos, não em vitrines. Cada solução é
          criada para converter conhecimento técnico em interfaces objetivas,
          automações úteis e ferramentas que ajudam profissionais a executar
          tarefas complexas com mais clareza.
        </p>
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
          <h2>Uma base de produto, engenharia e automação.</h2>
        </div>

        <div className="pillar-rows">
          {pillars.map((pillar) => (
            <article className="pillar-row" key={pillar.id}>
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
      <div className="container future-layout">
        <div>
          <span className="eyebrow">Próximos ciclos</span>
          <h2>O começo de um ecossistema.</h2>
        </div>
        <p>
          VectorCAD é o primeiro produto oficial. A partir dele, o Grupo
          Shiftcore prepara uma base para novos softwares próprios, mantendo o
          foco em tecnologia aplicada e validação real antes de apresentar novos
          nomes ao mercado.
        </p>
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
    <div id="shiftcore-product-focused">
      <Header />
      <main>
        <HeroSection />
        <VectorCadSection />
        <AboutSection />
        <PillarsSection />
        <FutureSection />
      </main>
      <Footer />
    </div>
  )
}
