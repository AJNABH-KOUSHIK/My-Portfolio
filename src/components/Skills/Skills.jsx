import React, { useState } from 'react';
import './Skills.css';
import { useTheme } from '../../theme/ThemeContext';
import { skillsData } from '../../customProps/data';

// Import all icons used in data.js
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaJava,
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiMongodb, SiExpress, SiTailwindcss, SiBootstrap, SiMysql,
  SiPostman, SiVercel, SiFirebase, SiSpringboot, SiPandas, SiScikitlearn, SiVisualstudiocode
} from 'react-icons/si';

// Map icon names to components
const iconMap = {
  FaHtml5: FaHtml5, FaCss3Alt: FaCss3Alt, FaJsSquare: FaJsSquare, FaReact: FaReact,
  FaNodeJs: FaNodeJs, FaPython: FaPython, FaGitAlt: FaGitAlt, FaGithub: FaGithub, FaJava: FaJava,
  SiC: SiC, SiCplusplus: SiCplusplus, SiMongodb: SiMongodb, SiExpress: SiExpress,
  SiTailwindcss: SiTailwindcss, SiBootstrap: SiBootstrap, SiMysql: SiMysql,
  SiPostman: SiPostman, SiVercel: SiVercel, SiFirebase: SiFirebase, SiSpringboot: SiSpringboot,
  SiPandas: SiPandas, SiScikitlearn: SiScikitlearn, SiVisualstudiocode: SiVisualstudiocode
};

const Skills = () => {
  const { theme } = useTheme();
  // Default active tab is 'Languages'
  const [activeCategory, setActiveCategory] = useState('Languages');

  // Find the data for the currently selected tab
  const currentCategoryData = skillsData.find(cat => cat.category === activeCategory);

  return (
    <section id="skills" className={`skills-section ${theme}`}>
      <div className="skills-header">
        <h2 className="skills-title">Skills</h2>
        <p className="skills-description">
          Skilled in crafting full-stack web applications with modern technologies. 
          Focused on writing clean code, building intuitive UIs, and delivering scalable solutions.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="skills-tabs">
        {skillsData.map((cat) => (
          <button
            key={cat.category}
            className={`tab-btn ${activeCategory === cat.category ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.category)}
          >
            {cat.category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Skills Grid for Active Tab */}
      <div className="skills-content">
        {currentCategoryData && (
  <div className="skills-grid">
    {currentCategoryData.skills.map((skill, index) => {
      const IconComponent = iconMap[skill.icon];
      return (
        <div key={index} className="skill-card">
          <div className="skill-icon-box" style={{ color: skill.color }}>
            {IconComponent && <IconComponent size={50} />}
          </div>
          <span className="skill-name">{skill.name}</span>
        </div>
      );
    })}
  </div>
)}
      </div>
    </section>
  );
};

export default Skills;