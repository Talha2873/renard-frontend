import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, Briefcase, Star, Shield, TrendingUp, Users } from 'lucide-react'
import { PageHero, SectionHeading } from '../components/ui/index'
import { staggerContainer, staggerItem, fadeUp, fadeLeft, fadeRight, viewportConfig } from '../utils/animations'
import { expertise, siteConfig } from '../data/siteData'

const BENEFITS = [
  { icon: Globe, title: 'Global Opportunities', desc: 'Access to exclusive executive roles across 75+ countries and every major hospitality market.' },
  { icon: Shield, title: 'Complete Confidentiality', desc: 'Your career search is handled with absolute discretion at every stage of the process.' },
  { icon: TrendingUp, title: 'Career Advancement', desc: 'We match you with roles that align with your ambitions, skills, and long-term growth goals.' },
  { icon: Users, title: 'Ongoing Representation', desc: 'Our team advocates for you throughout negotiation, onboarding, and post-placement support.' },
]

const CANDIDATE_PROCESS = [
  { step: '01', title: 'Submit Your Profile', desc: 'Send us your CV and a brief overview of your career objectives and ideal next role.' },
  { step: '02', title: 'Confidential Consultation', desc: 'A senior consultant meets with you to understand your background, aspirations, and expectations.' },
  { step: '03', title: 'Talent Matching', desc: 'We match your profile against current and upcoming mandates from our global client base.' },
  { step: '04', title: 'Introduction & Interviews', desc: 'With your approval, we present your profile to selected clients and prepare you thoroughly.' },
  { step: '05', title: 'Offer & Negotiation', desc: 'We guide you through the offer stage, leveraging our market insight on your behalf.' },
  { step: '06', title: 'Transition Support', desc: 'We remain your partner through onboarding and beyond to ensure your success.' },
]

export default function CandidatesPage() {
  return (
    <>
      <PageHero
        label="For Candidates"
        title="Find Your Next Executive Opportunity"
        subtitle="Join the world's most trusted hospitality recruitment network. Your next transformative career move begins here."
        backgroundImage="https://images.unsplash.com/photo-1455587734955-081b22074882?w=1600&q=70"
        actions={
          <>
            <a
              href={siteConfig.externalLinks.careers}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              Search Current Roles
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={siteConfig.externalLinks.applyGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Join Talent Pool
            </a>
          </>
        }
      />

      {/* Why Choose Renard */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-luxury">
          <SectionHeading
            label="Why Work With Us"
            title="Your Career, Our Priority"
            subtitle="Renard International has placed thousands of hospitality professionals into transformative roles at world-class organizations. We understand the industry deeply and champion your success."
          />

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5"
          >
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
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

      {/* Roles We Place */}
      <section className="section-padding bg-navy-950">
        <div className="container-luxury">
          <SectionHeading
            label="Roles We Fill"
            title="Across Every Hospitality Discipline"
            subtitle="From general managers to culinary directors, CFOs to heads of engineering — we recruit across the full spectrum of hospitality leadership."
          />

          <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {expertise.map((item) => (
              <motion.div
                key={item.id}
                variants={staggerItem}
                className="group border border-white/5 hover:border-champagne-500/25 transition-all duration-400 p-6 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <span className="font-display text-2xl text-champagne-500/30 group-hover:text-champagne-400/50 transition-colors mb-4 block">
                  {item.icon}
                </span>
                <p className="text-2xs font-body tracking-widest uppercase text-champagne-500/60 mb-2">{item.subtitle}</p>
                <h3 className="font-heading text-sm text-white font-medium leading-snug">{item.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-luxury">
          <SectionHeading
            label="How It Works"
            title="Your Journey With Renard"
            subtitle="A structured, candidate-centric process designed to match you with the right opportunity efficiently and confidentially."
          />

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-[calc(1.5rem)] top-8 bottom-8 w-px bg-gradient-to-b from-champagne-500/40 via-champagne-500/20 to-transparent hidden md:block" />

            <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
              {CANDIDATE_PROCESS.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportConfig}
                  transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-charcoal-900 p-8 md:p-10 group hover:bg-navy-950/40 transition-colors duration-400 relative"
                >
                  <span className="absolute top-6 right-6 font-display text-5xl text-white/[0.04] font-light select-none">{step.step}</span>
                  <p className="font-mono text-xs text-champagne-500/60 mb-4 tracking-widest">{step.step}</p>
                  <h3 className="font-heading text-xl text-white font-medium mb-3">{step.title}</h3>
                  <p className="font-body text-white/45 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-950 border-t border-white/5">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="glass-panel border border-champagne-500/15 p-10"
              style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }}
            >
              <Briefcase size={24} className="text-champagne-400 mb-5" />
              <h3 className="font-display text-3xl text-white font-light mb-4">Browse Open Roles</h3>
              <p className="font-body text-white/45 text-sm leading-relaxed mb-7">
                Explore our current openings in executive management, operations, culinary, finance, and more across our global portfolio.
              </p>
              <a
                href={siteConfig.externalLinks.careers}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                Search Jobs <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="glass-panel border border-white/10 p-10"
              style={{ clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))' }}
            >
              <Users size={24} className="text-champagne-400 mb-5" />
              <h3 className="font-display text-3xl text-white font-light mb-4">Join Our Talent Pool</h3>
              <p className="font-body text-white/45 text-sm leading-relaxed mb-7">
                Not seeing the right role today? Register your profile and be considered for future opportunities that align with your expertise.
              </p>
              <a
                href={siteConfig.externalLinks.applyGeneral}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline group"
              >
                Register Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}