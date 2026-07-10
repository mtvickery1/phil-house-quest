import { Link } from 'react-router-dom'
import { Arrow, StepArrow } from '../components/Icons'

const steps = [
  {
    num: '01',
    title: 'Get Pre-Approved',
    desc: '30-minute call. Lender runs numbers. You get a letter saying "I\'m good for $X." That\'s your budget. Done.',
    meta: '⏱ 30 min',
  },
  {
    num: '02',
    title: 'Get an Agent',
    desc: 'Free to you. Paid by seller\'s commission. They handle showings, offers, paperwork, negotiations. You just show up and decide.',
    meta: '💰 $0 to you',
  },
  {
    num: '03',
    title: 'Tour Houses',
    desc: 'Walk in. Say "yes" or "nah." Agent handles scheduling. You just show up with opinions. This is the fun part.',
    meta: '🏠 Fun part',
  },
  {
    num: '04',
    title: 'Make an Offer',
    desc: "Agent writes it. You review. Sign. They negotiate. You approve final. Takes 10 minutes of your time.",
    meta: '✍️ 10 min',
  },
  {
    num: '05',
    title: 'Inspection & Appraisal',
    desc: 'Pro crawls the house. Bank verifies value. You get leverage or a walk-away card. This is your shield.',
    meta: '🛡 Your shield',
  },
  {
    num: '06',
    title: 'Close & Get Keys',
    desc: 'Sign docs (mostly e-sign). Wire down payment. Get keys. Move in. That\'s the whole movie.',
    meta: '🔑 Done',
  },
]

export default function Plan() {
  return (
    <div className="phil-page">
      <section className="phil-section">
        <header className="phil-section-header">
          <span className="phil-section-tag">6 STEPS • ZERO MYSTERY</span>
          <h1 className="phil-section-title">THE ACTUAL <span>PLAN</span></h1>
          <p className="phil-section-sub">This is what buying a house actually looks like. No fluff, no jargon.</p>
        </header>

        <div className="plan-stepper">
          {steps.map(({ num, title, desc, meta }, i) => (
            <article key={num} className="plan-step">
              <span className="step-num">{num}</span>
              <div className="step-content">
                <h3>{title}</h3>
                <p>{desc}</p>
                <span className="step-meta">{meta}</span>
              </div>
              {i < steps.length - 1 && (
                <div className="step-arrow" aria-hidden="true">
                  <StepArrow />
                </div>
              )}
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>Now you know the plan. Time to make your first move.</p>
          <Link to="/first-move" className="phil-cta primary">15-MINUTE FIRST MOVE <Arrow /></Link>
        </div>
      </section>
    </div>
  )
}
