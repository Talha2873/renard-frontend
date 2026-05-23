import React from 'react'
import { motion } from 'framer-motion'
import { Link2 as Link2Icon, Mail } from 'lucide-react'

import {
  PageHero,
  SectionHeading,
} from '../components/ui/index'

import {
  staggerContainer,
  staggerItem,
  fadeUp,
} from '../utils/animations'

import {
  teamMembers,
  regions,
} from '../data/siteData'

const TeamCard = ({ member }) => (
  <motion.div
    variants={staggerItem}
    className="group relative overflow-hidden border border-white/5 hover:border-champagne-500/20 transition-all duration-500 bg-charcoal-900"
  >
    {/* PHOTO */}
    <div className="relative h-[320px] sm:h-[380px] md:h-[420px] overflow-hidden">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 md:group-hover:scale-105"
        loading="lazy"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />

      {/* HOVER ICONS */}
      <div className="absolute inset-0 bg-navy-950/70 opacity-0 md:group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center gap-4">
        <a
          href="mailto:info@renardinternational.com"
          className="w-10 h-10 border border-champagne-500/40 flex items-center justify-center text-champagne-400 hover:bg-champagne-500/10 transition-colors"
          aria-label={`Email ${member.name}`}
        >
          <Mail size={15} />
        </a>

        <a
          href="https://ca.linkedin.com/company/renard-international-hospitality-search-consultants"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 border border-champagne-500/40 flex items-center justify-center text-champagne-400 hover:bg-champagne-500/10 transition-colors"
          aria-label={`LinkedIn ${member.name}`}
        >
          <Link2Icon size={15} />
        </a>
      </div>

      {/* REGION BADGE */}
      <div className="absolute top-4 left-4">
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-champagne-400/90 bg-navy-950/70 backdrop-blur-sm px-3 py-1 border border-champagne-500/20">
          {member.region}
        </span>
      </div>
    </div>

    {/* INFO */}
    <div className="p-5 md:p-6">
      <h3 className="font-heading text-xl md:text-2xl text-white font-medium mb-2 group-hover:text-champagne-100 transition-colors">
        {member.name}
      </h3>

      <p className="font-body text-champagne-400/80 text-xs tracking-[0.15em] uppercase mb-4">
        {member.title}
      </p>

      <p className="font-body text-white/70 text-sm leading-relaxed">
        {member.bio}
      </p>
    </div>
  </motion.div>
)

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        label="Our Team"
        title="The Consultants Behind Every Great Placement"
        subtitle="A global team of senior hospitality professionals bringing decades of industry expertise and an unmatched network to every search mandate."
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=70"
      />

      {/* TEAM GRID */}
      <section className="py-16 md:py-24 bg-charcoal-900">
        <div className="container-luxury">
          <SectionHeading
            label="Meet the Team"
            title="Global Experts, Local Insight"
            subtitle="Our consultants are based in key hospitality markets around the world."
          />

          <motion.div
            variants={staggerContainer(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {teamMembers.map((member, i) => (
              <TeamCard
                key={member.name}
                member={member}
                index={i}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="py-16 md:py-24 bg-navy-950">
        <div className="container-luxury">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p className="label-luxury mb-4">
              Global Presence
            </p>

            <h2 className="font-display text-3xl md:text-5xl font-light text-white leading-tight">
              Wherever You Are, We Are
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {regions.map((region) => (
              <motion.div
                key={region.name}
                variants={staggerItem}
                className="bg-charcoal-900 border border-white/5 p-6 md:p-8 hover:border-champagne-500/20 transition-all duration-400"
              >
                <p className="label-luxury mb-5">
                  {region.name}
                </p>

                <ul className="space-y-3">
                  {region.countries.map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-3 text-sm font-body text-white/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne-500/50 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-charcoal-900 border-t border-white/5">
        <div className="container-luxury text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="label-luxury mb-4">
              Join Our Team
            </p>

            <h2 className="font-display text-3xl md:text-5xl text-white font-light mb-6 leading-tight">
              Interested in Joining Renard International?
            </h2>

            <p className="font-body text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
              We are always looking for exceptional hospitality professionals who want to transition into executive search and make an impact globally.
            </p>

            <a
              href="mailto:info@renardinternational.com"
              className="inline-flex items-center gap-3 border border-champagne-500/30 px-7 py-4 text-sm tracking-[0.2em] uppercase text-champagne-400 hover:bg-champagne-500 hover:text-navy-950 transition-all duration-500"
            >
              Get in Touch

              <Mail size={15} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}