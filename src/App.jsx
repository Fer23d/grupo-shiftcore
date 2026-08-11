import { useEffect } from 'react'
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
          <a href="/#vectorcad">VectorCAD</a>
          <a href="/#sobre">Grupo</a>
          <a href="/#futuro">Futuro</a>
        </nav>
      </div>
    </header>
  )
}

function HeroProductPreview() {
  return (
    <div className="hero-product-preview" aria-label="Interface real do VectorCAD" data-reveal>
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
        <div className="hero-copy" data-reveal>
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
        <div className="product-image-shell" data-reveal>
          <img
            src={vectorCadProduct}
            alt="Interface do VectorCAD mostrando vetorização e preview técnico"
          />
        </div>

        <div className="vector-copy" data-reveal>
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
      <div className="container about-layout" data-reveal>
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
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Pilares</span>
          <h2>Uma base de produto, engenharia e automação.</h2>
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
            <a href="mailto:contato@shiftcore.com.br">Contato</a>
          </nav>

          <nav className="footer-column" aria-label="Links legais">
            <span>Legal</span>
            <a href="/termos-de-uso">Termos de Uso</a>
            <a href="/politica-de-privacidade">Política de Privacidade</a>
            <a href="mailto:contato@shiftcore.com.br">Contato</a>
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

  return (
    <div id="shiftcore-product-focused">
      <Header />
      <main>
        {legalPage ? (
          <LegalPage page={legalPage} />
        ) : (
          <>
            <HeroSection />
            <VectorCadSection />
            <AboutSection />
            <PillarsSection />
            <FutureSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
