"use client";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact</h2>
      <p className="section-text">
        Feel free to reach out — job opportunity, project idea, or just to say hello.
      </p>

      <div className="contact-links">
        <a href="mailto:ujjwalsaini00@gmail.com" className="contact-item">
          <span className="contact-label">Email</span>
          <span className="contact-value">ujjwalsaini00@gmail.com</span>
        </a>

        
          href="https://github.com/ujjwalsaini45"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
       <a >
          <span className="contact-label">GitHub</span>
          <span className="contact-value">github.com/ujjwalsaini45</span>
        </a>

        
          href="https://www.linkedin.com/in/ujjwal-saini-575a7a278"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        <a>
          <span className="contact-label">LinkedIn</span>
          <span className="contact-value">linkedin.com/in/ujjwal-saini-575a7a278</span>
        </a>
      </div>
    </section>
  );
}