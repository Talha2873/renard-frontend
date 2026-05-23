import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { PageHero, FormInput, FormSelect, FormTextarea } from '../components/ui/index'
import { fadeLeft, fadeRight, viewportConfig } from '../utils/animations'
import { siteConfig } from '../data/siteData'

const SENIORITY = ['C-Suite / CEO / Managing Director', 'Vice President', 'Director', 'General Manager', 'Department Head / Manager', 'Other Senior Role']
const DEPARTMENTS = ['Executive / General Management', 'Operations', 'Finance & Accounting', 'Sales & Marketing', 'Food & Beverage / Culinary', 'Technical / IT / Engineering', 'Spa & Wellness', 'Casino / Gaming', 'Human Resources', 'Other']
const REGIONS = ['North America', 'South America', 'Europe', 'Middle East', 'Asia Pacific', 'Africa', 'Caribbean', 'Global / Multiple Locations']
const TIMELINES = ['Immediately', 'Within 1 Month', '1–3 Months', '3–6 Months', 'Flexible']

export default function RequestEmployeePage() {
  const [form, setForm] = useState({
    contactName: '', title: '', company: '', email: '', phone: '',
    positionTitle: '', seniority: '', department: '', region: '', timeline: '', description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSubmitted(true) }, 1200)
  }

  return (
    <>
      <PageHero
        label="For Employers"
        title="Request an Executive Search"
        subtitle="Submit your brief and a senior Renard consultant will contact you within one business day to discuss your requirements."
        backgroundImage="https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=1600&q=70"
      />

      <section className="section-padding bg-charcoal-900">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-20">

            {/* Left — info */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-1"
            >
              <p className="label-luxury mb-5">Our Commitment</p>
              <h2 className="font-display text-3xl font-light text-white leading-snug mb-8">
                What to Expect After Submitting
              </h2>

              <div className="space-y-8">
                {[
                  { num: '01', title: 'Initial Consultation', desc: 'A senior consultant will contact you within 24 hours to schedule a confidential briefing call.' },
                  { num: '02', title: 'Search Proposal', desc: 'We present a tailored search strategy, timeline, and commercial terms for your review.' },
                  { num: '03', title: 'Search Commences', desc: 'Upon engagement, our global search begins immediately with regular progress updates.' },
                  { num: '04', title: 'Candidate Shortlist', desc: 'We present a concise, pre-qualified shortlist typically within 3–5 weeks of engagement.' },
                ].map((item) => (
                  <div key={item.num} className="flex gap-5">
                    <span className="font-mono text-xs text-champagne-500/60 mt-1 flex-shrink-0">{item.num}</span>
                    <div>
                      <p className="font-heading text-white font-medium mb-1.5">{item.title}</p>
                      <p className="font-body text-white/40 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 border border-champagne-500/15 bg-navy-950/40">
                <p className="font-body text-xs text-white/30 tracking-widest uppercase mb-3">Prefer to call?</p>
                <a href={siteConfig.contact.telHref} className="font-display text-xl text-champagne-400 hover:text-champagne-300 transition-colors">
                  {siteConfig.contact.tel}
                </a>
              </div>
            </motion.div>

            {/* Right — form */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-2"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-panel border border-champagne-500/20 p-12 text-center min-h-[500px] flex flex-col items-center justify-center"
                >
                  <CheckCircle2 size={56} className="text-champagne-400 mx-auto mb-6" />
                  <h3 className="font-display text-3xl text-white font-light mb-4">Brief Received</h3>
                  <p className="font-body text-white/50 leading-relaxed max-w-sm">
                    Thank you. A senior Renard consultant will be in touch within one business day to discuss your requirements.
                  </p>
                </motion.div>
              ) : (
                <div className="glass-panel border border-white/8 p-8 md:p-12">
                  <p className="font-body font-medium text-white/60 text-sm mb-8 tracking-wider uppercase">Recruitment Brief</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <p className="font-body text-xs text-champagne-500/70 tracking-widest uppercase">Your Details</p>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormInput label="Contact Name" name="contactName" placeholder="Full name" required value={form.contactName} onChange={handleChange} />
                      <FormInput label="Job Title" name="title" placeholder="Your position" value={form.title} onChange={handleChange} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormInput label="Company / Organization" name="company" placeholder="Company name" required value={form.company} onChange={handleChange} />
                      <FormInput label="Email Address" type="email" name="email" placeholder="you@company.com" required value={form.email} onChange={handleChange} />
                    </div>
                    <FormInput label="Phone Number" type="tel" name="phone" placeholder="+1 (416) 000 0000" value={form.phone} onChange={handleChange} />

                    <div className="pt-4 border-t border-white/5">
                      <p className="font-body text-xs text-champagne-500/70 tracking-widest uppercase mb-6">Position Details</p>
                    </div>

                    <FormInput label="Position Title" name="positionTitle" placeholder="e.g. General Manager, CFO, VP Operations" required value={form.positionTitle} onChange={handleChange} />
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormSelect label="Seniority Level" name="seniority" options={SENIORITY} required value={form.seniority} onChange={handleChange} />
                      <FormSelect label="Department / Function" name="department" options={DEPARTMENTS} required value={form.department} onChange={handleChange} />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormSelect label="Location / Region" name="region" options={REGIONS} required value={form.region} onChange={handleChange} />
                      <FormSelect label="Search Timeline" name="timeline" options={TIMELINES} value={form.timeline} onChange={handleChange} />
                    </div>
                    <FormTextarea
                      label="Role Description & Requirements"
                      name="description"
                      placeholder="Please describe the role, key responsibilities, ideal candidate profile, and any other relevant details..."
                      rows={6}
                      value={form.description}
                      onChange={handleChange}
                    />

                    <div className="flex items-center justify-between pt-2">
                      <p className="font-body text-xs text-white/25">
                        All inquiries handled with complete confidentiality.
                      </p>
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary group disabled:opacity-60"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full block"
                            />
                            Submitting...
                          </span>
                        ) : (
                          <>Submit Brief <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}