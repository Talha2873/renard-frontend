// ============================================================
// RENARD INTERNATIONAL — Centralized Content Data
// ============================================================

export const siteConfig = {
  name: 'Renard International',
  tagline: 'The Most Trusted Name in Hospitality Recruitment',
  subTagline: 'Successful executive appointments in more than 75 countries',
  description:
    'Renard International is one of the leading Recruitment Agencies in the Hospitality Industry. Our recruiters specialize in matching talent with top employers worldwide.',
  address: {
    street: '121 Richmond Street West, Suite 601',
    city: 'Toronto, Ontario M5H 2K1',
    country: 'Canada',
  },
  contact: {
    tel: '+1 (416) 364 8325',
    fax: '+1 (416) 364 4924',
    telHref: 'tel:+14163648325',
    email: 'info@renardinternational.com',
  },
  social: {
    linkedin: 'https://ca.linkedin.com/company/renard-international-hospitality-search-consultants',
    instagram: 'https://www.instagram.com/renardinternational/',
    facebook:
      'https://www.facebook.com/Renard-International-Hospitality-Search-Consultants-187576827937177',
    twitter: 'https://twitter.com/renardintl',
  },
  externalLinks: {
    careers: 'https://careers.renardinternational.com/',
    login: 'https://careers.renardinternational.com/login',
    applyGeneral: 'https://careers.renardinternational.com/apply/general',
    newsletter: 'http://www.renardnewsletter.com/',
  },
}

export const navigation = [
  { label: 'Home', href: '/' },
  {
    label: 'Employers',
    href: '/employers',
    children: [
      { label: 'Overview', href: '/employers', desc: 'How we serve your hiring needs' },
      { label: 'Request an Employee', href: '/request-employee', desc: 'Submit a recruitment brief' },
      { label: 'Value Added Services', href: '/value-added-services', desc: 'Beyond placement support' },
    ],
  },
  { label: 'Candidates', href: '/candidates' },
  { label: 'Search Jobs', href: 'https://careers.renardinternational.com/', external: true },
  { label: 'Our Team', href: '/our-team' },
  { label: 'News & Events', href: 'http://www.renardnewsletter.com/', external: true },
  { label: 'Contact', href: '/contact' },
]

export const stats = [
  { value: 50, suffix: '+', label: 'Years of Excellence', description: 'Decades defining hospitality recruitment' },
  { value: 75, suffix: '+', label: 'Countries Served', description: 'Truly global executive appointments' },
  { value: 98, suffix: '%', label: 'Client Retention', description: 'Long-term partnership success' },
  { value: 10000, suffix: '+', label: 'Placements Made', description: 'Careers and companies transformed' },
]

export const expertise = [
  {
    id: 'executive',
    title: 'Executive Management',
    subtitle: 'C-Suite & Senior Leadership',
    description:
      'Top-tier professionals overseeing operations. Strong leaders focused on meeting their organization\'s profit objectives — from CEOs to VPs across all hospitality verticals.',
    icon: '◈',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80',
  },
  {
    id: 'operations',
    title: 'Operations',
    subtitle: 'Operational Excellence',
    description:
      'Dynamic operational professionals creating effective management strategies that drive business performance and deliver exceptional customer service at every touchpoint.',
    icon: '◎',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80',
  },
  {
    id: 'finance',
    title: 'Finance & Accounting',
    subtitle: 'Financial Leadership',
    description:
      'Experienced and qualified professionals supporting the financial stability, growth and integrity of hospitality organizations across all market segments.',
    icon: '◇',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80',
  },
  {
    id: 'sales',
    title: 'Sales & Marketing',
    subtitle: 'Revenue & Brand Growth',
    description:
      'Driven professionals who focus on generating revenue through strategic initiatives, digital marketing, social media, and partnerships that enhance brand visibility.',
    icon: '◑',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
  },
  {
    id: 'technical',
    title: 'Technical — IT & Engineering',
    subtitle: 'Infrastructure & Technology',
    description:
      'Skilled professionals in engineering, maintenance and technology ensuring seamless, safe and efficient operation of hospitality establishments worldwide.',
    icon: '◐',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
  },
  {
    id: 'culinary',
    title: 'Culinary',
    subtitle: 'Gastronomic Talent',
    description:
      'Creative and experienced culinary professionals catering to a vast repertoire of worldwide cuisine — from executive chefs to F&B directors at world-class establishments.',
    icon: '◉',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  },
  {
    id: 'specialized',
    title: 'Specialized Hospitality',
    subtitle: 'Niche & Luxury Verticals',
    description:
      'Qualified management staffing of Spas, Casinos, Integrated Resorts, Cruise Lines and other specialized hospitality departments and companies.',
    icon: '◆',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
  },
]

export const services = [
  {
    title: 'Talent Acquisition',
    description:
      'We connect strong leaders with organizations worldwide, driven to achieve their profit objectives. Our rigorous search process identifies only the highest-caliber candidates.',
    cta: 'Explore for Employers',
    href: '/employers',
    icon: '→',
    accent: 'champagne',
  },
  {
    title: 'Global Careers',
    description:
      'Top-tier professionals, poised for global impact, find their ideal roles here. We find opportunities worldwide, tailored to fuel growth and drive innovation in your career.',
    cta: 'View Opportunities',
    href: 'https://careers.renardinternational.com/',
    icon: '↗',
    accent: 'navy',
  },
  {
    title: 'Talent Pool',
    description:
      'Sign up for our talent pool and we\'ll keep you in mind for roles that fit your skills — making sure you\'re one of the first to know when something exciting comes up.',
    cta: 'Join Today',
    href: 'https://careers.renardinternational.com/apply/general',
    icon: '+',
    accent: 'champagne',
  },
]

export const teamMembers = [
  {
    name: 'Jacques Renard',
    title: 'Founder & Chairman',
    region: 'Global',
    bio: 'With over 50 years in hospitality executive recruitment, Jacques founded Renard International and established it as the gold standard in the industry.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: 'Sarah Mitchell',
    title: 'Managing Director, Americas',
    region: 'Americas',
    bio: 'Sarah leads our North and South American operations, bringing 20+ years of hospitality sector expertise and an extensive global network.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: 'David Chen',
    title: 'Senior Director, Asia Pacific',
    region: 'Asia Pacific',
    bio: 'David manages relationships across the Asia Pacific region, with deep expertise in luxury hospitality and resort management recruitment.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: 'Emma Rousseau',
    title: 'Director, Europe & Middle East',
    region: 'EMEA',
    bio: 'Emma\'s extensive network spans Europe and the Middle East, where she specializes in ultra-luxury hotel and resort executive placements.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
  {
    name: 'Michael Okafor',
    title: 'Director, Africa',
    region: 'Africa',
    bio: 'Michael champions emerging hospitality markets across Africa, connecting world-class talent with the continent\'s rapidly growing luxury sector.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: 'Isabella Torres',
    title: 'Executive Search Consultant',
    region: 'Global',
    bio: 'Isabella specializes in culinary and F&B executive placements at Michelin-starred establishments and leading luxury hospitality groups worldwide.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
]

export const testimonials = [
  {
    quote:
      'Renard International transformed our leadership team. Their understanding of luxury hospitality culture is unmatched — they delivered candidates we could not have found anywhere else.',
    author: 'CEO, Leading European Hotel Group',
    company: 'Five-Star Resort Collection, Europe',
    rating: 5,
  },
  {
    quote:
      'After 15 years of partnership, Renard remains our first call for senior hires. Their global network and meticulous vetting process consistently delivers exceptional results.',
    author: 'Chief People Officer',
    company: 'Global Hospitality Brand, 150+ Properties',
    rating: 5,
  },
  {
    quote:
      'My placement through Renard opened doors I never imagined. They understood my ambitions and found a role perfectly aligned with both my experience and my goals.',
    author: 'General Manager',
    company: 'Ultra-Luxury Resort, Middle East',
    rating: 5,
  },
  {
    quote:
      'The caliber of candidates Renard presents is extraordinary. Every submission reflects deep industry knowledge and a genuine commitment to finding the right cultural fit.',
    author: 'VP Talent Acquisition',
    company: 'Integrated Resort, Asia Pacific',
    rating: 5,
  },
]

export const regions = [
  { name: 'Americas', countries: ['Canada', 'USA', 'Mexico', 'Brazil', 'Caribbean Islands'] },
  { name: 'Europe', countries: ['UK', 'France', 'Germany', 'Spain', 'Italy', 'Switzerland', 'UAE'] },
  { name: 'Asia Pacific', countries: ['Singapore', 'China', 'Japan', 'Australia', 'Thailand', 'Maldives'] },
  { name: 'Middle East & Africa', countries: ['UAE', 'Saudi Arabia', 'Qatar', 'South Africa', 'Egypt'] },
]

export const valueAddedServices = [
  {
    title: 'Executive Assessment',
    description: 'Comprehensive evaluation of executive candidates including behavioral profiling, leadership competency assessment, and cultural alignment scoring.',
  },
  {
    title: 'Market Intelligence',
    description: 'In-depth compensation benchmarking, talent mapping, and industry insights to inform your hiring strategy and competitive positioning.',
  },
  {
    title: 'Onboarding Support',
    description: 'Post-placement integration support to ensure smooth executive transitions, maximizing retention and early performance success.',
  },
  {
    title: 'Retained Search',
    description: 'Dedicated exclusive search assignments for the most critical and confidential senior-level appointments requiring absolute discretion.',
  },
]