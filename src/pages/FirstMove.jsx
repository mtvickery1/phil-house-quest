import { Link } from 'react-router-dom'
import { Arrow } from '../components/Icons'

export default function FirstMove() {
  return (
    <div className="phil-page">
      <section className="phil-section">
        <header className="phil-section-header">
          <span className="phil-section-tag">RIGHT NOW</span>
          <h1 className="phil-section-title">YOUR <span>15-MINUTE FIRST MOVE</span></h1>
          <p className="phil-section-sub">Stop thinking about it. This is the only move that matters today.</p>
        </header>

        <div className="move-steps">
          <article className="move-step">
            <span className="move-num">1</span>
            <div className="move-content">
              <strong>Text 1 friend who bought in the last 2 years:</strong>
              <code>"Yo — who was your lender? Happy with them? Mind if I use them?"</code>
            </div>
          </article>

          <article className="move-step">
            <span className="move-num">2</span>
            <div className="move-content">
              <strong>Call that lender (or 2–3). Say:</strong>
              <code>"Friend referred me. Want a pre-approval. What do you need?"</code>
            </div>
          </article>

          <article className="move-step">
            <span className="move-num">3</span>
            <div className="move-content">
              <strong>Send docs</strong> (W-2s, pay stubs, bank statements).
              <code>Done. You're pre-approved. You're in the game.</code>
            </div>
          </article>
        </div>

        <p className="move-note">
          That's it. <strong>15 minutes.</strong> You're no longer "thinking about it" — you're <strong>in the process</strong>.
        </p>

        <div style={{ textAlign: 'center', marginTop: '4rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>Need the right tools to verify lenders and crunch numbers?</p>
          <Link to="/toolkit" className="phil-cta primary">SEE THE TOOLKIT <Arrow /></Link>
        </div>
      </section>

      {/* What happens next */}
      <section className="phil-section" style={{ paddingTop: '0' }}>
        <header className="phil-section-header">
          <span className="phil-section-tag">AFTER PRE-APPROVAL</span>
          <h2 className="phil-section-title">WHAT HAPPENS <span>NEXT</span></h2>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {[
            { emoji: '🏠', title: 'Find an Agent', desc: 'Ask your lender for a referral. Or ask the same friend who gave you the lender. One call.' },
            { emoji: '👀', title: 'Start Browsing', desc: 'Zillow, Redfin — just look. Get a feel for what $X buys in your target area. No commitment.' },
            { emoji: '📞', title: 'Schedule Tours', desc: 'Your agent sets it up. You just show up and walk through. Say what you think. Be honest.' },
          ].map(({ emoji, title, desc }) => (
            <article key={title} className="fear-card" style={{ '--danger': 'var(--accent)', '--danger-dim': 'var(--accent-dim)' }}>
              <div className="fear-icon" style={{ background: 'var(--accent-dim)', borderColor: 'var(--accent)' }}>{emoji}</div>
              <h3>{title}</h3>
              <p className="reality">{desc}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
