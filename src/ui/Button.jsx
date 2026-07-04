import React from 'react'
import './Button.css'

const Button = ({ children, onClick, variant = 'primary', icon, href, target }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={`custom-btn ${variant}`}
        onClick={onClick}
      >
        {icon && <span className="btn-icon">{icon}</span>}
        {children}
      </a>
    )
  }

  return (
    <button className={`custom-btn ${variant}`} onClick={onClick}>
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  )
}

export default Button