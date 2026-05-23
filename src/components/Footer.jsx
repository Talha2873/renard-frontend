import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Link2, Camera, Globe, X, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { siteConfig, navigation } from '../data/siteData'
import { fadeUp, staggerContainer, staggerItem, viewportConfig } from '../utils/animations'
const SocialLink = ({ href, icon: Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-champagne-400 hover:border-champagne-500/40 transition-all duration-300"
  >
    <Icon size={15} />
  </a>
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 border-t border-white/5 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-champagne-500/30 to-transparent" />

      <div className="container-luxury py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Brand Column */}
          <motion.div
            className="lg:col-span-1"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-9 h-9 border border-champagne-500/60 flex items-center justify-center">
                <span className="font-display text-champagne-400 text-base font-semibold">R</span>
              </div>
              <div>
                <p className="font-display text-white text-base leading-none tracking-wide font-semibold">Renard</p>
                <p className="font-body text-white/30 text-2xs tracking-widest3 uppercase mt-0.5">International</p>
              </div>
            </Link>

            <p className="font-body text-white/40 text-sm leading-relaxed mb-8 max-w-xs">
              The gold standard in hospitality executive recruitment since 1974. Connecting world-class talent with leading organizations across 75+ countries.
            </p>

            <div className="flex items-center gap-2">
              <SocialLink href={siteConfig.social.linkedin} icon={Link2} label="LinkedIn" />
              <SocialLink href={siteConfig.social.instagram} icon={Camera} label="Camera" />
              <SocialLink href={siteConfig.social.facebook} icon={Globe} label="Globe" />
              <SocialLink href={siteConfig.social.twitter} icon={X} label="X" />
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            transition={{ delay: 0.1 }}
          >
            <p className="label-luxury mb-6">Navigation</p>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  {item.href?.startsWith('http') ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-body text-white/40 hover:text-champagne-400 transition-colors duration-200"
                    >
                      {item.label}
                      <ArrowUpRight size={11} className="opacity-50" />
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-sm font-body text-white/40 hover:text-champagne-400 transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            transition={{ delay: 0.15 }}
          >
            <p className="label-luxury mb-6">Services</p>
            <ul className="space-y-3">
              {['Executive Search', 'Retained Search', 'Talent Mapping', 'Market Intelligence', 'Executive Assessment', 'Onboarding Support'].map((s) => (
                <li key={s}>
                  <Link to="/employers" className="text-sm font-body text-white/40 hover:text-champagne-400 transition-colors duration-200">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            transition={{ delay: 0.2 }}
          >
            <p className="label-luxury mb-6">Contact Us</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-champagne-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-body text-white/50 leading-relaxed">
                    {siteConfig.address.street}
                  </p>
                  <p className="text-sm font-body text-white/50">
                    {siteConfig.address.city}
                  </p>
                  <p className="text-sm font-body text-white/50">
                    {siteConfig.address.country}
                  </p>
                </div>
              </div>

              <a
                href={siteConfig.contact.telHref}
                className="flex items-center gap-3 group"
              >
                <Phone size={14} className="text-champagne-500 flex-shrink-0" />
                <span className="text-sm font-body text-white/50 group-hover:text-white/80 transition-colors">
                  {siteConfig.contact.tel}
                </span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 group"
              >
                <Mail size={14} className="text-champagne-500 flex-shrink-0" />
                <span className="text-sm font-body text-white/50 group-hover:text-white/80 transition-colors">
                  {siteConfig.contact.email}
                </span>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <p className="label-luxury mb-3">Newsletter</p>
              <a
                href={siteConfig.externalLinks.newsletter}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-xs"
              >
                Subscribe to Renard News <ArrowUpRight size={12} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-body text-white/25">
            © {year} Renard International Hospitality Search Consultants. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-xs font-body text-white/25 hover:text-white/50 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/cookie-policy" className="text-xs font-body text-white/25 hover:text-white/50 transition-colors">
              Cookie Policy
            </Link>
            <Link to="/terms" className="text-xs font-body text-white/25 hover:text-white/50 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}