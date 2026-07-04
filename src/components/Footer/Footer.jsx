import React from 'react'
import './Footer.css'
import { useTheme } from '../../theme/ThemeContext'
import { FaHeart, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const { theme } = useTheme()

  return (
    <footer className={`footer ${theme}`}>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-circle">
  <img src="/logo.png" alt="Logo" className="logo-img" />
</div>
              <span className="footer-name">Ajnabh Koushik</span>
            </div>
            <p className="footer-desc">
              Creating modern web solutions with a passion for innovation and technology.
            </p>
          </div>

          <div className="footer-links-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social-section">
            <h4>Follow Me</h4>
            <div className="footer-socials">
              <a href="https://github.com/AJNABH-KOUSHIK" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ajnabh-koushik-baruah-0ba92a336/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
              <a href="https://www.instagram.com/ajnabh_koushik/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
         <p className="footer-text">
  © {new Date().getFullYear()} Ajnabh Koushik • Crafted with{" "}
  <span className="heart-wrapper">
    <FaHeart className="heart-icon" />
  </span>{" "}
  and a passion for innovation. All Rights Reserved.
</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer