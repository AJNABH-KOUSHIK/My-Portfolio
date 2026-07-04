import React from 'react'
import './Experience.css'
import { useTheme } from '../../theme/ThemeContext'
import { FaCalendarAlt, FaMapMarkerAlt, FaTrophy, FaBuilding } from 'react-icons/fa'

// Import only the logo you have (fix the capital A)
import codeAlphaLogo from '../../assets/logos/codeAlpha.png'
import futureInternsLogo from '../../assets/logos/futureinterns.png'   // ← THIS LINE
import isroLogo from '../../assets/logos/isro.png'
import byteverseLogo from '../../assets/logos/byteverse.png'
import herguardianLogo from '../../assets/logos/herguardian.png'
import sihLogo from '../../assets/logos/sih.png'



const experiences = [
  {
    id: 1,
    role: "Java Intern",
    company: "CodeAlpha",
    type: "Internship",
    date: "Jul 2026 - Aug 2026",

    location: "Remote",
    description: [
      "Developed Java applications using modern Java frameworks",
      "Collaborated with senior developers on production-level code"
    ],
    skills: ["Java", "Web Development"],
    logo: codeAlphaLogo,  // Now matches your filename
    highlight: false
  },
  {
    id: 2,
    role: "Full Stack Intern",
    company: "Future Interns",
    type: "Summer Intern",
    date: "May 2026 - Jun 2026",
    
    location: "Remote",
    description: [
      "Completed full-stack development certification program",
      "Built responsive web applications using modern technologies"
    ],
    skills: ["Full-Stack Development"],
    logo: futureInternsLogo,
    certificate: true,
    highlight: false
  },
  {
    id: 3,
    role: "Team Leader",
    company: "Bharatiya Antariksh Hackathon 2026",
    type: "Hackathon",
    date: "June 2026 - Aug 2026",
    
    location: "NIT Patna & NIT Surathkal",
    description: [
      "Led a multidisciplinary team to design an AI-based solution for cloud removal in LISS-IV satellite imagery",
      "Proposed a season-aware, metadata-aware deep learning framework using generative AI and temporal imagery",
      "Developed prototype using Python, PyTorch, React, Tailwind CSS, FastAPI, OpenCV, and geospatial technologies"
    ],
    skills: ["Python", "PyTorch", "React", "FastAPI", "OpenCV", "AI/ML"],
    logo: isroLogo,
    highlight: true
  },
  {
    id: 4,
    role: "Hackathon Participant",
    company: "Byteverse (Hackslash 2025)",
    project: "Wealth Wave - Finance Website",
    type: "Hackathon",
    date: "March 2025 - April 2025",
    
    location: "Patna, India",
    description: [
      "Developed a web application using frontend technologies along with JavaScript and modern frameworks",
      "Delivered an end-to-end solution as part of the hackathon requirements"
    ],
    skills: ["JavaScript", "Frontend", "Web Development"],
    logo: byteverseLogo,
    highlight: false
  },
  {
    id: 5,
    role: "Team Member",
    company: "Build for Good National Hackathon 2026",
    project: "HerGuardian – Women Safety Platform",
    type: "Hackathon",
    date: "May 2026 - Aug 2026",
    duration: "",
    location: "India",
    description: [
      "Developed HerGuardian, an AI-powered women safety and smart navigation platform",
      "Implemented safe route analysis, real-time alerts, and voice-triggered SOS features",
      "Built full-stack application using React, Spring Boot, Oracle Database, FastAPI, and ML",
      "Designed AI-driven route safety scoring and live risk monitoring systems"
    ],
    skills: ["React", "Spring Boot", "Oracle", "FastAPI", "Machine Learning", "AI"],
    logo: herguardianLogo,
    highlight: true
  },
  {
    id: 6,
    role: "Participant",
    company: "Smart India Hackathon 2025 (SIH)",
    project: "Smart Tourist Safety System",
    type: "Hackathon",
    date: "Sept 2025 - Nov 2025",
    
    location: "Patna, India",
    description: [
      "Participated in SIH 2025 (Problem ID: SIH25002) under Travel Tourism theme",
      "Developed 'Smart Tourist Safety Monitoring Incident Response System' as part of Team MYKLAN",
      "Selected for Round 1 and Round 2 based on project innovation and feasibility",
      "Collaborated in designing software solution for tourist safety and emergency response"
    ],
    skills: ["Problem Solving", "Team Collaboration", "System Design"],
    logo: sihLogo,
    highlight: false
  }
]

const Experience = () => {
  const { theme } = useTheme()

  const handleImageError = (e) => {
    e.target.style.display = 'none'
    e.target.nextSibling.style.display = 'flex'
  }

  return (
    <section id="experience" className={`experience ${theme}`}>
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="gradient-text">Experience</span> & Leadership
          </h2>
          <p className="section-subtitle">
            Professional internships and hackathon experiences
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className={`experience-card ${exp.highlight ? 'highlight' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="experience-logo">
                <img 
                  src={exp.logo} 
                  alt={`${exp.company} logo`} 
                  onError={handleImageError}
                />
                <div className="logo-fallback" style={{display: 'none'}}>
                  <FaBuilding size={24} />
                </div>
              </div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-title-group">
                    <h3 className="experience-role">{exp.role}</h3>
                    <div className="experience-company">
                      <span className="company-name">{exp.company}</span>
                      {exp.project && (
                        <span className="project-name"> • {exp.project}</span>
                      )}
                      <span className="experience-type"> • {exp.type}</span>
                    </div>
                  </div>
                  
                  <div className="experience-meta">
                    <div className="meta-item">
                      <FaCalendarAlt className="meta-icon" />
                      <span>{exp.date}</span>
                      {exp.duration && <span className="duration"> • {exp.duration}</span>}
                    </div>
                    <div className="meta-item">
                      <FaMapMarkerAlt className="meta-icon" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="experience-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>

                <div className="experience-skills">
                  {exp.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience