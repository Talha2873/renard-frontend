import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { fadeUp, lineGrow, viewportConfig, staggerItem } from '../utils/animations'
import { useCounter } from '../hooks/useAnimations'

// ─── Section Label ──────────────────────────────────────────
export function SectionLabel({ children, light = false }) {
  return (
    <motion.p
      variants={fadeUp}
      className={`label-luxury ${light ? 'text-champagne-400' : 'text-champagne-500'}`}
    >
      {children}
    </motion.p>
  )
}

// ─── Gold Divider ────────────────────────────────────────────
export function GoldDivider({ className = '' }) {
  return (
    <motion.div
      variants={lineGrow}
      className={`h-px bg-gradient-to-r from-champagne-500 to-transparent origin-left ${className}`}
      style={{ width: '64px' }}
    />
  )
}

// ─── Section Heading ─────────────────────────────────────────
export function SectionHeading({ label, title, subtitle, light = false, center = false }) {
  return (
    <div className={`mb-16 md:mb-20 ${center ? 'text-center' : ''}`}>
      {label && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="label-luxury mb-4"
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        transition={{ delay: 0.1 }}
        className={`font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight ${
          light ? 'text-white' : 'text-white'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          transition={{ delay: 0.2 }}
          className={`mt-6 text-lg font-body leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${
            light ? 'text-white/60' : 'text-white/50'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

// ─── Animated Counter Stat ────────────────────────────────────
export function StatCounter({ value, suffix = '', label, description }) {
  const { count, ref } = useCounter(value, 2200)
  const formatted = value >= 1000 ? count.toLocaleString() : count

  return (
    <div ref={ref} className="group">
      <div className="flex items-end gap-1 mb-2">
        <span className="font-display text-5xl md:text-6xl font-light text-white leading-none">
          {formatted}
        </span>
        <span className="font-display text-3xl text-champagne-400 font-light mb-1">{suffix}</span>
      </div>
      <div className="w-8 h-px bg-champagne-500/60 mb-3 group-hover:w-16 transition-all duration-500" />
      <p className="font-body font-medium text-white/80 text-sm tracking-wide">{label}</p>
      {description && (
        <p className="font-body text-white/35 text-xs mt-1 leading-relaxed">{description}</p>
      )}
    </div>
  )
}

// ─── Service Card ─────────────────────────────────────────────
export function ServiceCard({ title, description, cta, href, icon, index = 0 }) {
  const isExternal = href?.startsWith('http')
  const Tag = isExternal ? 'a' : Link
  const props = isExternal ? { href, target: '_blank', rel: 'noopener noreferrer' } : { to: href }

  return (
    <motion.div
      variants={staggerItem}
      className="card-luxury p-8 md:p-10 group relative overflow-hidden"
    >
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-champagne-500/10 group-hover:border-champagne-500/30 transition-colors duration-500" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-l border-b border-white/5" />

      <div className="mb-6">
        <span className="font-display text-3xl text-champagne-500/40 group-hover:text-champagne-400/60 transition-colors duration-500">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="font-display text-2xl font-light text-white mb-4 group-hover:text-champagne-100 transition-colors duration-300">
        {title}
      </h3>

      <div className="w-8 h-px bg-champagne-500/40 mb-6 group-hover:w-16 transition-all duration-500" />

      <p className="font-body text-white/50 text-sm leading-relaxed mb-8">
        {description}
      </p>

      <Tag {...props} className="btn-ghost">
        {cta}
        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
      </Tag>
    </motion.div>
  )
}

// ─── Expertise Card ───────────────────────────────────────────
export function ExpertiseCard({ title, subtitle, description, icon, image, index = 0 }) {
  return (
    <motion.div
      variants={staggerItem}
      className="group relative overflow-hidden border border-white/5 hover:border-champagne-500/20 transition-all duration-500"
      style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)' }}
    >
      {/* Image */}
      <div className="h-52 overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/50 to-transparent" />
        <div className="absolute bottom-4 left-5">
          <span className="font-display text-champagne-400/60 text-2xl group-hover:text-champagne-400/80 transition-colors">
            {icon}
          </span>
        </div>
      </div>

      <div className="p-6">
        <p className="text-2xs font-body tracking-widest uppercase text-champagne-500/70 mb-2">{subtitle}</p>
        <h3 className="font-heading text-lg font-medium text-white mb-3 group-hover:text-champagne-100 transition-colors">
          {title}
        </h3>
        <p className="font-body text-white/40 text-sm leading-relaxed line-clamp-3">{description}</p>
      </div>
    </motion.div>
  )
}

// ─── Testimonial Card ─────────────────────────────────────────
export function TestimonialCard({ quote, author, company, rating = 5 }) {
  return (
    <div className="card-luxury p-8 md:p-10 h-full flex flex-col">
      <div className="flex gap-0.5 mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} className="text-champagne-400 fill-champagne-400" />
        ))}
      </div>

      <blockquote className="font-display text-xl text-white/80 leading-relaxed flex-1 italic font-light mb-8">
        "{quote}"
      </blockquote>

      <div className="border-t border-white/5 pt-6">
        <p className="font-body font-medium text-white/90 text-sm">{author}</p>
        <p className="font-body text-white/35 text-xs mt-1">{company}</p>
      </div>
    </div>
  )
}

// ─── Page Hero ────────────────────────────────────────────────
export function PageHero({ label, title, subtitle, backgroundImage, actions }) {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-navy-950">
      {backgroundImage && (
        <div className="absolute inset-0">
          <img src={backgroundImage} alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950" />
        </div>
      )}

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="container-luxury relative z-10 py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {label && <p className="label-luxury mb-6">{label}</p>}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight max-w-4xl mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="font-body text-white/50 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              {subtitle}
            </p>
          )}
          {actions && <div className="flex flex-wrap gap-4">{actions}</div>}
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-charcoal-900 to-transparent" />
    </section>
  )
}

// ─── Form Input ───────────────────────────────────────────────
export function FormInput({ label, type = 'text', name, placeholder, required, value, onChange }) {
  return (
    <div className="group">
      <label className="block text-xs font-body tracking-widest uppercase text-white/40 mb-2.5 group-focus-within:text-champagne-400 transition-colors">
        {label}{required && <span className="text-champagne-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full bg-white/3 border border-white/10 text-white/80 placeholder-white/20 font-body text-sm px-5 py-3.5 focus:outline-none focus:border-champagne-500/50 focus:bg-white/5 transition-all duration-300"
      />
    </div>
  )
}

// ─── Form Select ──────────────────────────────────────────────
export function FormSelect({ label, name, options, required, value, onChange }) {
  return (
    <div className="group">
      <label className="block text-xs font-body tracking-widest uppercase text-white/40 mb-2.5 group-focus-within:text-champagne-400 transition-colors">
        {label}{required && <span className="text-champagne-500 ml-1">*</span>}
      </label>
      <select
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full bg-white/3 border border-white/10 text-white/80 font-body text-sm px-5 py-3.5 focus:outline-none focus:border-champagne-500/50 focus:bg-white/5 transition-all duration-300 appearance-none"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23666' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 18px center' }}
      >
        <option value="">Select an option</option>
        {options.map((opt) => (
          <option key={opt.value || opt} value={opt.value || opt}>
            {opt.label || opt}
          </option>
        ))}
      </select>
    </div>
  )
}

// ─── Form Textarea ────────────────────────────────────────────
export function FormTextarea({ label, name, placeholder, required, rows = 5, value, onChange }) {
  return (
    <div className="group">
      <label className="block text-xs font-body tracking-widest uppercase text-white/40 mb-2.5 group-focus-within:text-champagne-400 transition-colors">
        {label}{required && <span className="text-champagne-500 ml-1">*</span>}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        value={value}
        onChange={onChange}
        className="w-full bg-white/3 border border-white/10 text-white/80 placeholder-white/20 font-body text-sm px-5 py-3.5 focus:outline-none focus:border-champagne-500/50 focus:bg-white/5 transition-all duration-300 resize-none"
      />
    </div>
  )
}