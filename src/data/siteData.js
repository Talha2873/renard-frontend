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
  { name: 'Stephen J. Renard', title: 'President', region: 'Global', bio: 'Founder and President of Renard International with over 50 years of experience in hospitality executive recruitment.', image: 'https://renardinternational.com/wp-content/uploads/2024/06/Steve-Landscape2-Cropped-1.png' },
  { name: 'Robin Sheardown', title: 'Executive Vice President', region: 'Global', bio: 'Executive Vice President bringing decades of leadership in global hospitality recruitment.', image: 'https://renardinternational.com/wp-content/uploads/2024/06/Robin-Landscape1-Cropped-1.png' },
  { name: 'Pina Mercuri', title: 'Controller', region: 'Americas', bio: 'Financial controller overseeing the firm\'s financial operations and integrity.', image: 'https://renardinternational.com/wp-content/uploads/2024/06/pina-edit.png' },
  { name: 'Sylvia Menezes', title: 'Director Of Worldwide Recruitment', region: 'Global', bio: 'Directing worldwide recruitment operations across all hospitality verticals.', image: 'https://renardinternational.com/wp-content/uploads/2024/06/Sylvia-Landscape1-Cropped-1.png' },
  { name: 'Brian Renard', title: 'Senior Executive Consultant', region: 'Americas', bio: 'Senior consultant specializing in executive-level placements across the Americas.', image: 'https://renardinternational.com/wp-content/uploads/2024/06/Brian-Landscape1-Cropped-1.png' },
  { name: 'Ashok Sharma', title: 'Executive Consultant', region: 'Asia Pacific', bio: 'Executive consultant with deep expertise in Asia Pacific hospitality markets.', image: 'https://renardinternational.com/wp-content/uploads/2024/06/Ashok-Landscape1-Cropped-1.png' },
  { name: 'Yasmin Khambatta', title: 'Executive Assistant & Hospitality Search Consultant', region: 'Global', bio: 'Executive assistant to the President and hospitality search consultant.', image: 'https://renardinternational.com/wp-content/uploads/2024/06/Yasmin-Landscape2-Cropped-1.png' },
  { name: 'Yudeisy Lugo', title: 'Administrative Assistant', region: 'Americas', bio: 'Administrative professional supporting the Renard International team.', image: 'https://renardinternational.com/wp-content/uploads/2024/06/Yudeisy-Landscape1-Cropped-1.png' },
  { name: 'Bianca Morini', title: 'Social Media Specialist', region: 'Global', bio: 'Managing Renard International\'s social media presence and digital communications.', image: 'https://renardinternational.com/wp-content/uploads/2024/06/IMG_8999-1.png' },
  { name: 'Meera Rocha', title: 'Administrative Assistant', region: 'Americas', bio: 'Administrative professional supporting daily operations at Renard International.', image: 'https://renardinternational.com/wp-content/uploads/2024/06/IMG_8993-1.png' },
  { name: 'Yash Addivigadoo', title: 'Recruitment Researcher', region: 'Global', bio: 'Recruitment researcher supporting executive search mandates worldwide.', image: 'https://renardinternational.com/wp-content/uploads/2024/06/Yash-Addivigadoo-1.png' },
  { name: 'Lisa Renard', title: 'Hospitality Search Consultant', region: 'Americas', bio: 'Hospitality search consultant with a focus on executive placements.', image: 'https://renardinternational.com/wp-content/uploads/2024/06/Lisa-Landscape1-Cropped-1.png' },
  { name: 'Elsa Kampman', title: 'International Search Consultant', region: 'Europe', bio: 'International search consultant specializing in European hospitality markets.', image: 'https://renardinternational.com/wp-content/uploads/2025/02/Elsa-Kampman-Photo.jpg' },
]

export const regions = [
  {
    name: 'Americas',
    countries: ['United States', 'Canada', 'Mexico', 'Brazil', 'Caribbean', 'Latin America'],
  },
  {
    name: 'Europe',
    countries: ['United Kingdom', 'France', 'Germany', 'Spain', 'Italy', 'Switzerland'],
  },
  {
    name: 'Asia Pacific',
    countries: ['China', 'Japan', 'Singapore', 'Australia', 'India', 'Southeast Asia'],
  },
  {
    name: 'Middle East & Africa',
    countries: ['UAE', 'Saudi Arabia', 'Qatar', 'South Africa', 'Kenya', 'Egypt'],
  },
]

export const valueAddedServices = [
  {
    title: 'Executive Assessment',
    description:
      'In-depth behavioural and competency-based assessments to evaluate leadership potential, cultural alignment, and long-term fit for your organization.',
  },
  {
    title: 'Compensation Benchmarking',
    description:
      'Market-aligned salary data and compensation intelligence to help you structure competitive offers that attract and retain top-tier talent.',
  },
  {
    title: 'Onboarding Support',
    description:
      'Structured post-placement follow-up and advisory support to ensure a smooth transition and accelerate performance in the first 90 days.',
  },
  {
    title: 'Succession Planning',
    description:
      'Strategic guidance on building leadership pipelines and identifying internal and external candidates for critical future roles.',
  },
  {
    title: 'Confidential Search',
    description:
      'Discreet, off-market searches for sensitive leadership transitions — protecting your brand and ensuring complete confidentiality throughout.',
  },
]

export const testimonials = [
  {
    quote:
      'Renard International delivered an outstanding General Manager within three weeks. Their understanding of our brand culture was exceptional — the placement has been a tremendous success.',
    author: 'Chief Human Resources Officer',
    company: 'Leading Luxury Hotel Group, Dubai',
    rating: 5,
  },
  {
    quote:
      'We have partnered with Renard for over a decade across multiple continents. Their global network and depth of hospitality knowledge is unmatched in the industry.',
    author: 'Vice President, Talent Acquisition',
    company: 'International Resort & Casino Group',
    rating: 5,
  },
  {
    quote:
      'The team at Renard truly understands the nuances of executive hospitality recruitment. Every candidate they presented was thoroughly vetted and aligned with our values.',
    author: 'Regional Director of Operations',
    company: 'Boutique Hotel Collection, Europe',
    rating: 5,
  },
  {
    quote:
      'Renard International found us a CFO for our expanding portfolio in Asia Pacific in record time. Their professionalism and market insight made all the difference.',
    author: 'Chief Executive Officer',
    company: 'Hospitality Investment Group, Singapore',
    rating: 5,
  },
  {
    quote:
      'What sets Renard apart is their genuine commitment to long-term success. They followed up months after placement to ensure everything was going well. Truly a partner.',
    author: 'Director of Human Resources',
    company: 'Five-Star Resort, Caribbean',
    rating: 5,
  },
]
