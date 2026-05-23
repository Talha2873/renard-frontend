import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Globe, Users, Award, TrendingUp } from 'lucide-react'
import { PageHero, SectionHeading, FormInput, FormSelect, FormTextarea } from '../components/ui/index'
import { staggerContainer, staggerItem, fadeUp, fadeLeft, fadeRight, viewportConfig } from '../utils/animations'
import { valueAddedServices, expertise } from '../data/siteData'

const WHY_RENARD = [
  { icon: Globe, title: 'Global Reach', desc: 'An expansive network spanning 75+ countries and every major hospitality market worldwide.' },
  { icon: Users, title: 'Dedicated Team', desc: 'Specialist consultants in key regions with deep sector knowledge and personal relationships.' },
  { icon: Award, title: 'Proven Track Record', desc: 'Over 50 years and 10,000+ successful placements across every hospitality vertical.' },
  { icon: TrendingUp, title: 'Business-Focused', desc: 'We align talent with your profit objectives — matching leaders who drive measurable results.' },
]

const PROCESS = [
  { step: '01', title: 'Briefing', desc: 'We conduct an in-depth briefing to understand your organization\'s culture, needs, and ideal candidate profile.' },
  { step: '02', title: 'Search & Map', desc: 'Our consultants conduct a targeted search using our proprietary database and global network.' },
  { step: '03', title: 'Assessment', desc: 'Candidates are rigorously evaluated through interviews, reference checks, and executive assessment.' },
  { step: '04', title: 'Presentation', desc: 'We present a concise shortlist of exceptional, pre-qualified candidates within agreed timelines.' },
  { step: '05', title: 'Placement', desc: 'We facilitate the offer, negotiation, and seamless onboarding to ensure a successful transition.' },
  { step: '06', title: 'Follow-Up', desc: 'Post-placement support and check-ins to ensure long-term success for both parties.' },
]

export default function EmployersPage() {
  return (
    <>
      <PageHero
        label="For Employers"
        title="Hire the World's Finest Hospitality Leaders"
        subtitle="We connect visionary organizations with exceptional executive talent — rigorously vetted, precisely matched to your culture and objectives."
        backgroundImage="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=70"
        actions={
          <>
            <Link to="/request-employee" className="btn-primary group">
              Request an Employee <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:+14163648325" className="btn-outline">
              Call Us: +1 (416) 364 8325
            </a>
          </>
        }
      />

      {/* Why Renard */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-luxury">
          <SectionHeading
            label="Why Partner With Us"
            title="The Renard Advantage"
            subtitle="For over five decades, the world's leading hospitality brands have trusted Renard International with their most critical leadership appointments."
          />

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5"
          >
            {WHY_RENARD.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={staggerItem}
                className="bg-charcoal-900 p-8 md:p-10 group hover:bg-navy-950/60 transition-colors duration-400"
              >
                <div className="w-10 h-10 border border-champagne-500/30 flex items-center justify-center mb-6 group-hover:border-champagne-400/50 transition-colors">
                  <Icon size={18} className="text-champagne-400" />
                </div>
                <h3 className="font-heading text-lg text-white font-medium mb-3">{title}</h3>
                <p className="font-body text-white/45 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-navy-950">
        <div className="container-luxury">
          <SectionHeading
            label="Our Process"
            title="A Meticulous Search Methodology"
            subtitle="Every search is conducted with precision, discretion, and an unwavering commitment to delivering the right leader for your organization."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {PROCESS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportConfig}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="bg-navy-950 p-8 md:p-10 group hover:bg-navy-900/50 transition-colors duration-400 relative"
              >
                <span className="absolute top-6 right-6 font-display text-4xl text-white/5 font-light">{step.step}</span>
                <p className="font-mono text-xs text-champagne-500/60 mb-4 tracking-widest">{step.step}</p>
                <h3 className="font-heading text-xl text-white font-medium mb-3">{step.title}</h3>
                <p className="font-body text-white/45 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Added Services */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <p className="label-luxury mb-5">Beyond Placement</p>
              <h2 className="font-display text-5xl font-light text-white leading-tight mb-8">
                Value Added Services
              </h2>
              <p className="font-body text-white/50 leading-relaxed mb-10">
                Our commitment extends beyond filling a role. Renard International offers a comprehensive suite of services designed to maximize the success of every engagement.
              </p>

              <div className="space-y-6">
                {valueAddedServices.map((s, i) => (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportConfig}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="flex gap-4 group"
                  >
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle2 size={16} className="text-champagne-500 group-hover:text-champagne-400 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-heading text-white font-medium mb-1.5">{s.title}</h4>
                      <p className="font-body text-white/45 text-sm leading-relaxed">{s.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10">
                <Link to="/value-added-services" className="btn-primary group">
                  Explore All Services
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="relative"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80"
                  alt="Executive search"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-panel border border-champagne-500/20 px-8 py-6 hidden md:block">
                <p className="font-display text-4xl text-white font-light">10,000+</p>
                <p className="font-body text-xs text-white/40 tracking-widest uppercase mt-1">Successful Placements</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-navy-950 border-t border-white/5">
        <div className="container-luxury text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <p className="label-luxury mb-4">Get Started Today</p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-6">
              Ready to Find Your Next Leader?
            </h2>
            <p className="font-body text-white/45 mb-10 max-w-xl mx-auto">
              Submit a recruitment brief and a specialist consultant will be in touch within one business day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-employee" className="btn-primary group">
                Request an Employee
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}