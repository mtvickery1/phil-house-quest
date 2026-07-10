import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import PhilLanding from './pages/PhilLanding'
import Pong from './pages/Pong'
import './styles/animations.css'

function PongPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#020617' }}>
      <div style={{ padding: '1.5rem 2rem' }}>
        <Link
          to="/"
          style={{
            color: '#0ea5e9',
            textDecoration: 'none',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 700,
            fontSize: '0.9rem',
          }}
        >
          ← Back to Phil's House Quest
        </Link>
      </div>
      <Pong />
    </div>
  )
}

function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <PhilLanding />
            </motion.div>
          }
        />
        <Route
          path="/pong"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <PongPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  )
}

export default App
