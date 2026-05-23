import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, ExternalLink } from 'lucide-react'
import { fadeUp, scaleIn, viewportConfig } from '../utils/animations'
import { siteConfig } from '../data/siteData'

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-24 md:py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=70"
          alt=""
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-950/90 to-navy-900" />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-champagne-500/20 to-transparent" />

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="label-luxury mb-6"
            >
              Ready to Begin?
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
            >
              Explore Exciting
              <br />
              <span className="italic" style={{
                background: 'linear-gradient(135deg, #e8ad42, #c9901f)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Opportunities
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-8 font-body text-white/50 text-lg leading-relaxed max-w-xl"
            >
              Submit your application for a current opening or join our talent network to be considered for future opportunities around the world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <a
                href={siteConfig.externalLinks.careers}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Search Jobs
                <ExternalLink size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a
                href={siteConfig.externalLinks.applyGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                Join Talent Pool
              </a>
            </motion.div>
          </div>

          {/* Right — employer CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel border border-champagne-500/15 p-10 md:p-12 relative overflow-hidden"
            style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}
          >
            {/* Gold corner */}
            <div className="absolute top-0 right-0 w-20 h-20 border-r-2 border-t-2 border-champagne-500/20" />

            <p className="label-luxury mb-5">For Employers</p>
            <h3 className="font-display text-3xl text-white font-light mb-5 leading-snug">
              Find Your Next Executive Leader
            </h3>
            <p className="font-body text-white/45 text-sm leading-relaxed mb-8">
              Partner with Renard International's dedicated search team. We connect you with the world's finest hospitality talent — rigorously vetted, perfectly matched.
            </p>
            <div className="space-y-3">
              <Link to="/request-employee" className="btn-primary w-full justify-center group text-sm">
                Request an Employee
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link to="/employers" className="btn-ghost w-full justify-center text-sm">
                Learn More
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Stats mini row */}
            <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-3 gap-4">
              {[
                { v: '50+', l: 'Years' },
                { v: '75+', l: 'Countries' },
                { v: '98%', l: 'Retention' },
              ].map(({ v, l }) => (
                <div key={l} className="text-center">
                  <p className="font-display text-2xl text-champagne-400 font-light">{v}</p>
                  <p className="font-body text-2xs text-white/25 tracking-widest uppercase mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}