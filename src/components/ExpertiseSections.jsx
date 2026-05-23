import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { staggerContainer, fadeUp, viewportConfig, staggerItem } from '../utils/animations'
import { expertise } from '../data/siteData'
import { ArrowRight } from 'lucide-react'

export default function ExpertiseSection() {
  const [activeId, setActiveId] = useState('executive')
  const active = expertise.find((e) => e.id === activeId) || expertise[0]

  return (
    <section className="section-padding bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900/50 via-navy-950 to-charcoal-900/50 pointer-events-none" />

      <div className="container-luxury relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20"
        >
          <p className="label-luxury mb-4">Our Expertise</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-white leading-tight max-w-2xl">
            Executive-Level Specializations
          </h2>
        </motion.div>

        {/* Desktop: split layout */}
        <div className="hidden lg:grid lg:grid-cols-5 gap-0">
          {/* Left nav list */}
          <div className="col-span-2 border-r border-white/5">
            {expertise.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportConfig}
                transition={{ delay: i * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setActiveId(item.id)}
                className={`w-full text-left px-8 py-6 border-b border-white/5 group transition-all duration-300 relative ${
                  activeId === item.id
                    ? 'bg-white/3'
                    : 'hover:bg-white/2'
                }`}
              >
                {/* Active indicator */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-champagne-500"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: activeId === item.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                <div className="flex items-center justify-between">
                  <div>
                    <p className={`font-display text-lg font-light leading-snug transition-colors duration-200 ${
                      activeId === item.id ? 'text-white' : 'text-white/50 group-hover:text-white/80'
                    }`}>
                      {item.title}
                    </p>
                    <p className="font-body text-xs text-white/25 mt-1">{item.subtitle}</p>
                  </div>
                  <ArrowRight
                    size={14}
                    className={`flex-shrink-0 transition-all duration-300 ${
                      activeId === item.id ? 'text-champagne-400 translate-x-0' : 'text-white/20 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'
                    }`}
                  />
                </div>
              </motion.button>
            ))}
          </div>

          {/* Right detail panel */}
          <div className="col-span-3 pl-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <div className="h-80 overflow-hidden relative">
                  <img
                    src={active.image}
                    alt={active.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 to-transparent" />

                  {/* Icon overlay */}
                  <div className="absolute bottom-8 left-8">
                    <span className="font-display text-5xl text-champagne-400/40">{active.icon}</span>
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <p className="label-luxury mb-3">{active.subtitle}</p>
                  <h3 className="font-display text-3xl text-white font-light mb-5">{active.title}</h3>
                  <p className="font-body text-white/55 leading-relaxed mb-8">{active.description}</p>
                  <a
                    href="https://careers.renardinternational.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                  >
                    Explore Opportunities <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: grid cards */}
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
              className="group border border-white/5 hover:border-champagne-500/20 transition-all duration-400 overflow-hidden"
            >
              <div className="h-40 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
              </div>
              <div className="p-5">
                <p className="text-2xs font-body tracking-widest uppercase text-champagne-500/70 mb-1.5">{item.subtitle}</p>
                <h3 className="font-heading text-base text-white font-medium mb-2">{item.title}</h3>
                <p className="font-body text-white/40 text-xs leading-relaxed line-clamp-2">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}