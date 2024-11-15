import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faNode, faPython, faReact } from '@fortawesome/free-brands-svg-icons'; 
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

import './index.css'; 

const skills = [
  { icon: faHtml5, name: "HTML5", percentage: "100" },
  { icon: faCss3Alt, name: "CSS3", percentage: "100" },
  { icon: faJs, name: "JavaScript", percentage: "80" },
  { icon: faDatabase, name: "MySQL, MongoDB", percentage: "90" },
  { icon: faReact, name: "React Js", percentage: "80" },
  { icon: faNode, name: "Node.js, Express.js", percentage: "90" },
  { icon: faPython, name: "Python", percentage: "80" },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className='skill-head'>My Skills</h1>
      <ul className="skills-grid">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: `${skill.percentage}%` }}
              ></div>
              <span className="percentage">{skill.percentage}%</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
