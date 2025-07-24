import React from 'react';
import './App.css';

const projects = [
  {
    title: "🎣 Fishing Community App  ",
    description: "Catchy is a smart community-based mobile application designed for fishing enthusiasts. Built with Flutter, Laravel, and AI, it offers a platform for users to share fishing experiences, discover and review fishing spots, join events, and access real-time weather forecasts and AI-based fishing predictions. The app also features a marketplace for fishing gear and a fishing journal for tracking personal trips.",
    link: "https://github.com/donia/fishing-app"
  },
  {
    title: "Karya Website ",
    description: "As part of my second-year academic project, I contributed to the development of Karya, a multi-level house rental website. The platform allows users to browse, search, and book houses based on various criteria such as location, price, and type. I actively worked on both the frontend using HTML, CSS, and JavaScript, and contributed to the design documentation and overall project structure.",
    link: "https://github.com/donia/weather-ai"
  },
  {
    title: "Task Manager Website",
    description: "During my summer internship, I worked on a web-based task manager application. I was in charge of developing the backend using Spring Boot, focusing on building robust RESTful APIs and ensuring secure user authentication.",
    link: "https://github.com/donia/marketplace-module"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
