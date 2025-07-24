import React from 'react';
import './App.css';

const Skills = () => {
  return (
    <section id="skills" className='skills-section'>
      <div className="skills-container">
        <h2 className="skills-title">Technical Skills</h2>
        <div className="skills-grid">
          <div className="skills-category">
            <h3 className="skills-subtitle">Technical Skills</h3>
            <ul className="skills-list">
              <li><strong>Languages:</strong> Java, JavaScript, HTML, CSS, SQL</li>
              <li><strong>Frontend:</strong>  Flutter, react</li>
              <li><strong>Backend:</strong> Spring Boot, Laravel , Flask </li>
              <li><strong>Database:</strong> PostgreSQL, MySQL</li>
              <li><strong>Tools:</strong> Git, GitHub, Postman</li>
            </ul>
          </div>

          <div className="skills-category">
            <h3 className="skills-subtitle">💡 Soft Skills</h3>
            <ul className="skills-list">
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Problem Solving</li>
                <li>Autonomy & Curiosity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
