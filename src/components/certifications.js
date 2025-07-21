import React from 'react';
import './certifications.css';

const certifications = [
  {
    title: "Introduction to DevOps – IBM",
    image: "/certs/devops.jpeg",
  },
  {
    title: "Agile Development and Scrum – IBM",
    image: "/certs/agile_and_scrum.jpeg",
  },
  {
    title: "Application Development using Microservices – IBM",
    image: "/certs/microservices.jpeg",
  },
  {
    title: "Application Security for Developers – IBM",
    image: "/certs/application_security.jpeg",
  },
  {
    title: "CI/CD – IBM",
    image: "/certs/cicd.jpeg",
  },
  {
    title: "Docker, Kubernetes & OpenShift – IBM",
    image: "/certs/containers.jpeg",
  },
  {
    title: "Monitoring and Observability – IBM",
    image: "/certs/monitoring.jpeg",
  },
  {
    title: "Test and Behavior Driven Development – IBM",
    image: "/certs/tdd_bdd.jpeg",
  },
  {
    title: "HTML and CSS Certification",
    image: "/certs/htmlcss.jpeg",
  },
];

function Certifications() {
  return (
    <div className="certifications-container">
      <h2>📜 Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <img src={cert.image} alt={cert.title} />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
