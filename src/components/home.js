import React from 'react';
import About from './about';
import Education from './education';
import Skills from './skills';
import './home.css'; // <-- this file includes the animated background

function Home() {
  return (
    <div className="home-page">
      <section id="about">
        <About />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="skills">
        <Skills />
      </section>
    </div>
  );
}

export default Home;
