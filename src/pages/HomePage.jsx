import React from 'react'
import Hero from '../components/Hero'
import StatsSections from '../components/StatsSections'
import Sections from '../components/Sections'
import ExpertiseSections from '../components/ExpertiseSections'
import TestimonialSections from '../components/TestimonialSections'
import CTASections from '../components/CTASections'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSections />
      <Sections />
      <ExpertiseSections />
      <TestimonialSections />
      <CTASections />
    </>
  )
}