import React from 'react'
import './DSA.css'
import { useTheme } from '../../theme/ThemeContext'
import { SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import { FaCode } from 'react-icons/fa'

// Badge images
import badge50Days from '../../assets/badges/50days2026.png'
import badgeJun from '../../assets/badges/jun2026.png'

const platforms = [
  {
    id: 1,
    name: 'LeetCode',
    icon: <SiLeetcode size={36} color="#FFA116" />,
    solved: '200+',
    link: 'https://leetcode.com/u/ajnabhkoushik/',
  },
  {
    id: 2,
    name: 'GeeksforGeeks',
    icon: <SiGeeksforgeeks size={36} color="#2F8D46" />,
    solved: '100+',
    link: 'https://www.geeksforgeeks.org/user/YOUR_GFG_USERNAME/',
  },
  {
    id: 3,
    name: 'TUF (takeUforward)',
    icon: <FaCode size={36} color="#D41F30" />,
    solved: '150+',
    link: 'https://takeuforward.org/profile/YOUR_TUF_USERNAME',
  },
]

const annualBadges = [
  { img: badge50Days, name: '50 Days Badge', date: '2026' },
]

const dailyBadges = [
  { img: badgeJun, name: 'Jun Badge', date: '2026-06' },
]

const DSA = () => {
  const { theme } = useTheme()

  return (
    <section id="dsa" className={`dsa ${theme}`}>
      <h2 className="section-title">
        DSA <span className="gradient-text">Journey</span>
      </h2>

      <div className="dsa-wrapper">
        {/* LEFT — platform cards */}
        <div className="dsa-left">
          {platforms.map((p) => (
            <a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="platform-card"
            >
              <div className="platform-icon">{p.icon}</div>
              <div className="platform-info">
                <h3>{p.name}</h3>
                <p>Solved: <span>{p.solved}</span></p>
              </div>
            </a>
          ))}
        </div>

        {/* RIGHT — LeetCode badges box */}
        <div className="dsa-right">
          <div className="badges-card">
            <div className="badges-header">
              <SiLeetcode size={28} color="#FFA116" />
              <h3>ajnabhkoushik LeetCode Badges</h3>
            </div>
            <hr className="badges-divider" />

            <h4 className="badges-subtitle">Annual Medals</h4>
            <div className="badges-grid">
              {annualBadges.map((b, i) => (
                <div key={i} className="badge-item">
                  <div className="badge-flip">
                    <img src={b.img} alt={b.name} style={{ animationDelay: `${i * 0.5}s` }} />
                  </div>
                  <p className="badge-name">{b.name}</p>
                  <p className="badge-date">{b.date}</p>
                </div>
              ))}
            </div>

            <h4 className="badges-subtitle">Daily Medals</h4>
            <div className="badges-grid">
              {dailyBadges.map((b, i) => (
                <div key={i} className="badge-item">
                  <div className="badge-flip">
                    <img src={b.img} alt={b.name} style={{ animationDelay: `${(i + 1) * 0.5}s` }} />
                  </div>
                  <p className="badge-name">{b.name}</p>
                  <p className="badge-date">{b.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DSA