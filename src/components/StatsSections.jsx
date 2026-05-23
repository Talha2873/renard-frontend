import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem, fadeUp, viewportConfig } from '../utils/animations'
import { StatCounter } from '../components/ui/index'
import { stats } from '../data/siteData'

export default function StatsSection() {
  return (
    <section className="relative py-20 md:py-28 bg-navy-950 overflow-hidden">
      {/* Gold gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-navy-950 to-navy-950" />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,144,31,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,144,31,0.5) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container-luxury relative z-10">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <p className="label-luxury mb-4">Our Track Record</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white">
            Over 50 Years of Achievements
          </h2>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="bg-navy-950 p-10 md:p-12 hover:bg-navy-900 transition-colors duration-500 group"
            >
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Awards logos */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-12 border-t border-white/5 flex flex-wrap items-center justify-center gap-10 md:gap-16"
        >
          <p className="font-body text-xs text-white/25 tracking-widest uppercase w-full text-center mb-4">
            Recognized by
          </p>
          {[
            'International Hospitality Institute',
            'Pinnacle Award Recipient',
            'Global HR Excellence',
          ].map((award) => (
            <div key={award} className="flex items-center gap-3">
              <div className="w-6 h-px bg-champagne-500/30" />
              <p className="font-body text-sm text-white/30 tracking-wide">{award}</p>
              <div className="w-6 h-px bg-champagne-500/30" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}