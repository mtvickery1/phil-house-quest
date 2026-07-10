import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

const navItems = [
  { path: '/', label: '🏠 Home' },
  { path: '/fears', label: '😰 Fears vs Reality' },
  { path: '/plan', label: '🪜 The Plan' },
  { path: '/edge', label: '👑 Your Edge' },
  { path: '/first-move', label: '⏱ First Move' },
  { path: '/toolkit', label: '🧰 Toolkit' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  return (
    <header className={`phil-nav${scrolled ? ' scrolled' : ''}`}>
      <div className="phil-nav-inner">
        <Link to="/" className="phil-nav-logo">
          Phil's <span>House Quest</span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="phil-nav-links">
            {navItems.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`phil-nav-link${location.pathname === path ? ' active' : ''}`}
                  aria-current={location.pathname === path ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="phil-mobile-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕ CLOSE' : '☰ MENU'}
        </button>
      </div>

      {menuOpen && (
        <nav className="phil-mobile-menu" aria-label="Mobile navigation">
          {navItems.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`phil-nav-link${location.pathname === path ? ' active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
