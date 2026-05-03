const skills = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS", category: "DevOps" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Terraform", category: "DevOps" },
  { name: "Ansible", category: "DevOps" },
  { name: "Jenkins", category: "CI/CD" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "Java", category: "Language" },
  { name: "JavaScript", category: "Language" },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill.name} className="skill-badge">
            {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
}