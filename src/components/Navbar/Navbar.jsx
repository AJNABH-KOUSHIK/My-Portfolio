import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { useTheme } from '../../theme/ThemeContext'
import { navLinks } from '../../customProps/data'
import { FaMoon, FaSun, FaBars, FaTimes, FaArrowRight } from 'react-icons/fa'

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active link based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 100

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop
          const height = section.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveLink(navLinks[index].id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (id) => {
    setActiveLink(id)
    setMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${theme} ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={() => handleNavClick('home')}>
          <div className="logo-circle">
            <img src="/logo.png" alt="Logo" className="logo-img" />
          </div>
        </a>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`nav-link ${activeLink === link.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.id)
                  }}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
          </button>

          <a
            href="#contact"
            className="connect-btn"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('contact')
            }}
          >
            Let's Connect <FaArrowRight />
          </a>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar