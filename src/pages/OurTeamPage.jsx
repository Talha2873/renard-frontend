import React from 'react'
import { motion } from 'framer-motion'
import { Link2 as Link2Icon, Mail } from 'lucide-react'

import {
  PageHero,
  SectionHeading,
} from '../components/ui'

import {
  teamMembers,
  regions,
} from '../data/siteData'

const TeamCard = ({ member }) => {
  return (
    <div className="group relative overflow-hidden border border-white/5 hover:border-champagne-500/20 transition-all duration-500 bg-charcoal-900">
      
      {/* IMAGE */}
      <div className="relative w-full h-[320px] sm:h-[380px] overflow-hidden bg-navy-950">
        <img
          src={member.image}
          alt={member.name}
          loading="eager"
          decoding="async"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 md:group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/20 to-transparent" />

        {/* Region Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-[10px] uppercase tracking-[0.2em] bg-navy-950/80 border border-champagne-500/20 text-champagne-400">
            {member.region}
          </span>
        </div>

        {/* Hover Icons Desktop */}
        <div className="hidden md:flex absolute inset-0 bg-navy-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center gap-4">
          <a
            href="mailto:info@renardinternational.com"
            className="w-10 h-10 border border-champagne-500/40 flex items-center justify-center text-champagne-400 hover:bg-champagne-500/10"
          >
            <Mail size={15} />
          </a>

          <a
            href="https://ca.linkedin.com/company/renard-international-hospitality-search-consultants"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-champagne-500/40 flex items-center justify-center text-champagne-400 hover:bg-champagne-500/10"
          >
            <Link2Icon size={15} />
          </a>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5 md:p-6">
        <h3 className="font-heading text-xl md:text-2xl text-white mb-2">
          {member.name}
        </h3>

        <p className="text-champagne-400/80 text-xs uppercase tracking-[0.15em] mb-4">
          {member.title}
        </p>

        <p className="text-white/70 text-sm leading-relaxed">
          {member.bio}
        </p>

        {/* Mobile Icons */}
        <div className="flex md:hidden items-center gap-3 mt-5">
          <a
            href="mailto:info@renardinternational.com"
            className="w-9 h-9 border border-champagne-500/30 flex items-center justify-center text-champagne-400"
          >
            <Mail size={14} />
          </a>

          <a
            href="https://ca.linkedin.com/company/renard-international-hospitality-search-consultants"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-champagne-500/30 flex items-center justify-center text-champagne-400"
          >
            <Link2Icon size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        label="Our Team"
        title="The Consultants Behind Every Great Placement"
        subtitle="A global team of senior hospitality professionals bringing decades of industry expertise and an unmatched network to every search mandate."
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=70"
      />

      {/* TEAM SECTION */}
      <section className="py-16 md:py-24 bg-charcoal-900">
        <div className="container-luxury">
          <SectionHeading
            label="Meet the Team"
            title="Global Experts, Local Insight"
            subtitle="Our consultants are based in key hospitality markets around the world."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <TeamCard
                key={member.name}
                member={member}
              />
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <section className="py-16 md:py-24 bg-navy-950">
        <div className="container-luxury">
          <div className="text-center mb-14">
            <p className="label-luxury mb-4">
              Global Presence
            </p>

            <h2 className="font-display text-3xl md:text-5xl font-light text-white leading-tight">
              Wherever You Are, We Are
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {regions.map((region) => (
              <div
                key={region.name}
                className="bg-charcoal-900 border border-white/5 p-6 md:p-8"
              >
                <p className="label-luxury mb-5">
                  {region.name}
                </p>

                <ul className="space-y-3">
                  {region.countries.map((c) => (
                    <li
                      key={c}
                      className="flex items-center gap-3 text-sm text-white/70"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-champagne-500/50" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-charcoal-900 border-t border-white/5">
        <div className="container-luxury text-center">
          <p className="label-luxury mb-4">
            Join Our Team
          </p>

          <h2 className="font-display text-3xl md:text-5xl text-white font-light mb-6 leading-tight">
            Interested in Joining Renard International?
          </h2>

          <p className="text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            We are always looking for exceptional hospitality professionals who want to transition into executive search and make an impact globally.
          </p>

          <a
            href="mailto:info@renardinternational.com"
            className="inline-flex items-center gap-3 border border-champagne-500/30 px-7 py-4 text-sm tracking-[0.2em] uppercase text-champagne-400 hover:bg-champagne-500 hover:text-navy-950 transition-all duration-500"
          >
            Get in Touch

            <Mail size={15} />
          </a>
        </div>
      </section>
    </>
  )
}