import React from "react";
import { motion } from "framer-motion";

export function PageHero({ title, subtitle, bg }) {
  return (
    <section className={`py-24 px-6 text-center ${bg || "bg-gray-900"}`}>
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          className="text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {subtitle}
        </motion.p>
      )}
    </section>
  );
}

export function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
      {subtitle && <p className="text-gray-500 max-w-xl mx-auto">{subtitle}</p>}
    </div>
  );
}

export function FormInput({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input className="border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500" {...props} />
    </div>
  );
}

export function FormSelect({ label, options = [], ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <select className="border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500" {...props}>
        {options.map((o) => (
          <option key={o.value ?? o} value={o.value ?? o}>{o.label ?? o}</option>
        ))}
      </select>
    </div>
  );
}

export function FormTextarea({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <textarea className="border rounded px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500 resize-none" rows={4} {...props} />
    </div>
  );
}
export function ServiceCard({ title, description, cta, href, icon }) {
  return (
    <div className="border border-white/10 p-8 hover:border-champagne-500/40 transition-all duration-300">
      <span className="text-champagne-400 text-2xl mb-4 block">{icon}</span>
      <h3 className="font-display text-white text-xl mb-3">{title}</h3>
      <p className="text-white/50 text-sm leading-relaxed mb-6">{description}</p>
      <a href={href} className="text-champagne-400 text-sm flex items-center gap-2 hover:gap-3 transition-all">
        {cta} →
      </a>
    </div>
  )
}

export function StatCounter({ value, suffix, label, description }) {
  return (
    <div className="text-center">
      <p className="font-display text-5xl font-bold text-champagne-400 mb-2">
        {value}{suffix}
      </p>
      <p className="text-white font-semibold mb-1">{label}</p>
      <p className="text-white/40 text-sm">{description}</p>
    </div>
  )
}
