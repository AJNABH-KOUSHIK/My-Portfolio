import React, { useState, useEffect } from 'react'
import './Hero.css'
import { TypeAnimation } from 'react-type-animation'
import { personalInfo } from '../../customProps/data'
import { useTheme } from '../../theme/ThemeContext'
import Lottie from 'lottie-react'
import robotAnimation from '../../assets/robot.json'
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaDiscord,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFileAlt,
  FaCode,
} from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import Button from '../../ui/Button'

const Hero = () => {
  const { theme } = useTheme()
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="home" className={`hero ${theme}`}>
      {/* BACKGROUND BLOBS - Place them HERE, outside the wrapper! */}
      <div className="gradient-blob blob-1"></div>
      <div className="gradient-blob blob-2"></div>
      <div className="gradient-blob blob-3"></div>

      {/* Stars (optional, keep if you want them) */}
      <div className="stars-container">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
            }}
          />
        ))}
      </div>

      {/* Your content wrapper */}
      <div className="hero-wrapper">
        <div className="hero-left">
          <h1 className="hero-title">
            I'm <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          <div className="hero-typewriter">
            <TypeAnimation
              sequence={personalInfo.roles.flatMap((role) => [role, 2000])}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="typewriter-text"
            />
          </div>

          <div className="hero-info">
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <span>{personalInfo.email}</span>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="hero-buttons">
            <Button
              variant="primary"
              icon={<FaFileAlt />}
              href={personalInfo.resumeLink}
              target="_blank"
            >
              View Resume
            </Button>
            <Button
              variant="secondary"
              icon={<FaCode />}
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Explore Projects
            </Button>
          </div>

          <div className="hero-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon github">
              <FaGithub size={24} />
            </a>
            <a href={personalInfo.instagram} target="_blank" rel="noopener noreferrer" className="social-icon instagram">
              <FaInstagram size={24} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <FaLinkedin size={24} />
            </a>
            
            <a href={personalInfo.leetcode} target="_blank" rel="noopener noreferrer" className="social-icon leetcode">
              <SiLeetcode size={24} />
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="character-container">
            <div className="glow-effect"></div>
            <div className="lottie-wrapper">
              <Lottie 
                animationData={robotAnimation}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            <div className="character-shadow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero