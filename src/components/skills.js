import React from 'react';
import './skills.css';

const skills = {
  DevOps: ['GitHub Actions', 'CI/CD', 'Jenkins', 'Docker', 'Kubernetes', 'Postman'],
  Programming: ['Python', 'Flask', 'React.js', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  Tools: ['Linux', 'Git', 'GitHub']
};

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <div className="skills-box">
        <h2>💻 My Skills</h2>
        <div className="skills-list">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
