import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Header';
import profilePic from './assets/moi.jpg';
import Projects from './Projects.jsx';
import Skills from './skills.jsx';
import Contact from './contact.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="hero">
  <div className="hero-text">
    <h1>Donia Khdherie</h1>
    <p>
      Hello, I’m Donia — a web and mobile developer.<br />
      What drives me is the ability to turn an idea into a functional and intuitive application.<br />
      I’m also passionate about optimizing user experiences through artificial intelligence, aiming to combine performance with innovation.
    </p>
    <button>Let’s get started &gt;</button>
  </div>
  <div className="hero-img">
    <img src={profilePic} alt="Donia" />
  </div>
</main>


      <Projects />
      <Skills />  {/* Ajout du composant Skills ici */}
      <Contact />
    </div>
  );
}

export default App;
