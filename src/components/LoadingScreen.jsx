import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(interval); return 100 }
        return p + Math.random() * 18
      })
    }, 120)
    const timer = setTimeout(() => setVisible(false), 2200)
    return () => { clearInterval(interval); clearTimeout(timer) }
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center"
          style={{ background: '#050d1a' }}
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center mb-16"
          >
            <div className="w-16 h-16 border border-champagne-500/60 flex items-center justify-center mb-6">
              <span style={{ fontFamily: 'Playfair Display, serif', color: '#c9a84c', fontSize: '2rem', fontWeight: 300 }}>
                R
              </span>
            </div>
            <p style={{ fontFamily: 'Playfair Display, serif', color: 'white', fontSize: '1.5rem', fontWeight: 300, letterSpacing: '0.3em' }}>
              RENARD
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.3)', fontSize: '0.6rem', letterSpacing: '0.4em', marginTop: '4px' }}>
              INTERNATIONAL
            </p>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-48"
          >
            <div className="h-px bg-white/10 w-full relative overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full"
                style={{ background: 'linear-gradient(90deg, #c9901f, #e8ad42)', width: `${Math.min(progress, 100)}%`, transition: 'width 0.15s ease' }}
              />
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', color: 'rgba(255,255,255,0.2)', fontSize: '0.6rem', letterSpacing: '0.2em', marginTop: '12px', textAlign: 'center' }}>
              {Math.min(Math.round(progress), 100)}%
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
