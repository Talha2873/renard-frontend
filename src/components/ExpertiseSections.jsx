import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  staggerContainer,
  viewportConfig,
  staggerItem,
} from '../utils/animations'

import { expertise } from '../data/siteData'
import { ArrowRight } from 'lucide-react'

export default function ExpertiseSection() {
  const [activeId, setActiveId] = useState('executive')

  const active =
    expertise.find((e) => e.id === activeId) || expertise[0]

  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/50 via-navy-950 to-charcoal-900/50 pointer-events-none" />

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-16 md:mb-20"
        >
          <p className="label-luxury mb-4">
            Our Expertise
          </p>

          <h2 className="font-display text-5xl md:text-6xl font-light text-white leading-tight max-w-2xl">
            Executive-Level Specializations
          </h2>
        </motion.div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-0">
          {/* LEFT NAV */}
          <div className="col-span-2 border-r border-white/5">
            {expertise.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportConfig}
                transition={{
                  delay: i * 0.06,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                onClick={() => setActiveId(item.id)}
                className={`w-full text-left px-8 py-7 border-b border-white/5 group transition-all duration-300 relative ${
                  activeId === item.id
                    ? 'bg-white/[0.03]'
                    : 'hover:bg-white/[0.02]'
                }`}
              >
                {/* Active line */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-champagne-500"
                  initial={{ scaleY: 0 }}
                  animate={{
                    scaleY: activeId === item.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />

                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className={`font-display text-[30px] leading-snug transition-all duration-300 ${
                        activeId === item.id
                          ? 'text-white'
                          : 'text-white/75 group-hover:text-white'
                      }`}
                    >
                      {item.title}
                    </p>

                    <p className="font-body text-sm text-white/50 mt-2 tracking-wide">
                      {item.subtitle}
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className={`transition-all duration-300 ${
                      activeId === item.id
                        ? 'text-champagne-400 opacity-100 translate-x-0'
                        : 'text-white/20 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                    }`}
                  />
                </div>
              </motion.button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {/* IMAGE SECTION */}
                <div className="relative h-[560px] overflow-hidden">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover scale-[1.02]"
                    style={{
                      objectPosition: 'center 12%',
                    }}
                  />

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/25 to-transparent" />

                  <div className="absolute inset-0 bg-gradient-to-r from-navy-950/75 via-transparent to-transparent" />

                  {/* Luxury floating icon */}
                  <div className="absolute bottom-10 left-10">
                    <div className="w-12 h-12 border border-champagne-500/40 rotate-45 flex items-center justify-center">
                      <span className="-rotate-45 text-champagne-400/70 text-xl">
                        {active.icon}
                      </span>
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="px-10 py-10">
                  <p className="label-luxury mb-4">
                    {active.subtitle}
                  </p>

                  <h3 className="font-display text-5xl text-white font-light mb-6 leading-tight">
                    {active.title}
                  </h3>

                  <p className="font-body text-lg text-white/80 leading-relaxed max-w-2xl mb-10">
                    {active.description}
                  </p>

                  <a
                    href="https://careers.renardinternational.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 border border-champagne-500/30 px-7 py-4 text-sm tracking-[0.25em] uppercase text-champagne-400 hover:bg-champagne-500 hover:text-navy-950 transition-all duration-500"
                  >
                    Explore Opportunities

                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* MOBILE LAYOUT */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="lg:hidden grid sm:grid-cols-2 gap-4"
        >
          {expertise.map((item) => (
            <motion.div
              key={item.id}
              variants={staggerItem}
              className="group border border-white/5 hover:border-champagne-500/20 transition-all duration-500 overflow-hidden bg-white/[0.01]"
            >
              {/* Mobile image */}
              <div className="h-52 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  style={{
                    objectPosition: 'center 15%',
                  }}
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
              </div>

              {/* Mobile content */}
              <div className="p-6">
                <p className="text-[10px] tracking-[0.25em] uppercase text-champagne-500/70 mb-2">
                  {item.subtitle}
                </p>

                <h3 className="font-display text-xl text-white mb-3">
                  {item.title}
                </h3>

                <p className="font-body text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}