import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <section className="min-h-screen bg-charcoal-900 flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="text-center relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-display text-[12rem] md:text-[16rem] font-light text-white/5 leading-none select-none">
            404
          </p>
          <div className="-mt-16 md:-mt-24 relative">
            <p className="label-luxury mb-5">Page Not Found</p>
            <h1 className="font-display text-4xl md:text-5xl text-white font-light mb-6">
              This page doesn't exist
            </h1>
            <p className="font-body text-white/40 mb-10 max-w-md mx-auto leading-relaxed">
              The page you're looking for may have been moved, deleted, or may never have existed. Return home and explore from there.
            </p>
            <Link to="/" className="btn-primary group inline-flex">
              <ArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}