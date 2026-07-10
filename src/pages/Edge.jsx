import { Link } from 'react-router-dom'
import { Arrow } from '../components/Icons'

const advantages = [
  {
    icon: '🧠',
    title: 'Adult Judgment',
    desc: <>You're not 22. You have income, credit, life experience. You spot <strong>nonsense</strong> a mile away.</>,
  },
  {
    icon: '🤝',
    title: 'Network Access',
    desc: <>Friends who bought. Family in real estate. Lenders who owe favors. <strong>USE THEM.</strong></>,
  },
  {
    icon: '🚪',
    title: 'Walk-Away Power',
    desc: <>You can kill the deal at inspection, appraisal, or loan contingency. <strong>You hold the cards.</strong></>,
  },
  {
    icon: '👑',
    title: 'You\'re the Boss',
    desc: <>Everyone works for <strong>YOU</strong>. Lender, agent, inspector, title co. You approve every step.</>,
  },
  {
    icon: '📊',
    title: 'Data at Your Fingertips',
    desc: <>Zillow, Redfin, public records — you can <strong>research any house</strong> before you even tour it.</>,
  },
  {
    icon: '🛡',
    title: 'Inspection Shield',
    desc: <>The home inspection is <strong>your exit ramp</strong>. Find problems? Negotiate repairs, lower price, or walk. No penalty.</>,
  },
]

export default function Edge() {
  return (
    <div className="phil-page">
      <section className="phil-section">
        <header className="phil-section-header">
          <span className="phil-section-tag">UNFAIR ADVANTAGES</span>
          <h1 className="phil-section-title">YOUR <span>EDGE</span></h1>
          <p className="phil-section-sub">You're not going into this blind. You have more power than you think.</p>
        </header>

        <div className="advantage-grid">
          {advantages.map(({ icon, title, desc }) => (
            <article key={title} className="adv-card">
              <div className="adv-icon" aria-hidden="true">{icon}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>

        <section className="mantra-section" style={{ margin: '4rem -2rem 0', borderRadius: '0' }}>
          <div className="mantra-content">
            <p className="mantra-quote gradient">"People dumber than me buy houses every Tuesday.</p>
            <p className="mantra-quote danger">I'm just buying one on purpose."</p>
            <p className="mantra-attribution">— Your new mantra. <strong>Say it in the mirror.</strong></p>
          </div>
        </section>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <Link to="/first-move" className="phil-cta primary">15-MINUTE FIRST MOVE <Arrow /></Link>
        </div>
      </section>
    </div>
  )
}
