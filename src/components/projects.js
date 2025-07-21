import React from 'react';
import './projects.css';

const Projects = () => {
  const projectList = [
    {
      name: 'Ragnar – Voice Assistant',
      description: 'A  voice assistant that runs on web page and responds to commands and performs basic tasks like search open few links and provide brief , fully built with Python and Flask.',
      tech: ['Python', 'Flask', 'Speech Recognition', 'Pyttsx3'],
      link: 'https://github.com/vimal2645/ragnar'
    },
    {
      name: 'WHVid-Downloader',
      description: 'A full-stack video downloader app using Flask backend and React frontend. Supports , Instagram .',
      tech: ['React', 'Flask', 'yt-dlp', 'SQLite', 'Docker'],
      link: 'https://github.com/vimal2645/WHVid-Downloader'
    }
  ];

  return (
    <div className="projects-page">
      <h2 className="projects-title">My Projects</h2>
      <div className="project-cards">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <ul className="tech-stack">
              {project.tech.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
            <a className="view-btn" href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
