import React from 'react';
import './App.css';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <a href="#">Home</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="social">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/donia-khdherie-1b1b1a330/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          in
        </a>

        {/* Gmail */}
        <a
          href="mailto:doniakdheri1@gmail.com"
          aria-label="Email"
        >
          GM
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/doniakdh"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          GH
        </a>
      </div>
    </header>
  );
};

export default Header;
