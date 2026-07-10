import { Link } from 'react-router-dom'
import { Arrow } from '../components/Icons'

const fears = [
  {
    icon: '😰',
    title: '"Never done this before"',
    body: <>Nobody has. Until they do. Your agent, lender, and inspector do this <strong>daily</strong>. You're hiring pros, not guessing.</>,
  },
  {
    icon: '💸',
    title: '"So much money"',
    body: <>It's a <strong>monthly payment</strong>, not a ransom. You pay rent anyway — this builds equity. The bank does the math; you just qualify.</>,
  },
  {
    icon: '💥',
    title: '"What if I mess it up?"',
    body: <>You hire a <strong>home inspector</strong> whose job is finding problems. You get a report. You approve or walk. That's it.</>,
  },
  {
    icon: '😱',
    title: '"It\'s intimidating"',
    body: <>So was your first job / first date / first <strong>hard thing you crushed</strong>. You figured it out. This is just paperwork with a view.</>,
  },
  {
    icon: '📉',
    title: '"What if the market crashes?"',
    body: <>You're buying a home to <strong>live in</strong>, not flip. Short-term dips don't matter when you're in it for 5–10 years.</>,
  },
  {
    icon: '🤷',
    title: '"I don\'t know enough"',
    body: <>That's what your agent is for. They've done this <strong>hundreds of times</strong>. Ask dumb questions. It's literally their job.</>,
  },
]

export default function Fears() {
  return (
    <div className="phil-page">
      <section className="phil-section">
        <header className="phil-section-header">
          <span className="phil-section-tag">REALITY CHECK</span>
          <h1 className="phil-section-title">THE <span>FEARS</span> (VS. REALITY)</h1>
          <p className="phil-section-sub">Every fear has a practical answer. Let's kill them one by one.</p>
        </header>

        <div className="fear-grid">
          {fears.map(({ icon, title, body }) => (
            <article key={title} className="fear-card">
              <div className="fear-icon" aria-hidden="true">{icon}</div>
              <h3>{title}</h3>
              <p className="fear-card p">{body}</p>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>Fears handled. Ready for the actual plan?</p>
          <Link to="/plan" className="phil-cta primary">SEE THE PLAN <Arrow /></Link>
        </div>
      </section>
    </div>
  )
}
