import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from 'lucide-react'
import { PageHero, FormInput, FormSelect, FormTextarea } from '../components/ui/index'
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewportConfig } from '../utils/animations'
import { siteConfig } from '../data/siteData'

const INQUIRY_TYPES = [
  'Executive Search (Employer)',
  'Career Inquiry (Candidate)',
  'Value Added Services',
  'General Inquiry',
  'Media & Press',
  'Other',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', phone: '', type: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  return (
    <>
      <PageHero
        label="Contact Us"
        title="Let's Start a Conversation"
        subtitle="Whether you're looking to hire exceptional talent or advance your hospitality career, our team is ready to assist you."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=70"
      />

      <section className="section-padding bg-charcoal-900">
        <div className="container-luxury">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">

            {/* Left: Contact Info */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-2"
            >
              <p className="label-luxury mb-5">Get in Touch</p>
              <h2 className="font-display text-4xl md:text-5xl font-light text-white leading-tight mb-8">
                We'd Love to Hear From You
              </h2>
              <p className="font-body text-white/50 leading-relaxed mb-12">
                Our team of specialist consultants is available to discuss your hiring needs or career aspirations. Reach us by phone, email, or through our contact form.
              </p>

              <div className="space-y-7">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-champagne-500/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin size={14} className="text-champagne-400" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-white/80 text-sm mb-1">Our Office</p>
                    <p className="font-body text-white/40 text-sm leading-relaxed">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.city}<br />
                      {siteConfig.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-champagne-500/30 flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-champagne-400" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-white/80 text-sm mb-1">Telephone</p>
                    <a
                      href={siteConfig.contact.telHref}
                      className="font-body text-white/50 text-sm hover:text-champagne-400 transition-colors"
                    >
                      {siteConfig.contact.tel}
                    </a>
                    <p className="font-body text-white/30 text-xs mt-0.5">
                      Fax: {siteConfig.contact.fax}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-champagne-500/30 flex items-center justify-center flex-shrink-0">
                    <Mail size={14} className="text-champagne-400" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-white/80 text-sm mb-1">Email</p>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-body text-white/50 text-sm hover:text-champagne-400 transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-champagne-500/30 flex items-center justify-center flex-shrink-0">
                    <Clock size={14} className="text-champagne-400" />
                  </div>
                  <div>
                    <p className="font-body font-medium text-white/80 text-sm mb-1">Office Hours</p>
                    <p className="font-body text-white/40 text-sm leading-relaxed">
                      Monday – Friday: 9:00am – 5:00pm ET<br />
                      Responses within 1 business day
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="glass-panel border border-champagne-500/20 p-12 text-center h-full flex flex-col items-center justify-center min-h-[500px]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                  >
                    <CheckCircle2 size={56} className="text-champagne-400 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="font-display text-3xl text-white font-light mb-4">Message Received</h3>
                  <p className="font-body text-white/50 leading-relaxed max-w-sm">
                    Thank you for reaching out. A member of our team will be in touch within one business day.
                  </p>
                </motion.div>
              ) : (
                <div className="glass-panel border border-white/8 p-8 md:p-12">
                  <p className="font-body font-medium text-white/60 text-sm mb-8 tracking-wider uppercase">
                    Send Us a Message
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormInput
                        label="Full Name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <FormInput
                        label="Email Address"
                        type="email"
                        name="email"
                        placeholder="you@company.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormInput
                        label="Company"
                        name="company"
                        placeholder="Your organization"
                        value={formData.company}
                        onChange={handleChange}
                      />
                      <FormInput
                        label="Phone"
                        type="tel"
                        name="phone"
                        placeholder="+1 (416) 000 0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <FormSelect
                      label="Nature of Inquiry"
                      name="type"
                      options={INQUIRY_TYPES}
                      required
                      value={formData.type}
                      onChange={handleChange}
                    />
                    <FormTextarea
                      label="Message"
                      name="message"
                      placeholder="Please describe how we can assist you..."
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                    />

                    <div className="flex items-center justify-between pt-2">
                      <p className="font-body text-xs text-white/25">
                        * Required fields. We respect your privacy.
                      </p>
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary group disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <span className="flex items-center gap-2">
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full block"
                            />
                            Sending...
                          </span>
                        ) : (
                          'Send Message'
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