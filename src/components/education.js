import React from 'react';
import './education.css';

function Education() {
  return (
    <div className="education-container">
      <h2>🎓 Education</h2>

      <div className="education-entry">
        <h3>Bachelor's of Computer Applications</h3>
        <p>Graduated in 2024</p>
        <p>R.S.M.T College, MGKVP, Varanasi, India</p>
      </div>

      <div className="education-entry">
        <h3>Senior Secondary (12th Grade)</h3>
        <p>Passed in 2020</p>
        <p>G.N.E.S shivpur tarna, Varanasi, India</p>
        <p>Stream: Science (PCM)</p>
      </div>

      <div className="education-entry">
        <h3>Secondary (10th Grade)</h3>
        <p>Passed in 2018</p>
        <p>G.N.E.S shivpur tarna, Varanasi, India</p>
      </div>
    </div>
  );
}

export default Education;
