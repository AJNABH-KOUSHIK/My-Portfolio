import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Projects from './components/Projects/Projects'
import DSA from './components/DSA/DSA'
import Certificates from './components/Certificates/Certificates'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useTheme } from './theme/ThemeContext'

function App() {
  const { theme } = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <DSA />
      <Certificates />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App