// src/components/Header.js
import React from 'react';
import './header.css';

function Header({ onNavigate }) {
  return (
    <header className="main-header">
      <h1>My Portfolio</h1>
      <nav className="nav-buttons">
        <button onClick={() => onNavigate('home')}>Home</button>
        <button onClick={() => onNavigate('projects')}>Projects</button>
        <button onClick={() => onNavigate('certifications')}>Certifications</button>
        <button onClick={() => onNavigate('contact')}>Contact</button>
      </nav>
    </header>
  );
}

export default Header;
