import "./globals.css";

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero-section">
          <div className="hero-text">
            <h1 className="hero-name">Ujjwal Saini</h1>
            <p className="hero-role">Full Stack Developer & DevOps Engineer</p>
            <p className="hero-bio">
              I build scalable web applications and automate infrastructure using modern DevOps tools.
            </p>
            <div className="hero-buttons">
              <a href="mailto:ujjwalsaini00@gmail.com" className="btn-primary">✉ Hire Me</a>
              <a href="https://github.com/ujjwalsaini45" target="_blank" rel="noopener noreferrer" className="btn-secondary">GitHub</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/profile.png" alt="Ujjwal Saini" className="profile-img" />
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <h2 className="section-title">About</h2>
          <p className="section-text">
            Hey! I'm a Full Stack Developer and DevOps Engineer. I enjoy building scalable web
            applications using the MERN stack and automating infrastructure with AWS, Terraform,
            and Ansible. I love contributing to open-source projects and have actively participated
            in multiple hackathons, collaborating to solve real-world problems.
          </p>
          <div className="hire-box">
            <h3>Hire</h3>
            <p className="section-text">
              I'm currently available for internships, full-time opportunities, and freelance
              projects. If you're looking for someone passionate, skilled, and ready to contribute,
              I'm here to help bring your ideas to life!
            </p>
            <a href="mailto:ujjwalsaini00@gmail.com" className="btn-primary">✉ Hire Me</a>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {["React", "Next.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL",
              "AWS", "Docker", "Kubernetes", "Terraform", "Ansible", "Jenkins",
              "GitHub Actions", "Java", "JavaScript"].map((skill) => (
              <span key={skill} className="skill-badge">{skill}</span>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">

            <div className="project-card">
              <h3 className="project-title">EGolf Platform</h3>
              <p className="project-desc">Full-stack golf management platform built with MERN stack, featuring CI/CD pipeline for automated deployments.</p>
              <div className="project-tech">
                {["React", "Node.js", "MongoDB", "CI/CD"].map(t => <span key={t} className="tech-badge">{t}</span>)}
              </div>
              <div className="project-links">
                <a href="https://golf-full-stack-project-ewy2.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">Live ↗</a>
                <a href="https://github.com/ujjwalsaini45/Golf-Full-Stack-Project" target="_blank" rel="noopener noreferrer" className="project-link">GitHub ↗</a>
              </div>
            </div>

            <div className="project-card">
              <h3 className="project-title">CRM System</h3>
              <p className="project-desc">Customer relationship management system using MERN stack, containerized with Docker and deployed via Jenkins.</p>
              <div className="project-tech">
                {["React", "Express", "MongoDB", "Docker", "Jenkins"].map(t => <span key={t} className="tech-badge">{t}</span>)}
              </div>
              <div className="project-links">
                <a href="https://crm-project-company.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link">Live ↗</a>
                <a href="https://github.com/ujjwalsaini45/CRM-Project-Company" target="_blank" rel="noopener noreferrer" className="project-link">GitHub ↗</a>
              </div>
            </div>

            <div className="project-card">
              <h3 className="project-title">DevOps Infrastructure</h3>
              <p className="project-desc">Cloud infrastructure automation using AWS, Terraform for IaC, and complete CI/CD pipeline setup.</p>
              <div className="project-tech">
                {["AWS", "Terraform", "Ansible", "GitHub Actions"].map(t => <span key={t} className="tech-badge">{t}</span>)}
              </div>
              <div className="project-links">
                <a href="https://github.com/ujjwalsaini45/DevOps" target="_blank" rel="noopener noreferrer" className="project-link">GitHub ↗</a>
              </div>
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <p className="section-text">Feel free to reach out — job opportunity, project idea, or just to say hello.</p>
          <div className="contact-links">
            <a href="mailto:ujjwalsaini00@gmail.com" className="contact-item">
              <span className="contact-label">Email</span>
              <span className="contact-value">ujjwalsaini00@gmail.com</span>
            </a>
            <a href="https://github.com/ujjwalsaini45" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">github.com/ujjwalsaini45</span>
            </a>
            <a href="https://www.linkedin.com/in/ujjwal-saini-575a7a278/" target="_blank" rel="noopener noreferrer" className="contact-item">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">linkedin.com/in/ujjwal-saini-575a7a278</span>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Ujjwal Saini · Built with Next.js</p>
      </footer>
    </>
  );
}