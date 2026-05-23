import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '../utils/animations'

const Section = ({ title, children }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={viewportConfig}
    className="mb-12"
  >
    <h2 className="font-heading text-2xl text-white font-medium mb-4">{title}</h2>
    <div className="font-body text-white/50 leading-relaxed space-y-4 text-sm">
      {children}
    </div>
  </motion.div>
)

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-navy-950 pt-40 pb-20">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="label-luxury mb-4">Legal</p>
            <h1 className="font-display text-5xl md:text-6xl font-light text-white mb-6">
              Privacy Policy
            </h1>
            <p className="font-body text-white/40 text-sm">Last updated: April 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-charcoal-900">
        <div className="container-luxury max-w-4xl">
          <Section title="Introduction">
            <p>
              Renard International Hospitality Search Consultants ("Renard International," "we," "us," or "our") is committed to protecting your personal information and your right to privacy. This Privacy Policy describes how we collect, use, and share information about you when you use our website at renardinternational.com and our related services.
            </p>
          </Section>

          <Section title="Information We Collect">
            <p>We collect information you provide directly to us, including:</p>
            <ul className="list-none space-y-2 mt-3">
              {['Name, email address, phone number, and professional information when you submit a contact or application form', 'Resume/CV and career history when you apply for positions or register for our talent pool', 'Company name and hiring requirements when you submit an employer inquiry', 'Communications you send us via email or our website contact forms'].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne-500/50 mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-none space-y-2 mt-3">
              {['Provide our executive search and recruitment services', 'Match candidate profiles with appropriate employment opportunities', 'Communicate with you about services, opportunities, and updates', 'Improve our website and services', 'Comply with legal obligations'].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne-500/50 mt-1.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Data Retention">
            <p>
              We retain personal information for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Candidate profiles may be retained for up to seven years to facilitate future opportunities.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise any of these rights, please contact us at info@renardinternational.com.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="mt-3">
              Renard International Hospitality Search Consultants<br />
              121 Richmond Street West, Suite 601<br />
              Toronto, Ontario M5H 2K1, Canada<br />
              Tel: +1 (416) 364 8325<br />
              Email: info@renardinternational.com
            </p>
          </Section>
        </div>
      </section>
    </>
  )
}