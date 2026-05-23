import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { heroTitle, fadeUp, fadeIn, staggerContainer, easing } from '../utils/animations'
import { siteConfig } from '../data/siteData'

export default function HeroSection() {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover opacity-30"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1920&q=60"
        >
          <source src="https://renardinternational.com/wp-content/uploads/2024/10/renard-home-cut.mp4" type="video/mp4" />
        </video>

        {/* Multi-layer overlay for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/40 to-navy-950/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/40" />

        {/* Subtle noise texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Vertical grid lines */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '120px 100%',
        }}
      />

      {/* Decorative top line */}
      <div className="absolute top-24 md:top-28 left-0 right-0 z-10">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="h-px bg-gradient-to-r from-transparent via-champagne-500/30 to-transparent origin-left"
        />
      </div>

      {/* Main Content */}
      <div className="container-luxury relative z-10 pt-20">
        <div className="max-w-5xl">
          {/* Award badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-6 mb-12"
          >
            <div className="flex items-center gap-2">
              <div className="w-px h-6 bg-champagne-500/40" />
              <p className="label-luxury text-champagne-500/80">Est. 1974</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-px h-6 bg-white/10" />
              <p className="font-body text-xs text-white/30 tracking-wider uppercase">
                International Hospitality Institute Award Recipient
              </p>
            </div>
          </motion.div>

          {/* Hero title */}
          <div className="overflow-hidden mb-3">
            <motion.p
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="label-luxury mb-0 text-champagne-400"
            >
              The Most Trusted Name in
            </motion.p>
          </div>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-white leading-none tracking-tight"
            >
              Hospitality
            </motion.h1>
          </div>

          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light leading-none tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #e8ad42 0%, #c9901f 40%, #f0c060 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Recruitment
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="font-body text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-xl mb-12"
          >
            Executive appointments across{' '}
            <span className="text-white/70">75+ countries</span>.
            Fifty years defining the gold standard.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-5 mb-20"
          >
            <Link to="/employers" className="btn-primary group">
              For Employers
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link to="/candidates" className="btn-outline group">
              For Candidates
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="absolute bottom-16 right-8 md:right-16 lg:right-24 z-10 hidden md:flex flex-col gap-6"
      >
        {[
          { value: '50+', label: 'Years' },
          { value: '75+', label: 'Countries' },
          { value: '10K+', label: 'Placements' },
        ].map(({ value, label }) => (
          <div key={label} className="text-right group">
            <p className="font-display text-3xl text-white/80 leading-none">{value}</p>
            <p className="font-body text-xs text-white/25 tracking-widest uppercase mt-1">{label}</p>
          </div>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-300 group"
      >
        <span className="font-body text-2xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent relative overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 right-0 h-4 bg-champagne-400/60"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <ChevronDown size={14} className="animate-bounce" />
      </motion.button>
    </section>
  )
}