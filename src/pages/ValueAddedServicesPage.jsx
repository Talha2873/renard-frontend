import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, BarChart3, Brain, Users, ShieldCheck, FileSearch, Handshake } from 'lucide-react'
import { PageHero, SectionHeading } from '../components/ui/index'
import { staggerContainer, staggerItem, fadeUp, viewportConfig } from '../utils/animations'

const SERVICES = [
  {
    icon: Brain,
    title: 'Executive Assessment',
    desc: 'Comprehensive evaluation of executive candidates including behavioral profiling, leadership competency assessment, and cultural alignment scoring using validated methodologies.',
    features: ['Behavioral profiling', 'Leadership competency mapping', 'Cultural alignment scoring', 'Derailer identification'],
  },
  {
    icon: BarChart3,
    title: 'Market Intelligence & Benchmarking',
    desc: 'In-depth compensation benchmarking, talent mapping, and industry insights to inform your hiring strategy and maintain competitive positioning in the talent market.',
    features: ['Compensation benchmarking', 'Talent landscape mapping', 'Competitive intelligence', 'Salary trend analysis'],
  },
  {
    icon: Users,
    title: 'Onboarding & Integration Support',
    desc: 'Post-placement integration support to ensure smooth executive transitions. We partner with both the organization and the executive to maximize early-stage performance.',
    features: ['90-day integration planning', 'Stakeholder introduction support', 'Cultural integration coaching', 'Progress check-ins'],
  },
  {
    icon: ShieldCheck,
    title: 'Retained Search',
    desc: 'Dedicated exclusive search assignments for the most critical and confidential senior-level appointments. A committed team, full-cycle process, and guaranteed results.',
    features: ['Exclusive dedicated mandate', 'Board-level confidentiality', 'International search scope', 'Replacement guarantee'],
  },
  {
    icon: FileSearch,
    title: 'Succession Planning',
    desc: 'Strategic talent pipeline development identifying and cultivating future leaders within and outside your organization to ensure continuity and long-term resilience.',
    features: ['Talent pipeline mapping', 'Internal readiness assessment', 'External benchmarking', 'Development roadmaps'],
  },
  {
    icon: Handshake,
    title: 'Consulting & Advisory',
    desc: 'Strategic human capital consulting for hospitality organizations undergoing growth, transformation, or leadership restructuring.',
    features: ['Organizational design', 'Role architecture', 'Compensation strategy', 'HR process review'],
  },
]

export default function ValueAddedServicesPage() {
  return (
    <>
      <PageHero
        label="Value Added Services"
        title="Beyond Executive Placement"
        subtitle="A comprehensive suite of human capital services designed to maximize leadership effectiveness and long-term organizational success."
        backgroundImage="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=70"
      />

      {/* Services Grid */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-luxury">
          <SectionHeading
            label="Our Services"
            title="End-to-End Leadership Solutions"
            subtitle="From initial talent mapping through post-placement integration, Renard International supports every phase of the executive talent lifecycle."
          />

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5"
          >
            {SERVICES.map((service, i) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={staggerItem}
                  className="bg-charcoal-900 p-8 md:p-10 group hover:bg-navy-950/60 transition-colors duration-400 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-12 h-12 border-r border-t border-champagne-500/5 group-hover:border-champagne-500/20 transition-colors" />

                  <div className="w-10 h-10 border border-champagne-500/30 flex items-center justify-center mb-6 group-hover:border-champagne-400/50 transition-colors">
                    <Icon size={18} className="text-champagne-400" />
                  </div>

                  <h3 className="font-heading text-xl text-white font-medium mb-4">{service.title}</h3>
                  <p className="font-body text-white/45 text-sm leading-relaxed mb-6">{service.desc}</p>

                  <div className="space-y-2">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-champagne-500/50 flex-shrink-0" />
                        <span className="font-body text-xs text-white/35">{f}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-950 border-t border-white/5">
        <div className="container-luxury">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="label-luxury mb-4">Ready to Elevate Your Leadership Strategy?</p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-6">
              Let's Build Something Exceptional Together
            </h2>
            <p className="font-body text-white/45 leading-relaxed mb-10">
              Contact our team to discuss how Renard International's value-added services can strengthen your organization's leadership capabilities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary group">
                Request a Consultation <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/request-employee" className="btn-outline">
                Submit a Brief
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}