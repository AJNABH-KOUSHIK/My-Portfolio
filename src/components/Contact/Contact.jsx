import React, { useState, useRef } from 'react'
import './Contact.css'
import { useTheme } from '../../theme/ThemeContext'
import Card from '../../ui/Card'
import Button from '../../ui/Button'
import emailjs from '@emailjs/browser'
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa'

const Contact = () => {
  const { theme } = useTheme()
  const formRef = useRef()
  const [status, setStatus] = useState('') // '', 'sending', 'success', 'error'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .sendForm(
        'service_jaxurij',        // ← your Service ID
        'template_vgns8pw',       // ← paste your Template ID
        formRef.current,
        'pJ7WkQ3YzxXAL9vm3'         // ← paste your Public Key
      )
      .then(() => {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus(''), 4000)
      })
      .catch((error) => {
  console.log('EMAILJS ERROR:', error)   // ← add this
  setStatus('error')
  setTimeout(() => setStatus(''), 4000)
})
  }

  return (
    <section id="contact" className={`contact ${theme}`}>
      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container">
        <div className="contact-info">
          <Card className="contact-info-card">
            <h3 className="contact-info-title">Let's talk</h3>
            <p className="contact-info-desc">
              Feel free to reach out to me for any queries, collaborations, or just
              a friendly chat!
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>ajnabhkoushikbaruah@gmail.com</p>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Vishakapatnam , Andhra Pradesh , India</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/AJNABH-KOUSHIK"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/ajnabh-koushik-baruah-0ba92a336/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://www.instagram.com/ajnabh_koushik/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <FaInstagram size={22} />
              </a>
            </div>
          </Card>
        </div>

        <div className="contact-form-wrapper">
          <Card className="contact-form-card">
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`form-input ${theme}`}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`form-input ${theme}`}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`form-input ${theme}`}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`form-textarea ${theme}`}
                />
              </div>

              <Button type="submit" variant="primary" icon={<FaPaperPlane />}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>

              {status === 'success' && (
                <p className="form-success">✅ Message sent! I'll get back to you soon.</p>
              )}
              {status === 'error' && (
                <p className="form-error">❌ Something went wrong. Try again!</p>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact