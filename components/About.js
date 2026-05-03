export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About</h2>
      <p className="section-text">
        Hey! I'm a Full Stack Developer and DevOps Engineer. I enjoy building scalable web applications
        using the MERN stack and automating infrastructure with AWS, Terraform, and Ansible.
        I love contributing to open-source projects and have actively participated in multiple hackathons,
        collaborating to solve real-world problems.
      </p>

      <div className="hire-box">
        <h3>Hire</h3>
        <p className="section-text">
          I'm currently available for internships, full-time opportunities, and freelance projects.
          If you're looking for someone passionate, skilled, and ready to contribute, I'm here to help
          bring your ideas to life!
        </p>
        <a href="mailto:ujjwalsaini00@gmail.com" className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
          ✉ Hire Me
        </a>
      </div>
    </section>
  );
}