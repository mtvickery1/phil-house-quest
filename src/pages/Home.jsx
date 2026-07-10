import { Link } from 'react-router-dom'
import { Arrow, ChevronDown } from '../components/Icons'

export default function Home() {
  return (
    <div className="phil-page">
      <section className="phil-hero" aria-labelledby="hero-title">
        <div className="pulse-ring" aria-hidden="true" />
        <div className="pulse-ring" aria-hidden="true" />
        <div className="pulse-ring" aria-hidden="true" />

        <div className="phil-badge">🏠 PHIL'S HOUSE QUEST</div>

        <h1 id="hero-title" className="phil-hero-title">
          YOU'RE NOT BUYING A HOUSE.<br />
          <span className="gradient-text">YOU'RE HIRING A TEAM TO BUY ONE FOR YOU.</span>
        </h1>

        <p className="phil-hero-subtitle">
          People <strong>dumber than you</strong> do this every Tuesday.<br />
          You're just doing it <strong>on purpose</strong>.
        </p>

        <div className="phil-cta-row">
          <Link to="/plan" className="phil-cta primary">
            SEE THE PLAN <Arrow />
          </Link>
          <Link to="/first-move" className="phil-cta ghost">
            15-MIN FIRST MOVE <Arrow />
          </Link>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          SCROLL
          <ChevronDown />
        </div>
      </section>

      <div className="stats-bar" role="list" aria-label="Key facts">
        <div className="stat-card" role="listitem">
          <span className="stat-num">0</span>
          <span className="stat-label">Down Payment Surprises</span>
        </div>
        <div className="stat-card" role="listitem">
          <span className="stat-num">30</span>
          <span className="stat-label">Min to Pre-Approval</span>
        </div>
        <div className="stat-card" role="listitem">
          <span className="stat-num">$0</span>
          <span className="stat-label">Agent Cost to You</span>
        </div>
        <div className="stat-card" role="listitem">
          <span className="stat-num">∞</span>
          <span className="stat-label">Walk-Away Points</span>
        </div>
      </div>

      {/* Teaser cards → link to pages */}
      <section className="phil-section">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {[
            { to: '/fears', emoji: '😰', title: 'Fears vs Reality', desc: 'Every fear you have has a practical answer. Let\'s kill them one by one.' },
            { to: '/plan', emoji: '🪜', title: 'The 6-Step Plan', desc: 'Zero mystery. Zero surprises. Just the actual process, step by step.' },
            { to: '/edge', emoji: '👑', title: 'Your Edge', desc: 'You have more advantages than you think. Time to use them.' },
            { to: '/first-move', emoji: '⏱', title: '15-Min First Move', desc: 'The only move that matters right now. Takes 15 minutes. Changes everything.' },
          ].map(({ to, emoji, title, desc }) => (
            <Link
              key={to}
              to={to}
              style={{ textDecoration: 'none' }}
            >
              <article className="adv-card" style={{ cursor: 'pointer', textAlign: 'left' }}>
                <div className="adv-icon" style={{ margin: '0 0 1.5rem' }}>{emoji}</div>
                <h3 style={{ textAlign: 'left' }}>{title}</h3>
                <p>{desc}</p>
                <div style={{ marginTop: '1.25rem', color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  EXPLORE <Arrow />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Mantra */}
      <section className="mantra-section">
        <div className="mantra-content">
          <p className="mantra-quote gradient">"People dumber than me buy houses every Tuesday.</p>
          <p className="mantra-quote danger">I'm just buying one on purpose."</p>
          <p className="mantra-attribution">— Your new mantra. <strong>Say it in the mirror.</strong></p>
          <div style={{ marginTop: '2.5rem', display: 'flex', justifyContent: 'center' }}>
            <Link to="/first-move" className="phil-cta primary">
              START YOUR QUEST <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
