import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>📬 Get in Touch</h2>
      <p className="contact-intro">
        I'm always open to new opportunities, collaborations, or just a friendly chat!
        <br />Whether you're a recruiter, developer, or tech enthusiast — feel free to reach out.
      </p>

      <div className="contact-buttons">
        <a
          href="mailto:vimalprakashgnesvns@gmail.com"
          className="contact-btn email"
          title="Send me an email"
        >
          📧 Email Me
        </a>

        <a
          href="https://github.com/vimal2645"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn github"
          title="Check my GitHub"
        >
          🐙 GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/vimal-prakash-a339842b7/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn linkedin"
          title="Connect on LinkedIn"
        >
          💼 LinkedIn
        </a>

        <a
          href="https://docs.google.com/document/d/1WEAAV0yTwbw7adG5e_pUWoTqXaREA7xj/edit?usp=sharing&ouid=114976451163778709513&rtpof=true&sd=true"
          className="contact-btn resume"
          target="_blank"
          rel="noopener noreferrer"
          title="View/Download Resume"
        >
          📄 View My Resume
        </a>
      </div>

      <footer className="contact-footer">
        <p>📍 Based in India | 🌐 Available for Remote Work</p>
      </footer>
    </div>
  );
}

export default Contact;
