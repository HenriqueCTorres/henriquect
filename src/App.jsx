import { useState } from 'react'

const github = 'https://github.com/HenriqueCTorres'

const iconPaths = {
  arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
  github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 4 5.1 5.1 0 0 0 19.2.4S18 0 15 2.1a13.4 13.4 0 0 0-7 0C5 .1 3.8.4 3.8.4A5.1 5.1 0 0 0 3.7 4 5.5 5.5 0 0 0 2.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 18c-3.6 2-4-2-6-2"/></>,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><rect width="4" height="12" x="2" y="9" rx="1"/><circle cx="4" cy="4" r="2"/></>,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.9 5.7a2 2 0 0 1-2.2 0L2 7"/></>,
  external: <><path d="M14 3h7v7"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></>,
  menu: <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>,
  close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
  code: <><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 5-4 14"/></>,
  database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 12v7c0 1.7 3.6 3 8 3s8-1.3 8-3v-7"/></>,
  chart: <><path d="M3 3v18h18"/><path d="m7 16 4-5 3 2 5-7"/></>,
  spark: <><path d="m12 3-1.7 5.3L5 10l5.3 1.7L12 17l1.7-5.3L19 10l-5.3-1.7Z"/><path d="m19 16-.7 2.3L16 19l2.3.7L19 22l.7-2.3L22 19l-2.3-.7Z"/></>,
}

function Icon({ name, size = 18, strokeWidth = 1.8 }) {
  return <svg aria-hidden="true" className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">{iconPaths[name]}</svg>
}

const projects = [
  { number: '01', title: 'Dashboard de Vendas', slug: 'Dashboard-Vendas', description: 'Pipeline de análise que parte de CSVs, trata os dados com Pandas, persiste em SQLite e transforma consultas SQL em indicadores de negócio.', tags: ['Python', 'Pandas', 'SQLite', 'SQL'], type: 'Dados & BI', accent: 'lime', href: `${github}/Dashboard-Vendas` },
  { number: '02', title: 'Conexão de API com React', slug: 'Conexao-de-API-com-React', description: 'Interface React conectada ao backend Node.js com Axios: leitura, criação e exclusão de registros em um fluxo completo entre tela, servidor e banco.', tags: ['React', 'Axios', 'Node.js', 'Hooks'], type: 'Front-end + API', accent: 'violet', href: `${github}/Conexao-de-API-com-React` },
  { number: '03', title: 'Teste de API com Node.js', slug: 'Teste-de-API-com-NodeJs', description: 'API REST com Express, MongoDB e Prisma, explorando rotas, parâmetros, status HTTP e operações CRUD de ponta a ponta.', tags: ['Node.js', 'Express', 'MongoDB', 'Prisma'], type: 'Back-end', accent: 'orange', href: `${github}/Teste-de-API-com-NodeJs` },
  { number: '04', title: 'CP1 Mobile', slug: 'CP1-Mobile', description: 'Aplicativo em React Native com Expo para cadastrar e exibir dados de um aluno, usando hooks, componentes e estilização nativa.', tags: ['React Native', 'Expo', 'JavaScript'], type: 'Mobile', accent: 'blue', href: `${github}/CP1-Mobile` },
  { number: '05', title: 'Library Management API', slug: 'CP02-Java-Adv', description: 'Projeto Java focado em qualidade de domínio: relatório de bugs, testes e regras de negócio para evitar ISBNs duplicados em uma API de biblioteca.', tags: ['Java', 'API', 'Testes', 'Regras de negócio'], type: 'Qualidade & Java', accent: 'pink', href: `${github}/CP02-Java-Adv` },
  { number: '06', title: 'API de Futebol', slug: 'Api-em-Java', description: 'Serviço em Java com Quarkus, experimentando uma estrutura moderna para APIs e o ciclo de desenvolvimento com live coding.', tags: ['Java', 'Quarkus', 'REST'], type: 'Back-end', accent: 'cyan', href: `${github}/Api-em-Java` },
]

const skills = [
  { title: 'Interfaces que respondem', icon: 'code', text: 'React, JavaScript, HTML, CSS e React Native para construir experiências claras, componentizadas e responsivas.', chips: ['React', 'JavaScript', 'CSS', 'Expo'] },
  { title: 'Dados que viram direção', icon: 'chart', text: 'Python, Pandas, SQL e SQLite para explorar, organizar e traduzir dados em indicadores acionáveis.', chips: ['Python', 'Pandas', 'SQL', 'SQLite'] },
  { title: 'Back-end com propósito', icon: 'database', text: 'Node.js, Express, MongoDB, Prisma, Java e Quarkus para criar APIs e entender o produto de ponta a ponta.', chips: ['Node.js', 'Express', 'Java', 'Quarkus'] },
]

function ProjectCard({ project }) {
  return <article className={`project-card accent-${project.accent}`}>
    <div className="project-card-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span></div>
    <div className="project-card-content"><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>
    <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.title} no GitHub`}><span>Ver repositório</span><Icon name="arrow" size={17} /></a>
  </article>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <div className="grain" aria-hidden="true" />
    <header className="site-header">
      <a href="#top" className="wordmark" onClick={closeMenu} aria-label="Voltar ao início"><span className="wordmark-mark">HT</span><span>henrique<span className="wordmark-dot">.</span>dev</span></a>
      <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}><Icon name={menuOpen ? 'close' : 'menu'} size={22} /></button>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal"><a href="#projetos" onClick={closeMenu}>Projetos <span>06</span></a><a href="#competencias" onClick={closeMenu}>Competências</a><a href="#sobre" onClick={closeMenu}>Sobre</a><a href="#contato" className="nav-contact" onClick={closeMenu}>Vamos conversar <Icon name="arrow" size={16} /></a></nav>
    </header>

    <main id="top">
      <section className="hero section-pad" aria-labelledby="hero-title">
        <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-dot" />Disponível para novas oportunidades <span className="eyebrow-line" /></div><h1 id="hero-title">Código com<br /><em>curiosidade.</em><br />Dados com direção.</h1><p className="hero-lede">Sou Henrique Torres, desenvolvedor em formação. Transformo aprendizado prático em interfaces, APIs e análises que fazem sentido.</p><div className="hero-actions"><a href="#projetos" className="button button-primary">Explorar projetos <Icon name="arrow" size={17} /></a><a href={github} className="button button-ghost" target="_blank" rel="noreferrer"><Icon name="github" size={18} /> GitHub <Icon name="external" size={14} /></a></div><div className="hero-meta"><span>Guarulhos, SP</span><span className="meta-divider" /><span>FIAP · ADS</span></div></div>
        <div className="hero-art" aria-label="Resumo visual das áreas de atuação"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="hero-panel"><div className="panel-bar"><span><i /> henrique@portfolio:~</span><span>● ● ●</span></div><div className="panel-body"><p className="code-comment">// onde a curiosidade encontra o código</p><p><span className="code-key">const</span> <span className="code-name">foco</span> = [</p><p className="code-indent"><span className="code-string">"interfaces"</span>,</p><p className="code-indent"><span className="code-string">"APIs"</span>,</p><p className="code-indent"><span className="code-string">"dados"</span></p><p>]</p><div className="code-result"><span className="result-dot" /> construindo próximo capítulo<span className="cursor" /></div></div></div><div className="floating-note note-top"><Icon name="spark" size={15} /> aprender fazendo</div><div className="floating-note note-bottom">28 repos públicos <span>↗</span></div></div>
      </section>

      <section className="signal-strip" aria-label="Resumo do perfil"><div className="signal-inner"><span className="signal-label">EM MOVIMENTO</span><div className="signal-track"><span className="signal-pulse" /> front-end <b>→</b> APIs <b>→</b> mobile <b>→</b> dados <b>→</b> próximos experimentos</div><span className="signal-year">2026</span></div></section>

      <section className="projects section-pad" id="projetos" aria-labelledby="projects-title"><div className="section-heading split-heading"><div><p className="section-kicker">01 / trabalho selecionado</p><h2 id="projects-title">Projetos que mostram<br /><span>o processo.</span></h2></div><p className="section-intro">Uma seleção do que venho construindo para entender tecnologia na prática — da primeira interface ao dado que sustenta uma decisão.</p></div><div className="project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div><div className="all-projects"><span>Quer ver o laboratório completo?</span><a href={github} target="_blank" rel="noreferrer">Acessar todos os repositórios <Icon name="arrow" size={17} /></a></div></section>

      <section className="trajectory section-pad" id="sobre" aria-labelledby="trajectory-title"><div className="trajectory-visual"><div className="big-index">02</div><div className="vertical-label">TRAJETÓRIA EM CONSTRUÇÃO</div><div className="trajectory-orbit"><span className="orbit-dot dot-lime" /><span className="orbit-dot dot-violet" /><span className="orbit-dot dot-orange" /></div></div><div className="trajectory-copy"><p className="section-kicker">02 / sobre o caminho</p><h2 id="trajectory-title">Ainda estou<br /><em>aprendendo.</em><br />E isso é o ponto.</h2><p>Minha trajetória acontece no encontro entre aulas, experimentos e projetos que saem do papel. Cada repositório é uma forma de testar uma ideia — e entender um pouco melhor como as partes se conectam.</p><p>Hoje, estudo Análise e Desenvolvimento de Sistemas na FIAP e busco oportunidades para continuar construindo, colaborando e evoluindo.</p><a className="text-link" href="https://www.linkedin.com/in/henrich1/" target="_blank" rel="noreferrer">Conheça meu LinkedIn <Icon name="arrow" size={16} /></a></div></section>

      <section className="skills section-pad" id="competencias" aria-labelledby="skills-title"><div className="section-heading"><p className="section-kicker">03 / caixa de ferramentas</p><h2 id="skills-title">Onde eu <span>atuo.</span></h2></div><div className="skills-grid">{skills.map((skill) => <article className="skill-card" key={skill.title}><div className="skill-icon"><Icon name={skill.icon} size={22} /></div><h3>{skill.title}</h3><p>{skill.text}</p><div className="skill-chips">{skill.chips.map((chip) => <span key={chip}>{chip}</span>)}</div></article>)}</div></section>

      <section className="contact section-pad" id="contato" aria-labelledby="contact-title"><div className="contact-glow" aria-hidden="true" /><div className="contact-content"><p className="section-kicker">04 / próximo passo</p><h2 id="contact-title">Vamos construir<br /><em>algo que importa?</em></h2><p>Se você tem um problema para resolver, um time para conhecer ou só quer trocar uma ideia sobre tecnologia, minha caixa de entrada está aberta.</p><div className="contact-actions"><a className="button button-primary" href="mailto:henriquect08@gmail.com"><Icon name="mail" size={17} /> Enviar um e-mail</a><a className="button button-outline" href={github} target="_blank" rel="noreferrer"><Icon name="github" size={17} /> Ver GitHub</a></div></div><div className="contact-aside"><span>canal preferido</span><a href="mailto:henriquect08@gmail.com">henriquect08<br />@gmail.com</a><span className="aside-arrow">↗</span></div></section>
    </main>

    <footer className="site-footer"><a href="#top" className="wordmark"><span className="wordmark-mark">HT</span><span>henrique<span className="wordmark-dot">.</span>dev</span></a><p>Projetando o próximo commit, uma linha de cada vez.</p><div className="footer-links"><a href={github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" size={18} /></a><a href="https://www.linkedin.com/in/henrich1/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a><a href="mailto:henriquect08@gmail.com" aria-label="E-mail"><Icon name="mail" size={18} /></a></div><span className="footer-copy">© {new Date().getFullYear()} HT</span></footer>
  </div>
}

export default App
