import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Build timestamp for the banner - formatted as simple 12hr CT (e.g., "8:45 PM")
const now = new Date()
const BUILD_TIMESTAMP = now.toLocaleTimeString('en-US', {
  timeZone: 'America/Chicago',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true
})

export default defineConfig({
  plugins: [react()],
  base: '/react-portfolio/',
  define: {
    'import.meta.env.BUILD_TIMESTAMP': JSON.stringify(BUILD_TIMESTAMP),
  },
})