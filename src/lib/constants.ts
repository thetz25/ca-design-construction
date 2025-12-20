import { Service, Project, Testimonial, ProcessStep, WhyChooseUsItem } from './types'

export const COMPANY_INFO = {
  name: 'CA Design + Construction',
  tagline: 'Your Dreams We Build',
  shortDescription: 'Premium architectural design and construction services for discerning clients',
  yearsInBusiness: 5,
  phone: '+63-998-999-8532',
  email: 'cahomedesigns00@gmail.com',
  address: '2nd floor Unit 1 Penawin Bldg. San Jose St. Cor. Binay St. Pob3 Bauan, Batangas',
  social: {
    facebook: 'https://www.facebook.com/cahomedesigns',
    instagram: 'https://www.instagram.com/cadesignconstruction/',
    linkedin: '#',
    twitter: '#',
  },
}

export const HERO_CONTENT = {
  headline: 'Your Dreams, We Build',
  subheadline: 'Premium architectural design and construction services for residential and commercial projects',
  ctaText: 'Request a Quote',
  backgroundImage: '/images/hero-bg.jpg',
}

export const ABOUT_CONTENT = {
  headline: 'About CA Design + Construction',
  description: `CA Designs (CAD Construction Services) was founded by a young
and passionate Draftsman in February 2021. It offers Good Quality
Designs, Budget Friendly & Professional Personnels, which aims to
provide excellent designs and services through the help of allied
professionals such as Architects & Engineers. CA Designs aspire to
create solutions depending on the need and dreams of every client in
turning their dreams into reality.`,
  highlights: [
    '5 Years of Excellence',
    'Multiple Projects Completed',
    'Winning Design Team',
    '100% Client Satisfaction',
  ],
}

export const SERVICES: Service[] = [
  {
    id: 'architectural-design',
    title: 'Design & Drafting',
    description: 'Custom architectural plans tailored to your vision. From concept to detailed blueprints, we create designs that are both beautiful and functional.',
    icon: '🏛️',
  },
  {
    id: 'construction-management',
    title: 'Construction Services',
    description: 'Expert project management from start to finish. We handle all aspects of construction with precision, transparency, and adherence to timeline and budget.',
    icon: '🏗️',
  },
  {
    id: 'renovation-remodeling',
    title: 'Renovation & Remodeling',
    description: 'Transform existing spaces with thoughtful renovations. We specialize in modernizing homes and buildings while preserving their character.',
    icon: '🔨',
  },
  {
    id: 'interior-design',
    title: 'Interior & Exterior Design',
    description: 'Complete interior and exterior design services. From color schemes to material selection, we create cohesive, stunning spaces.',
    icon: '🎨',
  },
  {
    id: 'custom-builds',
    title: 'Custom Residential & Commercial Builds',
    description: 'Bespoke construction for residential homes and commercial properties. We build structures that stand the test of time.',
    icon: '🏢',
  },
]

export const PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Proposed Sto. Domingo Chapel',
    category: 'Residential',
    description: 'A modern chapel combining clean geometry with warm natural stone to create a welcoming, dignified place of worship.',
    image: '/images/projects/modern-estate.jpg',
    gallery: [
      '/images/projects/modern-estate.jpg',
      '/images/projects/corporate-office.jpg',
      '/images/projects/penthouse.jpg'
    ],
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Proposed one-storey coffee shop building ',
    category: 'Commercial',
    description: 'A modern tropical minimalist coffee shop featuring fluid white forms, arched openings, and integrated indoor-outdoor spaces, creating a relaxed yet sophisticated café experience set against lush palm-filled surroundings.',
    image: '/images/projects/corporate-office.jpg',
    gallery: [
      '/images/projects/corporate-office.jpg',
      '/images/projects/retail-complex.jpg',
      '/images/projects/urban-loft.jpg'
    ],
    featured: true,
  },
  {
    id: 'project-3',
    title: 'Proposed Two-Storey Residential Building',
    category: 'Residential',
    description: 'A proposed two-storey residential building designed with clean modern lines and functional spaces, providing a comfortable and efficient home environment..',
    image: '/images/projects/penthouse.jpg',
    gallery: [
      '/images/projects/penthouse.jpg',
      '/images/projects/hillside-villa.jpg',
      '/images/projects/modern-estate.jpg'
    ],
    featured: true,
  },
  {
    id: 'project-4',
    title: 'Retail Shopping Complex',
    category: 'Commercial',
    description: 'Mixed-use retail development featuring modern architecture and visitor-friendly design.',
    image: '/images/projects/retail-complex.jpg',
    gallery: [
      '/images/projects/retail-complex.jpg',
      '/images/projects/corporate-office.jpg'
    ]
  },
  {
    id: 'project-5',
    title: 'Hillside Villa',
    category: 'Residential',
    description: 'Architectural masterpiece blending luxury and landscape with breathtaking views.',
    image: '/images/projects/hillside-villa.jpg',
    gallery: [
      '/images/projects/hillside-villa.jpg',
      '/images/projects/penthouse.jpg'
    ]
  },
  {
    id: 'project-6',
    title: 'Urban Loft Conversion',
    category: 'Residential',
    description: 'Industrial warehouse transformed into stylish urban living spaces.',
    image: '/images/projects/urban-loft.jpg',
    gallery: [
      '/images/projects/urban-loft.jpg',
      '/images/projects/modern-estate.jpg'
    ]
  },
]

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    id: 'quality',
    icon: '⭐',
    title: 'Premium Quality Craftsmanship',
    description: 'We never compromise on quality. Every detail is executed with precision and attention to excellence.',
  },
  {
    id: 'on-time',
    icon: '⏰',
    title: 'On-Time Delivery',
    description: 'Respect your time and budget. We commit to schedules and deliver projects on or ahead of deadline.',
  },
  {
    id: 'transparent',
    icon: '💎',
    title: 'Transparent Pricing',
    description: 'No hidden costs. We provide detailed quotes and maintain open communication throughout the project.',
  },
  {
    id: 'experienced',
    icon: '🎯',
    title: 'Experienced Professionals',
    description: 'Our team brings 5+ years of combined expertise. Each member is a specialist in their field.',
  },
  {
    id: 'end-to-end',
    icon: '🤝',
    title: 'End-to-End Service',
    description: 'From initial design concept through final handover, we handle everything with seamless coordination.',
  },
]

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Consultation',
    description: 'We begin with a comprehensive consultation to understand your vision, goals, budget, and timeline.',
    icon: '💬',
  },
  {
    number: 2,
    title: 'Design & Planning',
    description: 'Our design team creates detailed architectural plans and specifications tailored to your requirements.',
    icon: '📐',
  },
  {
    number: 3,
    title: 'Construction',
    description: 'Expert project management and skilled craftspeople execute the construction with precision and care.',
    icon: '🔨',
  },
  {
    number: 4,
    title: 'Final Handover',
    description: 'Thorough inspection and quality assurance before we hand over your completed project.',
    icon: '✅',
  },
]

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Margaret Thompson',
    role: 'Homeowner',
    content: 'CA Design + Construction transformed our vision into a beautiful reality. The team was professional, responsive, and delivered beyond our expectations. We couldn\'t be happier with our new home!',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Commercial Developer',
    content: 'Working with CA Design was exceptional. They managed a complex commercial project flawlessly. Their attention to detail and project management was outstanding.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah Mitchell',
    role: 'Property Owner',
    content: 'From the initial design concepts to the final walkthrough, every step was handled with professionalism and expertise. The renovation exceeded all our expectations.',
    rating: 5,
  },

]

export const CONTACT_INFO = {
  phoneLabel: 'Phone',
  emailLabel: 'Email',
  addressLabel: 'Address',
  mapTitle: 'Visit Our Office',
  formTitle: 'Get in Touch',
  formSubtitle: 'Tell us about your project and we\'ll be in touch shortly.',
}

export const FOOTER_CONTENT = {
  companyName: 'CA Design + Construction',
  copyright: '© 2024 CA Design + Construction. All rights reserved.',
  quickLinks: [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ],
  socialLinks: [
    { label: 'Facebook', url: COMPANY_INFO.social.facebook },
    { label: 'Instagram', url: COMPANY_INFO.social.instagram },
    { label: 'LinkedIn', url: COMPANY_INFO.social.linkedin },
    { label: 'Twitter', url: COMPANY_INFO.social.twitter },
  ],
}
