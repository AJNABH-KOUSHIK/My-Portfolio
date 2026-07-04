import React from 'react'
import './Card.css'
import { useTheme } from '../theme/ThemeContext'

const Card = ({ children, className = '', hover = true }) => {
  const { theme } = useTheme()

  return (
    <div className={`custom-card ${theme} ${hover ? 'hoverable' : ''} ${className}`}>
      {children}
    </div>
  )
}

export default Card