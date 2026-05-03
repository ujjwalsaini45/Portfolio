const projects = [
  {
    title: "EGolf Platform",
    description: "A full-stack golf management platform built with MERN stack, featuring CI/CD pipeline for automated deployments.",
    tech: ["React", "Node.js", "MongoDB", "CI/CD"],
    live: "https://golf-full-stack-project-ewy2.vercel.app/",
    github: "https://github.com/ujjwalsaini45/Golf-Full-Stack-Project",
  },
  {
    title: "CRM System",
    description: "Customer relationship management system using MERN stack, containerized with Docker and deployed via Jenkins pipelines.",
    tech: ["React", "Express", "MongoDB", "Docker", "Jenkins"],
    live: "https://crm-project-company.vercel.app/",
    github: "https://github.com/ujjwalsaini45/CRM-Project-Company",
  },
  {
    title: "DevOps Infrastructure",
    description: "Cloud infrastructure automation project using AWS, Terraform for IaC, and complete CI/CD pipeline setup.",
    tech: ["AWS", "Terraform", "Ansible", "GitHub Actions"],
    live: null,
    github: "https://github.com/ujjwalsaini45/DevOps"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
            <div className="project-links">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                  Live ↗
                </a>
              )}
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}