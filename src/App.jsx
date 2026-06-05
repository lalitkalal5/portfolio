import { useState } from 'react'
import './App.css'

const githubUrl = 'https://github.com/lalitkalal5'
const linkedinUrl = 'https://www.linkedin.com/in/lalit-kalal-481662198/'
const email = 'lalitkalal71@gmail.com'
const whatsappUrl = 'https://wa.me/919265589437?text=Hi%20Lalit%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20talk%20about%20Medora%20or%20a%20business%20project.'

const skillGroups = [
  {
    title: 'Business Operations',
    skills: ['Inventory Management', 'Invoice Scanning', 'Billing Workflows', 'E-Commerce', 'Process Automation', 'Retail Operations'],
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
    title: 'Backend & Tools',
    skills: ['Ruby on Rails', 'Node.js', 'PostgreSQL', 'MongoDB', 'GitHub', 'Postman'],
  },
]

const projects = [
  {
    name: 'Medora',
    type: 'Inventory & Billing Product',
    description:
      'The product I am actively selling: Medora reduces one of the most time-taking retail tasks by letting users scan purchase invoices and add items directly into inventory, while also managing billing and stock in one smoother workflow.',
    tags: ['Invoice Scanning', 'Inventory', 'Billing'],
    accent: 'green',
    status: 'Flagship product',
    demo: whatsappUrl,
  },
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
    name: 'BookAgain',
    type: 'E-Commerce Platform',
    description:
      'A live second-hand book marketplace built around the idea of giving books another life, with a clean buying experience and practical e-commerce flow.',
    tags: ['E-Commerce', 'Marketplace', 'Books'],
    accent: 'amber',
    demo: 'https://book-again.vercel.app/',
    status: 'Live product',
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
            <p className="eyebrow"><span /> Technical entrepreneur / Business builder</p>
            <h1>
              I turn business problems into <em>simple, scalable</em> products.
            </h1>
            <p className="hero-intro">
              I&apos;m <strong>Lalit Kalal</strong>, an entrepreneur-minded builder with an
              Information Technology background. I use software to solve real business
              bottlenecks, especially in e-commerce, inventory, billing, and operations.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore my work <ArrowIcon />
              </a>
              <a className="button button-ghost" href={whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp me
              </a>
            </div>
            <div className="hero-stats">
              <div><strong>7+</strong><span>Products & builds</span></div>
              <div><strong>2</strong><span>Business domains</span></div>
              <div><strong>IT</strong><span>Technical foundation</span></div>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-frame">
              <img src="/lalir.png" alt="Lalit Kalal" />
            </div>
            <div className="portrait-note">
              <span>Currently</span>
              <strong>Building Medora</strong>
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
          </div>
        </section>

        <section className="about section" id="about">
          <div className="section-heading">
            <p className="section-kicker">01 / About</p>
            <h2>Entrepreneurial vision.<br />Technical execution.</h2>
          </div>
          <div className="about-copy">
            <p className="lead">
              I am most interested in building businesses, not just building software.
            </p>
            <p>
              My IT background gives me the ability to turn ideas into working products, while
              my e-commerce and operations experience keeps me focused on sales, inventory,
              customer experience, efficiency, and sustainable growth.
            </p>
            <p>
              I am currently selling Medora, a product that helps retailers scan purchase
              invoices, add purchases into inventory, reduce manual entry, and manage billing
              more conveniently.
            </p>
            <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">
              Browse my GitHub profile <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="section-heading compact">
            <p className="section-kicker">02 / Capabilities</p>
            <h2>Business thinking backed by technology.</h2>
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
            <h2>Learning business by building real systems.</h2>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-date">Sep 2025 - Present</div>
              <div>
                <p className="timeline-company">Essence Solusoft / Ahmedabad</p>
                <h3>Business Systems Developer</h3>
                <p>
                  Developing a finance management system for institutional income,
                  expenditures, taxes, and analytical reporting while learning how reliable
                  software supports day-to-day business decisions.
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
                  processing, customer queries, and promotional campaigns, gaining direct
                  experience in how an online retail business operates.
                </p>
              </div>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">Graduated 2025</div>
              <div>
                <p className="timeline-company">LDRP-ITR / KSV University</p>
                <h3>B.E. Information Technology</h3>
                <p>
                  Built the technical foundation needed to create products, automate manual
                  processes, and transform business ideas into scalable digital systems.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="projects-heading">
            <div className="section-heading compact">
              <p className="section-kicker">04 / Selected work</p>
            <h2>Products built around real needs.</h2>
            </div>
            <a className="text-link" href={githubUrl} target="_blank" rel="noreferrer">
              See all repositories <ArrowIcon />
            </a>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <a
                className={`project-card accent-${project.accent}`}
                href={project.demo || project.github || githubUrl}
                target="_blank"
                rel="noreferrer"
                key={project.name}
                aria-label={`Open ${project.name}`}
              >
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
                      <span>Open project <ArrowIcon /></span>
                    )}
                    {project.github && (
                      <span><GithubIcon /> Source available</span>
                    )}
                    {project.status && <span>{project.status}</span>}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div>
            <p className="section-kicker light">05 / Contact</p>
            <h2>Building a business?<br /><em>Let&apos;s make it smarter.</em></h2>
          </div>
          <div className="contact-details">
            <p>
              I&apos;m interested in e-commerce opportunities, business partnerships, and
              products that make everyday operations simpler and more profitable.
            </p>
            <a className="contact-email" href={`mailto:${email}`}>{email}<ArrowIcon /></a>
            <div className="social-links">
              <a href={githubUrl} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a>
              <a href={linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <ArrowIcon /></a>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <ArrowIcon /></a>
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
