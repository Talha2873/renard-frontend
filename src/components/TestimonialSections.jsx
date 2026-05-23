import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../data/siteData'
import { fadeUp, viewportConfig } from '../utils/animations'

export default function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = (index) => {
    setDirection(index > active ? 1 : -1)
    setActive(index)
  }

  const prev = () => goTo(active === 0 ? testimonials.length - 1 : active - 1)
  const next = () => goTo(active === testimonials.length - 1 ? 0 : active + 1)

  // Auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setActive((a) => (a + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [active])

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir * 40, filter: 'blur(6px)' }),
    center: { opacity: 1, x: 0, filter: 'blur(0px)' },
    exit: (dir) => ({ opacity: 0, x: dir * -40, filter: 'blur(6px)' }),
  }

  const current = testimonials[active]

  return (
    <section className="section-padding bg-charcoal-900 relative overflow-hidden">
      {/* Large decorative quote */}
      <div
        className="absolute top-12 left-8 font-display text-[20rem] text-white/[0.012] leading-none select-none pointer-events-none"
        aria-hidden
      >
        "
      </div>

      <div className="container-luxury relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <p className="label-luxury mb-4">Client Voices</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-white">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Testimonial display */}
          <div className="relative min-h-[320px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full text-center px-4 md:px-16"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-champagne-400 fill-champagne-400" />
                  ))}
                </div>

                <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-white/80 leading-relaxed italic font-light mb-10">
                  "{current.quote}"
                </blockquote>

                <div className="flex items-center justify-center gap-3">
                  <div className="w-8 h-px bg-champagne-500/40" />
                  <div className="text-center">
                    <p className="font-body font-medium text-white/80 text-sm">{current.author}</p>
                    <p className="font-body text-white/35 text-xs mt-0.5">{current.company}</p>
                  </div>
                  <div className="w-8 h-px bg-champagne-500/40" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-white/80 hover:border-white/30 transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className="h-px transition-all duration-400"
                  style={{
                    width: i === active ? '32px' : '12px',
                    background: i === active
                      ? 'linear-gradient(90deg, #e8ad42, #c9901f)'
                      : 'rgba(255,255,255,0.15)',
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-white/80 hover:border-white/30 transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}