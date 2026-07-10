import { Link } from 'react-router-dom'
import { Arrow } from '../components/Icons'

const resources = [
  {
    icon: '🏦',
    title: 'Verify Any Lender (NMLS)',
    desc: 'Check licenses & complaints',
    href: 'https://www.nmlsconsumeraccess.org/',
  },
  {
    icon: '📋',
    title: 'CFPB Homebuyer Tools',
    desc: 'Official guides & calculators',
    href: 'https://www.consumerfinance.gov/owning-a-home/',
  },
  {
    icon: '🏠',
    title: 'Browse Listings (Zillow)',
    desc: 'See what\'s actually out there',
    href: 'https://www.zillow.com/',
  },
  {
    icon: '🔴',
    title: 'Browse Listings (Redfin)',
    desc: 'Often more accurate data than Zillow',
    href: 'https://www.redfin.com/',
  },
  {
    icon: '🧮',
    title: 'Mortgage Calculator (Bankrate)',
    desc: 'Real monthly payment math',
    href: 'https://www.bankrate.com/mortgages/mortgage-calculator/',
  },
  {
    icon: '📖',
    title: 'HUD Homebuyer Guide',
    desc: 'Free gov resource, plain language',
    href: 'https://www.hud.gov/topics/buying_a_home',
  },
  {
    icon: '🔍',
    title: 'Find a HUD-Approved Counselor',
    desc: 'Free housing counseling by area',
    href: 'https://www.hud.gov/i_want_to/talk_to_a_housing_counselor',
  },
  {
    icon: '💳',
    title: 'Check Your Credit (AnnualCreditReport)',
    desc: 'Free — all 3 bureaus, once/year',
    href: 'https://www.annualcreditreport.com/',
  },
]

export default function Toolkit() {
  return (
    <div className="phil-page">
      <section className="phil-section">
        <header className="phil-section-header">
          <span className="phil-section-tag">TOOLKIT</span>
          <h1 className="phil-section-title">YOUR <span>TOOLKIT</span></h1>
          <p className="phil-section-sub">Vetted, free resources. Everything you need, nothing you don't.</p>
        </header>

        <div className="resource-grid">
          {resources.map(({ icon, title, desc, href }) => (
            <a key={title} className="resource-link" href={href} target="_blank" rel="noopener noreferrer">
              <span className="resource-icon" aria-hidden="true">{icon}</span>
              <div className="resource-text">
                <strong>{title}</strong>
                <span>{desc}</span>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>Toolkit locked and loaded. Ready to make your move?</p>
          <Link to="/first-move" className="phil-cta primary">15-MINUTE FIRST MOVE <Arrow /></Link>
        </div>
      </section>
    </div>
  )
}
