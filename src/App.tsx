import { createElement, type ReactNode } from "react";

type IconName =
  | "arrow"
  | "code"
  | "github"
  | "linkedin"
  | "mail"
  | "external"
  | "terminal"
  | "layers"
  | "spark";

const icons: Record<IconName, ReactNode> = {
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
  code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 5l-4 14" /></>,
  github: <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7.2A5.6 5.6 0 0 0 19.3 3 5.2 5.2 0 0 0 19.1 0S17.9-.4 15 1.5a15.4 15.4 0 0 0-8 0C4.1-.4 2.9 0 2.9 0a5.2 5.2 0 0 0-.2 3A5.6 5.6 0 0 0 1.2 7.3c0 5.6 3.5 6.8 6.8 7.2A4.8 4.8 0 0 0 7 18v4m0-3c-3 .9-3-1.5-4.2-2" />,
  linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><path d="M2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="3" /><path d="m3 6 9 7 9-7" /></>,
  external: <><path d="M15 3h6v6M10 14 21 3M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
  terminal: <><path d="m4 17 6-6-6-6M12 19h8" /></>,
  layers: <><path d="m12 2 10 5-10 5L2 7l10-5Z" /><path d="m2 12 10 5 10-5M2 17l10 5 10-5" /></>,
  spark: <><path d="m12 3-1.6 4.4L6 9l4.4 1.6L12 15l1.6-4.4L18 9l-4.4-1.6L12 3Z" /><path d="m5 16-.8 2.2L2 19l2.2.8L5 22l.8-2.2L8 19l-2.2-.8L5 16Z" /></>,
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

function Link({
  href,
  className,
  children,
  label,
  external = false,
}: {
  href: string;
  className?: string;
  children: ReactNode;
  label?: string;
  external?: boolean;
}) {
  return createElement(
    "a",
    {
      href,
      className,
      "aria-label": label,
      ...(external ? { target: "_blank", rel: "noreferrer" } : {}),
    },
    children,
  );
}

function Heading({
  level,
  className,
  children,
}: {
  level: 1 | 2 | 3;
  className?: string;
  children: ReactNode;
}) {
  return createElement(`h${level}`, { className }, children);
}

const skills = [
  { name: "Python", mark: "PY" },
  { name: "Java", mark: "JV" },
  { name: "JavaScript", mark: "JS" },
  { name: "C", mark: "C" },
  { name: "C++", mark: "C+" },
  { name: "C#", mark: "C#" },
  { name: "HTML5", mark: "HT" },
  { name: "Django", mark: "DJ" },
  { name: "Flask", mark: "FL" },
  { name: "FastAPI", mark: "FA" },
  { name: "MySQL", mark: "MY" },
  { name: "PostgreSQL", mark: "PG" },
  { name: "MongoDB", mark: "MG" },
  { name: "Docker", mark: "DK" },
  { name: "Git", mark: "GT" },
];

const focus = [
  { icon: "code" as IconName, title: "Backend & APIs", text: "FastAPI, Django, Flask" },
  { icon: "layers" as IconName, title: "Bases de datos", text: "MySQL, PostgreSQL, MongoDB" },
  { icon: "spark" as IconName, title: "IA y ML", text: "CrewAI, Machine Learning" },
  { icon: "terminal" as IconName, title: "Redes y sistemas", text: "Linux, arquitectura de sistemas" },
];

const stats = [
  { value: "7.21/10", label: "Nota del grado" },
  { value: "10/10", label: "Nota TFG" },
  { value: "2026", label: "Graduación" },
  { value: "ES · CA · EN", label: "Idiomas" },
];

const languages = [
  { name: "Castellano", level: "Nativo" },
  { name: "Catalán", level: "Nativo" },
  { name: "Inglés", level: "Básico (A2/B1)" },
];

const projects = [
  {
    number: "02",
    name: "FutStats",
    url: "https://github.com/ProGer211/PROGRAMACIO_MULTIPLATAFORMA_I_DISTRIBUIDA/tree/main/Proyecto%20PMUD",
    description:
      "Página web de fútbol con backend en Flask, base de datos PostgreSQL e interfaz dinámica en JavaScript.",
    tags: ["Flask", "JavaScript", "PostgreSQL"],
    visual: "dashboard",
  },
  {
    number: "03",
    name: "Robocode — Java AI",
    url: "https://github.com/ProGer211/PROJECTE_DE_PROGRAMACIO/tree/main/Activitat%201",
    description:
      "Robot de combate en Java con estrategias inteligentes usando programación orientada a objetos y a eventos.",
    tags: ["Java", "POO", "Event-driven"],
    visual: "flow",
  },
  {
    number: "04",
    name: "Data Structures — C++",
    url: "https://github.com/ProGer211/Estructura_de_la_Informacio",
    description:
      "Librería completa de estructuras de datos y algoritmos implementada en C++ moderno.",
    tags: ["C++", "Algoritmos"],
    visual: "dashboard",
  },
  {
    number: "05",
    name: "ML — Migration Incidents",
    url: "https://github.com/ProGer211/PROYECTO_MINERIA_DE_DATOS",
    description:
      "Pipeline de Machine Learning para clasificar la gravedad de incidentes migratorios con el Global Missing Migrants Dataset: preprocesamiento, ingeniería de características y comparación de modelos.",
    tags: ["Python", "Machine Learning", "Jupyter"],
    visual: "flow",
  },
  {
    number: "06",
    name: "Portfolio",
    url: "https://github.com/ProGer211/proger211.github.io",
    description:
      "Este portafolio personal, alojado en GitHub Pages: trayectoria, habilidades, proyectos y certificaciones. Responsive y construido con HTML, CSS y JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    visual: "dashboard",
  },
];

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <span className="label-line" />
      <span>{children}</span>
    </div>
  );
}

function ProjectActions({ href }: { href: string }) {
  return (
    <div className="project-actions">
      <Link href={href} className="text-link" external>
        <Icon name="external" /> Ver proyecto
      </Link>
    </div>
  );
}

function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="nav-wrap">
        <nav className="nav glass" aria-label="Navegación principal">
          <Link href="#inicio" className="brand" label="Ir al inicio">
            <span className="brand-mark">GC</span>
            <span className="brand-name">Gerard Chaparro</span>
          </Link>
          <div className="nav-links">
            <Link href="#sobre-mi">Sobre mí</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#proyectos">Proyectos</Link>
            <Link href="#formacion">Formación</Link>
          </div>
          <Link href="#contacto" className="nav-cta">
            Hablemos <span className="status-dot" />
          </Link>
        </nav>
      </header>

      <main>
        <section className="hero section" id="inicio">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot pulse" />
              Buscando prácticas curriculares
            </div>
            <Heading level={1}>
              Del código aprendido
              <span>al mundo real.</span>
            </Heading>
            <p className="hero-role">Estudiante de Ingeniería Informática</p>
            <p className="hero-text">
              Estudiante de 4º de Ingeniería Informática en la UPC (EPSEVG),
              con TFG valorado con un 10/10. Busco unas prácticas curriculares
              donde aportar autonomía, capacidad analítica y ganas de seguir
              aprendiendo.
            </p>
            <div className="hero-actions">
              <Link href="#proyectos" className="btn btn-primary">
                Ver proyectos <Icon name="arrow" />
              </Link>
              <Link href="#contacto" className="btn btn-secondary">
                Contactar
              </Link>
            </div>
            <div className="hero-meta">
              <span>EL PRAT DE LLOBREGAT, ES</span>
              <span className="meta-line" />
              <span>SCROLL TO EXPLORE</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Ventana de terminal con código">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="terminal glass">
              <div className="terminal-bar">
                <div className="window-dots"><i /><i /><i /></div>
                <span>gerard@portfolio ~</span>
                <span>⌘ K</span>
              </div>
              <div className="code-block">
                <p><span className="muted">01</span><span className="pink">const</span> <span className="blue">gerard</span> = {"{"}</p>
                <p><span className="muted">02</span>&nbsp; name: <span className="green">"Gerard Chaparro"</span>,</p>
                <p><span className="muted">03</span>&nbsp; degree: <span className="green">"Ing. Informática"</span>,</p>
                <p><span className="muted">04</span>&nbsp; tfg: <span className="green">"CodeEvaluator · 10/10"</span>,</p>
                <p><span className="muted">05</span>&nbsp; status: <span className="green">"buscando prácticas"</span>,</p>
                <p><span className="muted">06</span>&nbsp; grad: <span className="green">2026</span>,</p>
                <p><span className="muted">07</span>{"}"}</p>
                <p><span className="muted">08</span></p>
                <p><span className="muted">09</span></p>
                <p><span className="muted">10</span></p>
              </div>
              <div className="terminal-footer">
                <span><i className="success-dot" /> SYSTEM ONLINE</span>
                <span>UTF-8</span>
              </div>
            </div>
            <div className="floating-chip chip-top"><span>15+</span> tecnologías</div>
            <div className="floating-chip chip-bottom"><Icon name="code" /> clean.code()</div>
          </div>
        </section>

        <section className="section about" id="sobre-mi">
          <SectionLabel index="01">SOBRE MÍ</SectionLabel>
          <div className="about-grid">
            <div className="about-side">
              <Heading level={2}>
                Curiosidad técnica.
                <span>Ganas de aprender.</span>
              </Heading>
              <figure className="about-photo">
                <img src="/foto_personal.jpg" alt="Gerard Chaparro" loading="lazy" />
                <figcaption>
                  <span className="status-dot pulse" /> Buscando prácticas curriculares
                </figcaption>
              </figure>
            </div>
            <div className="about-content">
              <div className="stats-grid">
                {stats.map((stat) => (
                  <div className="stat-card" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <p className="about-lead">
                Me llamo Gerard, soy estudiante de 4º de Ingeniería Informática
                en la UPC y me quedan solo las prácticas curriculares para
                terminar la carrera.
              </p>
              <p>
                Tengo una base sólida en desarrollo de software, arquitectura
                de sistemas y redes de computadoras, tanto académica como
                autodidacta. Destaco por mi capacidad analítica, orientación a
                la resolución de problemas complejos y rápida adaptación a
                nuevas tecnologías, y me desenvuelvo con autonomía y
                responsabilidad en equipos multidisciplinares.
              </p>
              <div className="focus-grid">
                {focus.map((item) => (
                  <div className="focus-card" key={item.title}>
                    <div className="focus-icon"><Icon name={item.icon} /></div>
                    <div><strong>{item.title}</strong><span>{item.text}</span></div>
                  </div>
                ))}
              </div>
              <div className="lang-row">
                <span className="lang-title">Idiomas</span>
                <div className="lang-grid">
                  {languages.map((lang) => (
                    <div className="lang-chip" key={lang.name}>
                      <strong>{lang.name}</strong>
                      <span>{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="section-heading">
            <div>
              <SectionLabel index="02">STACK TÉCNICO</SectionLabel>
              <Heading level={2}>Herramientas para<br /><span>construir mejor.</span></Heading>
            </div>
            <p>
              Un stack versátil para abordar el producto de extremo a extremo,
              desde la interfaz hasta la infraestructura.
            </p>
          </div>
          <div className="skill-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill.name}>
                <span className="skill-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="skill-mark">{skill.mark}</span>
                <strong>{skill.name}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects" id="proyectos">
          <div className="section-heading">
            <div>
              <SectionLabel index="03">PROYECTOS</SectionLabel>
              <Heading level={2}>Trabajo seleccionado.</Heading>
            </div>
            <p>Productos digitales construidos con intención, desde el concepto hasta el código.</p>
          </div>

          <article className="featured-project glass">
            <div className="project-copy">
              <div className="project-topline"><span>01 / PROYECTO DESTACADO</span><span>TFG · 10/10</span></div>
              <div>
                <span className="project-kicker">EDTECH / AUTOMATIZACIÓN</span>
                <Heading level={3}>CodeEvaluator<span className="accent">_</span></Heading>
                <p>
                  Plataforma web para la ejecución y evaluación automática de código
                  en entornos académicos. Trabajo de Fin de Grado valorado con un
                  10/10: feedback inmediato, sandboxing y métricas claras.
                </p>
              </div>
              <div>
                <div className="tags"><span>Python</span><span>FastAPI</span><span>PostgreSQL</span><span>Redis</span><span>Celery</span><span>Docker</span><span>WebSockets</span><span>Ollama</span></div>
                <ProjectActions href="https://github.com/ProGer211/codeEvaluator" />
              </div>
            </div>
            <div className="project-mockup">
              <div className="mock-browser">
                <div className="mock-bar"><span /><span /><span /><i>app.codeevaluator.dev</i></div>
                <div className="mock-body">
                  <aside>
                    <div className="mock-logo">C<span>/</span></div>
                    {[1, 2, 3, 4].map((n) => <i key={n} />)}
                  </aside>
                  <div className="mock-main">
                    <div className="mock-header"><div><small>EJECUCIÓN ACTIVA</small><strong>Sandbox Docker</strong></div><span>···</span></div>
                    <div className="score-card"><span>NOTA TFG</span><strong>10<small>/10</small></strong><div className="progress"><i /></div></div>
                    <div className="tests">
                      <div><span className="test-ok">✓</span><p><strong>test_docker_sandbox</strong><small>24 ms</small></p><b>PASS</b></div>
                      <div><span className="test-ok">✓</span><p><strong>test_ws_feedback</strong><small>18 ms</small></p><b>PASS</b></div>
                      <div><span className="test-ok">✓</span><p><strong>test_large_submission</strong><small>86 ms</small></p><b>PASS</b></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className={`mini-mock ${project.visual}`}>
                  <div className="mini-window">
                    <div className="mini-top"><i /><i /><i /></div>
                    {project.visual === "dashboard" ? (
                      <div className="chart-ui">
                        <div className="chart-stat"><span>CONVERSIONES</span><strong>24.8K</strong><small>+18.4%</small></div>
                        <div className="bars">{Array.from({ length: 8 }).map((_, i) => <i key={i} />)}</div>
                      </div>
                    ) : (
                      <div className="board-ui">
                        {["IDEAS", "EN CURSO", "LISTO"].map((label, i) => (
                          <div key={label}><span>{label}</span>{Array.from({ length: 3 - (i % 2) }).map((_, j) => <i key={j} />)}</div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="small-project-copy">
                  <div className="project-topline"><span>{project.number} / PROYECTO</span></div>
                  <Heading level={3}>{project.name}</Heading>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <ProjectActions href={project.url} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education" id="formacion">
          <SectionLabel index="04">FORMACIÓN</SectionLabel>
          <div className="education-grid">
            <Heading level={2}>Aprender.<br />Construir.<br /><span>Evolucionar.</span></Heading>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <span>2019 — 2021</span>
                <Heading level={3}>Bachillerato Tecnológico</Heading>
                <p>Formación previa orientada a ciencia y tecnología, base para los estudios de ingeniería.</p>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <span>2021 — 2022</span>
                <Heading level={3}>Ing. de Sistemas de Telecomunicación</Heading>
                <p>Universitat Politècnica de Catalunya (EETAC), Castelldefels. Fundamentos de redes y sistemas.</p>
              </div>
              <div className="timeline-item active">
                <div className="timeline-dot" />
                <span>2022 — 2026</span>
                <Heading level={3}>Grado en Ingeniería Informática</Heading>
                <p>Universitat Politècnica de Catalunya (EPSEVG), Vilanova i la Geltrú. TFG: CodeEvaluator, nota 10/10. Nota media del grado: 7.21/10.</p>
                <div className="tags"><span>TFG · 10/10</span><span>Ingeniería del Software</span></div>
              </div>
              <div className="timeline-item active">
                <div className="timeline-dot" />
                <span>2026 — PRESENTE</span>
                <Heading level={3}>Escuela Oficial de Idiomas</Heading>
                <p>Inglés, nivel A2, en curso.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contacto">
          <div className="contact-glow" />
          <div className="contact-orbit" />
          <div className="contact-content">
            <SectionLabel index="05">CONTACTO</SectionLabel>
            <Heading level={2}>¿Hablamos de<br /><span>prácticas curriculares?</span></Heading>
            <p>
              Estoy buscando prácticas curriculares para terminar mi carrera.
              Si crees que puedo aportar a tu equipo, escríbeme.
            </p>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=gerardch21@gmail.com&su=Pr%C3%A1cticas%20curriculares" className="email-link" external>
              gerardch21@gmail.com <Icon name="arrow" size={24} />
            </Link>
            <div className="social-links">
              <Link href="https://github.com/ProGer211" external><Icon name="github" /> GitHub</Link>
              <Link href="https://www.linkedin.com/in/gerard-chaparro-b67886185" external><Icon name="linkedin" /> LinkedIn</Link>
            </div>
            <p className="contact-location">El Prat de Llobregat, España</p>
          </div>
        </section>
      </main>

      <footer>
        <Link href="#inicio" className="brand"><span className="brand-mark">GC</span><span>Gerard Chaparro</span></Link>
        <span>Diseñado y desarrollado con intención.</span>
        <span>© 2026</span>
      </footer>
    </div>
  );
}

export default App;
