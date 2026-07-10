import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Fears from './pages/Fears'
import Plan from './pages/Plan'
import Edge from './pages/Edge'
import FirstMove from './pages/FirstMove'
import Toolkit from './pages/Toolkit'
import './styles/phil.css'

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
}
const pageTransition = { duration: 0.25, ease: 'easeOut' }

function AnimatedPage({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  )
}

function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
        <Route path="/fears" element={<AnimatedPage><Fears /></AnimatedPage>} />
        <Route path="/plan" element={<AnimatedPage><Plan /></AnimatedPage>} />
        <Route path="/edge" element={<AnimatedPage><Edge /></AnimatedPage>} />
        <Route path="/first-move" element={<AnimatedPage><FirstMove /></AnimatedPage>} />
        <Route path="/toolkit" element={<AnimatedPage><Toolkit /></AnimatedPage>} />
        {/* Catch-all */}
        <Route path="*" element={<AnimatedPage><Home /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </>
  )
}
