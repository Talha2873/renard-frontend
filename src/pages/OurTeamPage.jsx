import React from 'react'
import { motion } from 'framer-motion'
import { Link2 as Link2Icon, Mail } from 'lucide-react'
import { PageHero, SectionHeading } from '../components/ui/index'
import { staggerContainer, staggerItem, fadeUp, viewportConfig } from '../utils/animations'
import { teamMembers, regions } from '../data/siteData'

const TeamCard = ({ member, index }) => (
  <motion.div
    variants={staggerItem}
    className="group relative overflow-hidden border border-white/5 hover:border-champagne-500/20 transition-all duration-500"
  >
    {/* Photo */}
    <div className="aspect-[3/4] overflow-hidden relative">
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/30 to-transparent" />

      {/* Hover overlay with links */}
      <div className="absolute inset-0 bg-navy-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center gap-4">
        <a
          href={`mailto:info@renardinternational.com`}
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
          aria-label={`LinkedIn - ${member.name}`}
        >
          <Link2Icon size={15} />
        </a>
      </div>

      {/* Region badge */}
      <div className="absolute top-4 left-4">
        <span className="font-body text-2xs tracking-widest uppercase text-champagne-400/80 bg-navy-950/70 backdrop-blur-sm px-3 py-1 border border-champagne-500/20">
          {member.region}
        </span>
      </div>
    </div>

    {/* Info */}
    <div className="p-6">
      <h3 className="font-heading text-xl text-white font-medium mb-1 group-hover:text-champagne-100 transition-colors">
        {member.name}
      </h3>
      <p className="font-body text-champagne-400/70 text-xs tracking-wider mb-4">{member.title}</p>
      <p className="font-body text-white/40 text-sm leading-relaxed">{member.bio}</p>
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

      {/* Team Grid */}
      <section className="section-padding bg-charcoal-900">
        <div className="container-luxury">
          <SectionHeading
            label="Meet the Team"
            title="Global Experts, Local Insight"
            subtitle="Our consultants are based in key hospitality markets around the world, ensuring deep regional knowledge combined with international perspective."
          />

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {teamMembers.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="section-padding bg-navy-950">
        <div className="container-luxury">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="text-center mb-16"
          >
            <p className="label-luxury mb-4">Global Presence</p>
            <h2 className="font-display text-4xl md:text-5xl font-light text-white">
              Wherever You Are, We Are
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5"
          >
            {regions.map((region) => (
              <motion.div
                key={region.name}
                variants={staggerItem}
                className="bg-navy-950 p-8 hover:bg-navy-900/50 transition-colors duration-400"
              >
                <p className="label-luxury mb-5">{region.name}</p>
                <ul className="space-y-2">
                  {region.countries.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm font-body text-white/50">
                      <span className="w-1 h-1 rounded-full bg-champagne-500/40 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join team CTA */}
      <section className="py-20 bg-charcoal-900 border-t border-white/5">
        <div className="container-luxury text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportConfig}>
            <p className="label-luxury mb-4">Join Our Team</p>
            <h2 className="font-display text-4xl md:text-5xl text-white font-light mb-6">
              Interested in Joining Renard International?
            </h2>
            <p className="font-body text-white/45 mb-10 max-w-xl mx-auto">
              We are always looking for exceptional hospitality professionals who want to transition into executive search and make an impact at a global level.
            </p>
            <a
              href="mailto:info@renardinternational.com"
              className="btn-primary group"
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