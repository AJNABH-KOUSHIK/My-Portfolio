import React, { useState } from 'react'
import './Certificates.css'
import { useTheme } from '../../theme/ThemeContext'
import { certificatesData } from '../../customProps/data'
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from 'react-icons/fa'

const Certificates = () => {
  const { theme } = useTheme()
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? certificatesData.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === certificatesData.length - 1 ? 0 : prev + 1
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const currentCert = certificatesData[currentIndex]

  return (
    <section id="certificates" className={`certificates ${theme}`}>
      <h2 className="section-title">
        <span className="gradient-title">Certificates</span>
      </h2>

      <div className="carousel-wrapper">
        {/* Left Arrow */}
        <button className="carousel-arrow left" onClick={handlePrev}>
          <FaChevronLeft />
        </button>

        {/* Certificate Display */}
        <div className="certificate-display">
          <div className="certificate-image-container">
            <img
              src={currentCert.image}
              alt={currentCert.title}
              className="certificate-image"
            />
          </div>

          <div className="certificate-details">
            <h3 className="cert-title-slider">{currentCert.title}</h3>
            <p className="cert-issuer-slider">
              Issued by <strong>{currentCert.issuer}</strong> • {currentCert.date}
            </p>
            {currentCert.link && currentCert.link !== '#' && (
              <a
                href={currentCert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-view-btn"
              >
                View Certificate <FaExternalLinkAlt size={12} />
              </a>
            )}
          </div>
        </div>

        {/* Right Arrow */}
        <button className="carousel-arrow right" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="carousel-dots">
        {certificatesData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Counter */}
      <div className="carousel-counter">
        {currentIndex + 1} / {certificatesData.length}
      </div>
    </section>
  )
}

export default Certificates