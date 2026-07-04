import React from 'react'
import './Education.css'
import { useTheme } from '../../theme/ThemeContext'
import { educationData } from '../../customProps/data'
import { FaGraduationCap, FaMedal } from 'react-icons/fa'
import { LuBookMarked } from 'react-icons/lu'
import Card from '../../ui/Card'

const Education = () => {
  const { theme } = useTheme()

  return (
    <section id="education" className={`education ${theme}`}>
      <h2 className="section-title">
        My <span>Education</span>
      </h2>

      <div className="education-container">
        <div className="timeline">
          {educationData.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot">
                <FaGraduationCap />
              </div>
              <Card className="timeline-card">
                <div className="timeline-duration">
                  <LuBookMarked className="duration-icon" />
                  <span>{edu.duration}</span>
                </div>
                <h3 className="timeline-title">{edu.title}</h3>
                <h4 className="timeline-institution">{edu.institution}</h4>
                <div className="timeline-grade-wrapper">
                  <FaMedal className="grade-icon" />
                  <span className="timeline-grade">Grade: {edu.grade}</span>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education