import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, viewportConfig } from '../utils/animations'
import { ServiceCard } from '../components/ui/index'
import { services } from '../data/siteData'

export default function ServicesSection() {
  return (
    <section className="section-padding bg-charcoal-900 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-navy-950/30 to-transparent pointer-events-none" />

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left — heading */}
          <div>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="label-luxury mb-5"
            >
              Partner With Renard
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-6xl font-light text-white leading-tight mb-8"
            >
              How We
              <br />
              <span className="italic text-champagne-400">Serve You</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportConfig}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-white/50 text-lg leading-relaxed mb-10 max-w-md"
            >
              Renard International sets the gold standard in connecting top executive talent with leading hospitality companies worldwide — serving both sides of the equation with equal dedication.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={viewportConfig}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="h-px bg-gradient-to-r from-champagne-500/60 to-transparent origin-left w-48"
            />
          </div>

          {/* Right — decorative image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportConfig}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80"
                alt="Luxury hospitality"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-charcoal-900/80 via-charcoal-900/20 to-transparent" />
            </div>

            {/* Floating label */}
            <div className="absolute -bottom-6 -left-6 glass-panel px-6 py-4 border border-champagne-500/20">
              <p className="label-luxury mb-1">Since</p>
              <p className="font-display text-3xl text-white font-light">1974</p>
            </div>

            {/* Corner accents */}
            <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-champagne-500/30" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-champagne-500/30" />
          </motion.div>
        </div>

        {/* Services cards */}
        <motion.div
          variants={staggerContainer(0.12, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-3 gap-px bg-white/5 mt-16 md:mt-24"
        >
          {services.map((service, i) => (
            <div key={service.title} className="bg-charcoal-900">
              <ServiceCard {...service} index={i} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}