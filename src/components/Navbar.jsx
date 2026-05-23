import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowUpRight, LogIn } from 'lucide-react'
import { navigation, siteConfig } from '../data/siteData'
import { useStickyNav } from '../hooks/useAnimations'
const DropdownMenu = ({ items, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 z-50"
      >
        {/* Arrow */}
        <div className="mx-auto w-3 h-3 -mb-1.5 relative z-10">
          <div className="absolute inset-0 bg-charcoal-800 border-l border-t border-white/10 rotate-45 translate-y-1 translate-x-1" />
        </div>

        <div className="bg-charcoal-800/95 backdrop-blur-xl border border-white/10 shadow-luxury overflow-hidden">
          {items.map((item, i) => (
            <Link
              key={i}
              to={item.href}
              className="flex items-start gap-3 px-6 py-4 group hover:bg-white/5 transition-colors duration-200 border-b border-white/5 last:border-0"
            >
              <div className="mt-1 w-1 h-1 rounded-full bg-champagne-500 flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
              <div>
                <p className="text-sm font-body font-medium text-white/90 group-hover:text-champagne-400 transition-colors duration-200">
                  {item.label}
                </p>
                {item.desc && (
                  <p className="text-xs text-white/40 mt-0.5 font-body">{item.desc}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)

export default function Navbar() {
  const isScrolled = useStickyNav(40)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isExternal = (href) => href?.startsWith('http')

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-champagne-600 via-champagne-400 to-champagne-500 z-[60] origin-left"
        style={{ scaleX: 0 }}
        id="scroll-progress"
      />

      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-navy-950/95 backdrop-blur-xl border-b border-white/5 shadow-luxury'
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container-luxury">
          <div className="flex items-center justify-between h-20 md:h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group flex-shrink-0">
              <div className="relative">
                <div className="w-10 h-10 border border-champagne-500/60 flex items-center justify-center group-hover:border-champagne-400 transition-colors duration-300">
                  <span className="font-display text-champagne-400 text-lg font-semibold">R</span>
                </div>
                <div className="absolute inset-0 border border-champagne-500/20 scale-125 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
              <div>
                <p className="font-display text-white text-lg leading-none tracking-wide font-semibold">
                  Renard
                </p>
                <p className="font-body text-white/40 text-2xs tracking-widest3 uppercase mt-0.5">
                  International
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {isExternal(item.href) ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-body text-white/70 hover:text-white transition-colors duration-200 tracking-wide py-2"
                    >
                      {item.label}
                      <ArrowUpRight size={12} className="opacity-50" />
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center gap-1 text-sm font-body text-white/70 hover:text-white transition-colors duration-200 tracking-wide py-2 group"
                    >
                      <span className="relative">
                        {item.label}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-champagne-400 group-hover:w-full transition-all duration-300" />
                      </span>
                      {item.children && (
                        <ChevronDown
                          size={13}
                          className={`text-white/40 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                        />
                      )}
                    </Link>
                  )}

                  {item.children && (
                    <DropdownMenu items={item.children} isOpen={activeDropdown === item.label} />
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Row */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={siteConfig.externalLinks.login}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-body text-white/50 hover:text-white/80 transition-colors duration-200 tracking-widest uppercase"
              >
                <LogIn size={13} />
                Log In
              </a>
              <a
                href={siteConfig.externalLinks.careers}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-3 px-6"
              >
                Search Jobs
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-navy-950/90 backdrop-blur-xl"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-charcoal-900 border-l border-white/5 flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/5">
                <span className="font-display text-white text-lg">Menu</span>
                <button onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white">
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto py-6 px-6 space-y-1">
                {navigation.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.1, duration: 0.4 }}
                  >
                    {isExternal(item.href) ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3 text-white/70 hover:text-white border-b border-white/5 transition-colors"
                      >
                        <span className="font-body text-sm">{item.label}</span>
                        <ArrowUpRight size={14} className="text-white/30" />
                      </a>
                    ) : (
                      <Link
                        to={item.href}
                        className="flex items-center justify-between py-3 text-white/70 hover:text-white border-b border-white/5 transition-colors"
                      >
                        <span className="font-body text-sm">{item.label}</span>
                      </Link>
                    )}

                    {item.children && (
                      <div className="pl-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block py-2 text-xs text-white/40 hover:text-champagne-400 transition-colors font-body"
                          >
                            — {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              <div className="p-6 border-t border-white/5 space-y-3">
                <a
                  href={siteConfig.externalLinks.careers}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center text-xs py-3"
                >
                  Search Jobs
                </a>
                <a
                  href={siteConfig.externalLinks.login}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full justify-center text-xs py-3"
                >
                  Log In
                </a>
                <p className="text-center text-xs text-white/30 font-body mt-4">
                  {siteConfig.contact.tel}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}