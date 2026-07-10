import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="phil-footer">
      <p>Built for <strong>Phil</strong>. By someone who believes in you. <span className="heart" aria-hidden="true">♥</span></p>
      <p>You've handled harder. This is just paperwork with a view.</p>
      <p style={{ marginTop: '2rem', fontSize: '0.75rem', opacity: 0.4 }}>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Phil's House Quest</Link>
        {' · '}
        <Link to="/plan" style={{ color: 'inherit', textDecoration: 'none' }}>The Plan</Link>
        {' · '}
        <Link to="/first-move" style={{ color: 'inherit', textDecoration: 'none' }}>First Move</Link>
        {' · '}
        <Link to="/toolkit" style={{ color: 'inherit', textDecoration: 'none' }}>Toolkit</Link>
      </p>
    </footer>
  )
}
