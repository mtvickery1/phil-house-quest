import { Link } from 'react-router-dom'
import '../styles/phil.css'

const Arrow = () => (
  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
)

const StepArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
)

export default function PhilLanding() {
  return (
    <div className="phil-page">
      {/* HERO */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="pulse-ring" aria-hidden="true"></div>
        <div className="pulse-ring" aria-hidden="true"></div>
        <div className="pulse-ring" aria-hidden="true"></div>

        <div className="badge">🏠 PHIL'S HOUSE QUEST</div>

        <h1 id="hero-title">
          YOU'RE NOT BUYING A HOUSE.<br />
          <span className="gradient-text">YOU'RE HIRING A TEAM TO BUY ONE FOR YOU.</span>
        </h1>

        <p className="subtitle">
          People <strong>dumber than you</strong> do this every Tuesday.<br />
          You're just doing it <strong>on purpose</strong>.
        </p>

        <div className="cta-row">
          <a href="#the-plan" className="cta primary">
            SEE THE PLAN
            <Arrow />
          </a>
          <a href="#first-move" className="cta ghost">
            15-MIN FIRST MOVE
            <Arrow />
          </a>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          SCROLL
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
        </div>
      </section>

      {/* STATS BAR */}
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

      {/* FEARS VS REALITY */}
      <section className="section" id="the-fears" aria-labelledby="fears-title">
        <header className="section-header">
          <span className="section-tag">REALITY CHECK</span>
          <h2 id="fears-title">THE <span>FEARS</span> (VS. REALITY)</h2>
        </header>

        <div className="fear-grid">
          <article className="fear-card">
            <div className="fear-icon" aria-hidden="true">😰</div>
            <h3>"Never done this before"</h3>
            <p className="reality">Nobody has. Until they do. Your agent, lender, and inspector do this <strong>daily</strong>. You're hiring pros, not guessing.</p>
          </article>
          <article className="fear-card">
            <div className="fear-icon" aria-hidden="true">💸</div>
            <h3>"So much money"</h3>
            <p className="reality">It's a <strong>monthly payment</strong>, not a ransom. You pay rent anyway — this builds equity. The bank does the math; you just qualify.</p>
          </article>
          <article className="fear-card">
            <div className="fear-icon" aria-hidden="true">💥</div>
            <h3>"What if I mess it up?"</h3>
            <p className="reality">You hire a <strong>home inspector</strong> whose job is finding problems. You get a report. You approve or walk. That's it.</p>
          </article>
          <article className="fear-card">
            <div className="fear-icon" aria-hidden="true">😱</div>
            <h3>"It's intimidating"</h3>
            <p className="reality">So was your first job / first date / first <strong>hard thing you crushed</strong>. You figured it out. This is just paperwork with a view.</p>
          </article>
        </div>
      </section>

      {/* THE PLAN */}
      <section className="section" id="the-plan" aria-labelledby="plan-title">
        <header className="section-header">
          <span className="section-tag">6 STEPS • ZERO MYSTERY</span>
          <h2 id="plan-title">THE ACTUAL <span>PLAN</span></h2>
        </header>

        <div className="plan-stepper">
          <article className="plan-step">
            <span className="step-num">01</span>
            <div className="step-content">
              <h3>Get Pre-Approved</h3>
              <p>30-minute call. Lender runs numbers. You get a letter saying "I'm good for $X." That's your budget. Done.</p>
              <span className="step-meta">⏱ 30 min</span>
            </div>
            <div className="step-arrow" aria-hidden="true"><StepArrow /></div>
          </article>
          <article className="plan-step">
            <span className="step-num">02</span>
            <div className="step-content">
              <h3>Get an Agent</h3>
              <p>Free to you. Paid by seller's commission. They handle showings, offers, paperwork, negotiations. You just show up and decide.</p>
              <span className="step-meta">💰 $0 to you</span>
            </div>
            <div className="step-arrow" aria-hidden="true"><StepArrow /></div>
          </article>
          <article className="plan-step">
            <span className="step-num">03</span>
            <div className="step-content">
              <h3>Tour Houses</h3>
              <p>Walk in. Say "yes" or "nah." Agent handles scheduling. You just show up with opinions. This is the fun part.</p>
              <span className="step-meta">🏠 Fun part</span>
            </div>
            <div className="step-arrow" aria-hidden="true"><StepArrow /></div>
          </article>
          <article className="plan-step">
            <span className="step-num">04</span>
            <div className="step-content">
              <h3>Make an Offer</h3>
              <p>Agent writes it. You review. Sign. They negotiate. You approve final. Takes 10 minutes of your time.</p>
              <span className="step-meta">✍️ 10 min</span>
            </div>
            <div className="step-arrow" aria-hidden="true"><StepArrow /></div>
          </article>
          <article className="plan-step">
            <span className="step-num">05</span>
            <div className="step-content">
              <h3>Inspection & Appraisal</h3>
              <p>Pro crawls the house. Bank verifies value. You get leverage or a walk-away card. This is your shield.</p>
              <span className="step-meta">🛡 Your shield</span>
            </div>
            <div className="step-arrow" aria-hidden="true"><StepArrow /></div>
          </article>
          <article className="plan-step">
            <span className="step-num">06</span>
            <div className="step-content">
              <h3>Close & Get Keys</h3>
              <p>Sign docs (mostly e-sign). Wire down payment. Get keys. Move in. That's the whole movie.</p>
              <span className="step-meta">🔑 Done</span>
            </div>
          </article>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section className="section" id="your-edge" aria-labelledby="advantages-title">
        <header className="section-header">
          <span className="section-tag">UNFAIR ADVANTAGES</span>
          <h2 id="advantages-title">YOUR <span>EDGE</span></h2>
        </header>

        <div className="advantage-grid">
          <article className="adv-card">
            <div className="adv-icon" aria-hidden="true">🧠</div>
            <h3>Adult Judgment</h3>
            <p>You're not 22. You have income, credit, life experience. You spot <strong>nonsense</strong> a mile away.</p>
          </article>
          <article className="adv-card">
            <div className="adv-icon" aria-hidden="true">🤝</div>
            <h3>Network Access</h3>
            <p>Friends who bought. Family in real estate. Lenders who owe favors. <strong>USE THEM.</strong></p>
          </article>
          <article className="adv-card">
            <div className="adv-icon" aria-hidden="true">🚪</div>
            <h3>Walk-Away Power</h3>
            <p>You can kill the deal at inspection, appraisal, or loan contingency. <strong>You hold the cards.</strong></p>
          </article>
          <article className="adv-card">
            <div className="adv-icon" aria-hidden="true">👑</div>
            <h3>You're the Boss</h3>
            <p>Everyone works for <strong>YOU</strong>. Lender, agent, inspector, title co. You approve every step.</p>
          </article>
        </div>
      </section>

      {/* MANTRA */}
      <section className="mantra-section" aria-labelledby="mantra-title">
        <div className="mantra-content">
          <p className="mantra-quote gradient">"People dumber than me buy houses every Tuesday.</p>
          <p className="mantra-quote danger">I'm just buying one on purpose."</p>
          <p className="mantra-attribution">— Your new mantra. <strong>Say it in the mirror.</strong></p>
        </div>
      </section>

      {/* FIRST MOVE */}
      <section className="section" id="first-move" aria-labelledby="move-title">
        <header className="section-header">
          <span className="section-tag">RIGHT NOW</span>
          <h2 id="move-title">YOUR <span>15-MINUTE FIRST MOVE</span></h2>
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
      </section>

      {/* RESOURCES */}
      <section className="section" id="resources" aria-labelledby="resources-title">
        <header className="section-header">
          <span className="section-tag">TOOLKIT</span>
          <h2 id="resources-title">YOUR <span>TOOLKIT</span></h2>
        </header>

        <div className="resource-grid">
          <a className="resource-link" href="https://www.nmlsconsumeraccess.org/" target="_blank" rel="noopener noreferrer">
            <span className="resource-icon" aria-hidden="true">🏦</span>
            <div className="resource-text">
              <strong>Verify Any Lender (NMLS)</strong>
              <span>Check licenses & complaints</span>
            </div>
          </a>
          <a className="resource-link" href="https://www.consumerfinance.gov/owning-a-home/" target="_blank" rel="noopener noreferrer">
            <span className="resource-icon" aria-hidden="true">📋</span>
            <div className="resource-text">
              <strong>CFPB Homebuyer Tools</strong>
              <span>Official guides & calculators</span>
            </div>
          </a>
          <a className="resource-link" href="https://www.zillow.com/" target="_blank" rel="noopener noreferrer">
            <span className="resource-icon" aria-hidden="true">🏠</span>
            <div className="resource-text">
              <strong>Browse Listings (Zillow/Redfin)</strong>
              <span>See what's actually out there</span>
            </div>
          </a>
          <a className="resource-link" href="https://www.bankrate.com/mortgages/mortgage-calculator/" target="_blank" rel="noopener noreferrer">
            <span className="resource-icon" aria-hidden="true">🧮</span>
            <div className="resource-text">
              <strong>Mortgage Calculator (Bankrate)</strong>
              <span>Real monthly payment math</span>
            </div>
          </a>
        </div>
      </section>

      {/* PONG BREAK */}
      <div className="pong-cta">
        <Link to="/pong" className="pong-banner" aria-label="Play Neon Pong">
          <div className="pong-text">
            <strong>🕹 Need a break from adulting?</strong>
            <span>Take a breather — play a round of Neon Pong.</span>
          </div>
          <span className="cta primary" style={{ pointerEvents: 'none' }}>
            PLAY PONG <Arrow />
          </span>
        </Link>
      </div>

      {/* FOOTER */}
      <footer className="footer" role="contentinfo">
        <p>Built for <strong>Phil</strong>. By someone who believes in you. <span className="heart" aria-hidden="true">♥</span></p>
        <p>You've handled harder. This is just paperwork with a view.</p>
      </footer>
    </div>
  )
}
