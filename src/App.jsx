import { useState } from 'react'
import './App.css'

const githubUrl = 'https://github.com/lalitkalal5'
const linkedinUrl = 'https://www.linkedin.com/in/lalit-kalal-481662198/'
const email = 'lalitkalal71@gmail.com'

const skillGroups = [
  {
    title: 'Backend & Data',
    skills: ['Ruby', 'Ruby on Rails', 'Node.js', 'PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Frontend & Mobile',
    skills: ['JavaScript', 'React', 'Flutter', 'Kotlin', 'Jetpack Compose', 'Pygame'],
  },
  {
    title: 'Realtime & Cloud',
    skills: ['WebSocket', 'WebRTC', 'Socket.IO', 'Firebase', 'AWS S3', 'REST APIs'],
  },
  {
    title: 'Tools & Commerce',
    skills: ['Git', 'GitHub', 'Postman', 'Shopify', 'MediaPipe', 'Google Sheets'],
  },
]

const projects = [
  {
    name: 'Finance Management System',
    type: 'Ruby on Rails',
    description:
      'An institutional finance platform for tracking income, expenditures, taxes, and visual analytics with an emphasis on reliable financial records.',
    tags: ['Rails', 'PostgreSQL', 'Analytics'],
    accent: 'violet',
    status: 'Professional work',
  },
  {
    name: 'SecondShelf',
    type: 'E-Commerce Platform',
    description:
      'A full-stack marketplace for buying and selling pre-owned books, including catalogue search, seller listings, cart, checkout, and order tracking.',
    tags: ['E-Commerce', 'Full Stack', 'UX'],
    accent: 'amber',
    status: 'In progress',
  },
  {
    name: 'Annochat',
    type: 'Realtime Video Chat',
    description:
      'An anonymous peer-to-peer video chat experience with realtime user matching and browser-based communication.',
    tags: ['WebRTC', 'Socket.IO', 'JavaScript'],
    image: '/images/annochat.png',
    demo: 'https://annochat.onrender.com/',
    github: 'https://github.com/lalitkalal5/annochat',
    accent: 'cyan',
  },
  {
    name: 'Twitter Clone',
    type: 'MERN Social Platform',
    description:
      'A full-stack social media application where users can publish posts, like content, and follow other accounts.',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: '/images/twitter-clone.png',
    demo: 'https://twitterclone-7pir.vercel.app/',
    github: 'https://github.com/lalitkalal5/twitterclone',
    accent: 'blue',
  },
  {
    name: 'Android News Dashboard',
    type: 'Native Android App',
    description:
      'A modern news reader with search and saved stories, built around a clean declarative Android interface.',
    tags: ['Kotlin', 'Jetpack Compose', 'Retrofit'],
    image: '/images/Newsapp.png',
    github: 'https://github.com/lalitkalal5/NewsApp',
    accent: 'green',
  },
  {
    name: 'Hand-Gesture Interaction',
    type: 'Computer Vision',
    description:
      'An interactive Python interface using MediaPipe to detect and translate hand movements into realtime actions.',
    tags: ['Python', 'MediaPipe', 'Pygame'],
    accent: 'rose',
    status: 'Experimental build',
  },
]

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.69c-2.78.61-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.84a9.6 9.6 0 0 1 2.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.73c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
    />
  </svg>
)

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Lalit Kalal home">
          LK<span>.</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-github" href={githubUrl} target="_blank" rel="noreferrer">
            <GithubIcon /> GitHub
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid" />
          <div className="hero-copy">
            <p className="eyebrow"><span /> Available for new opportunities</p>
            <h1>
              I build digital products that feel <em>clear, fast,</em> and useful.
            </h1>
            <p className="hero-intro">
              I&apos;m <strong>Lalit Kalal</strong>, a Ruby on Rails developer and full-stack
              builder based in Gujarat. I work across web, mobile, realtime systems, and
              e-commerce.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowIcon />
              </a>
              <a className="button button-ghost" href={`mailto:${email}`}>
                Let&apos;s talk
              </a>
            </div>
            <div className="hero-stats">
              <div><strong>6+</strong><span>Featured builds</span></div>
              <div><strong>20+</strong><span>Tools & technologies</span></div>
              <div><strong>2025</strong><span>IT graduate</span></div>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <img src="/lalir.png" alt="Lalit Kalal" />
            </div>
            <div className="portrait-note">
              <span>Currently</span>
              <strong>Building with Rails</strong>
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-heading">
            <p className="section-kicker">01 / About</p>
            <h2>Developer mindset.<br />Product perspective.</h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              I like understanding the whole system, not just the screen in front of me.
            </p>
            <p>
              My work spans backend architecture, clean interfaces, realtime communication,
              mobile development, and online retail operations. That range helps me connect
              technical decisions to the people and workflows they serve.
            </p>
            <p>
              I&apos;m currently a Ruby on Rails Developer at Essence Solusoft, after completing
              a Bachelor of Engineering in Information Technology at LDRP-ITR.
            </p>
            <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">
              Browse my GitHub profile <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-heading compact">
            <p className="section-kicker">02 / Capabilities</p>
            <h2>A versatile technical toolkit.</h2>
          </div>
          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <span className="card-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="skill-list">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section" id="experience">
          <div className="section-heading">
            <p className="section-kicker">03 / Experience</p>
            <h2>Learning by building real systems.</h2>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-date">Sep 2025 - Present</div>
              <div>
                <p className="timeline-company">Essence Solusoft / Ahmedabad</p>
                <h3>Ruby on Rails Developer</h3>
                <p>
                  Developing a finance management system for institutional income,
                  expenditures, taxes, and analytical reporting.
                </p>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">Mar 2025 - Apr 2025</div>
              <div>
                <p className="timeline-company">FashionFloor India</p>
                <h3>E-Commerce Executive</h3>
                <p>
                  Managed product listings, pricing, inventory coordination, order
                  processing, customer queries, and promotional campaigns.
                </p>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">Graduated 2025</div>
              <div>
                <p className="timeline-company">LDRP-ITR / KSV University</p>
                <h3>B.E. Information Technology</h3>
                <p>
                  Built a broad foundation in computing systems and applied it through
                  full-stack, Android, realtime, and computer-vision projects.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="projects-heading">
            <div className="section-heading compact">
              <p className="section-kicker">04 / Selected work</p>
              <h2>Projects with range.</h2>
            </div>
            <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">
              See all repositories <ArrowIcon />
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card accent-${project.accent}`} key={project.name}>
                <div className="project-visual">
                  {project.image ? <img src={project.image} alt="" /> : (
                    <div className="project-monogram">{project.name.slice(0, 2)}</div>
                  )}
                  <span className="project-index">0{index + 1}</span>
                </div>
                <div className="project-content">
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <div className="project-links">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer">
                        Live demo <ArrowIcon />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <GithubIcon /> Source
                      </a>
                    )}
                    {project.status && <span>{project.status}</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div>
            <p className="section-kicker light">05 / Contact</p>
            <h2>Have a useful idea?<br /><em>Let&apos;s build it.</em></h2>
          </div>
          <div className="contact-details">
            <p>
              I&apos;m open to developer roles, freelance work, and conversations about
              interesting products.
            </p>
            <a className="contact-email" href={`mailto:${email}`}>{email}<ArrowIcon /></a>
            <div className="social-links">
              <a href={githubUrl} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <a className="brand footer-brand" href="#top">LK<span>.</span></a>
        <p>Designed and built by Lalit Kalal / {new Date().getFullYear()}</p>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  )
}

export default App
