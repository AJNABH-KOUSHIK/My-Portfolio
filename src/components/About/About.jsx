import React from 'react'
import './About.css'
import { useTheme } from '../../theme/ThemeContext'
import { personalInfo } from '../../customProps/data'
import { FaHandshake, FaFileAlt } from 'react-icons/fa'
import profilePic from '../../assets/profile.jpg'

const About = () => {
  const { theme } = useTheme()

  const scrollToProjects = (e) => {
    e.preventDefault()
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="about" className={`about ${theme}`}>
      <div className="about-wrapper">
        {/* LEFT — photo */}
        <div className="about-left">
          <img src={profilePic} alt="Ajnabh Koushik" className="about-photo" />
        </div>

        {/* RIGHT — content */}
        <div className="about-right">
          <h2 className="about-title">About Me</h2>

<p className="about-text">
  Hey there 👋 I'm <span className="about-name">Ajnabh Koushik</span>,
  a Computer Science undergraduate at NIT Patna and a full-stack developer
  passionate about building seamless digital experiences. I love transforming
  ideas into responsive, scalable, and visually engaging web applications that
  people genuinely enjoy using.
</p>

<p className="about-text">
  What excites me most is the challenge behind the code. From solving complex
  problems and optimizing performance to refining user experiences, I enjoy
  pushing boundaries and continuously learning through every project I build.
</p>

<p className="about-text">
  Beyond development, I'm driven by curiosity, creativity, and the ambition to
  create technology that leaves a meaningful impact. Always exploring, always
  building, and always ready for the next big idea 🚀
</p>

          <p className="about-quote">
            "I develop solutions where creativity meets clean engineering"
          </p>

          <div className="about-buttons">
            {/* Connect → LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn filled"
            >
              <FaHandshake /> Connect
            </a>

            {/* Projects → scroll to projects section */}
            <a href="#projects" onClick={scrollToProjects} className="about-btn outlined">
              <FaFileAlt /> Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About