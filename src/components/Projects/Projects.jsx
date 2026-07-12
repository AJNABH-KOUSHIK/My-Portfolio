import React from 'react'
import './Projects.css'
import { useTheme } from '../../theme/ThemeContext'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

import portfolioImg from '../../assets/projects/portfolio.png'
import herguardianImg from '../../assets/projects/herguardian.png'
import weatherImg from '../../assets/projects/weather.png'



const projects = [
  {
    id: 1, title: 'Portfolio Website', 
    image: portfolioImg,
     description: 'A modern and responsive developer portfolio built with React.js to showcase my projects, skills, and journey. Designed with smooth animations, clean UI, dark/light mode, and an interactive user experience focused on performance and accessibility.',
      tech: ['React.js', 'TailWind CSS', 'JavaScript', 'Vite','HTML','EmailJS'],
       github: 'https://github.com/YOUR_USERNAME/portfolio', 
       live: 'http://localhost:5174/',
  },
  {
    id: 2, title: 'HerGuardian',
    image: herguardianImg,
    description: 'An AI-powered women safety and smart navigation platform designed to provide safer travel experiences through intelligent route analysis, real-time alerts, and voice-triggered SOS functionality. Features include AI-based safety scoring, live risk heatmaps, incident reporting, and secure authentication for seamless and reliable user safety.', 
    tech: [ 'React.js', 'Tailwind CSS', 'Spring Boot', 'Oracle DB', 'Gemini API', 'Leaflet.js' ],
    github: 'https://github.com/Leelasatyavijayeswarikopalli-22/HerGuardian.git',
    live: 'https://her-guardian.vercel.app/',
  },
  {
   {
    id: 3,
    title: 'VK DSA Hub',
    subtitle: 'DSA Practice Platform',
    category: 'Full Stack Web App',
    image: vkdsahub,
    description:
  'An all-in-one DSA learning platform featuring pattern-based problem organization, curated questions from LeetCode, GFG, TUF, and Codeforces, progress analytics, revision tracking, practice calendar, personal notes, resource management, and secure Firebase authentication.'
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase Auth', 'Firestore', 'Netlify'],
    github: 'https://github.com/AJNABH-KOUSHIK/VK-DSA-Sheet',
    live: 'https://vk-dsa-hub.netlify.app/'
}
  },
]

const Projects = () => {
  const { theme } = useTheme()

  return (
    <section id="projects" className={`projects ${theme}`}>
      <h2 className="section-title">
        My <span className="gradient-text">Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="project-card">
            {/* TOP — screenshot */}
            <div className="project-image">
              <img src={p.image} alt={p.title} />
              <div className="project-overlay">
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub size={22} />
                </a>
                <a href={p.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt size={20} />
                </a>
              </div>
            </div>

            {/* BOTTOM — purple body */}
            <div className="project-body">
              <h3 className="project-title">{p.title}</h3>

              <div className="project-tech">
                {p.tech.map((t, i) => (
                  <span key={i} className="tech-pill">{t}</span>
                ))}
              </div>

              <p className="project-desc">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
