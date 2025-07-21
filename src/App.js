import React, { useState } from 'react';
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Contact from './components/contact';
import Certifications from './components/certifications';
import Education from './components/education';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <About />
            <Skills />
            <Education />
          </>
        );
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      case 'certifications':
        return <Certifications />;
      default:
        return <About />;
    }
  };

  return (
    <div>
      <Header onNavigate={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
