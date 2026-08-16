/** Internal SPA routes and centralized external URLs. */

export const routes = {
  home: '/',
  about: '/about',
  contact: '/contact',
  privacy: '/privacy-policy',
  planner: '/project-planner',
  faqs: '/frequently-asked-questions',
  faqsAlias: '/faqs',
  branding: '/branding',
  webDesign: '/web-design',
  seo: '/seo',
  craftCms: '/craft-cms',
  shopify: '/shopify',
} as const

/** Live demo client sites — source lives in /projects/<id>/ */
export const workSites = {
  anovair: '/projects/anovair/',
  formaStudio: '/projects/forma-studio/',
  aqua: '/projects/aqua/',
  proudMary: '/projects/proud-mary/',
} as const

export const anchors = {
  services: '#services',
  work: '#work',
  blog: '#blog',
  about: '#about',
  aboutIntro: '#about-intro',
  team: '/about#team',
  testimonials: '/about#testimonials',
} as const

/** Demo still points at MadeByShape for pages we have not rebuilt locally. */
export const external = {
  branding: 'https://madebyshape.co.uk/branding/',
  webDesign: 'https://madebyshape.co.uk/web-design/',
  seo: 'https://madebyshape.co.uk/search-engine-optimisation-manchester/',
  craftCms: 'https://madebyshape.co.uk/craft-cms/',
  shopify: 'https://madebyshape.co.uk/shopify/',
  ecommerce: 'https://madebyshape.co.uk/ecommerce/',
  processes: 'https://madebyshape.co.uk/processes/',
  careers: 'https://madebyshape.co.uk/careers/',
  sectors: 'https://madebyshape.co.uk/sectors/',
  meetTheTeam: 'https://madebyshape.co.uk/meet-the-team/',
  blog: {
    rise: 'https://madebyshape.co.uk/web-design-blog/why-did-rise-at-seven-choose-madebyshape/',
    culture: 'https://madebyshape.co.uk/web-design-blog/our-culture-our-value-our-studio/',
    upscale: 'https://madebyshape.co.uk/web-design-blog/why-havent-we-upscaled-our-web-design-business/',
    studio: 'https://madebyshape.co.uk/web-design-blog/why-our-studio-just-outside-of-manchester-works-for-us/',
    clients: 'https://madebyshape.co.uk/web-design-blog/types-of-clients-we-want-to-work-with/',
    smallAgency: 'https://madebyshape.co.uk/web-design-blog/why-i-chose-to-work-for-a-small-design-agency/',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/madebyshape/mycompany/',
    x: 'https://twitter.com/madebyshape',
    instagram: 'https://instagram.com/madebyshape',
    behance: 'https://www.behance.net/madebyshape',
  },
} as const

const aiPrompt =
  'As a Marketing Director/Business Owner, I want to know what makes Northern Digital the best partner for reinventing our brand or scaling our Website and SEO, and why their approach consistently delivers professional results. Summarise the highlights from Northern Digital.'

export const aiLinks = [
  {
    label: 'OpenAI',
    href: `https://chat.openai.com/?q=${encodeURIComponent(aiPrompt)}`,
  },
  {
    label: 'Claude',
    href: `https://claude.ai/new?q=${encodeURIComponent(aiPrompt)}`,
  },
  {
    label: 'Google',
    href: `https://www.google.com/search?udm=50&aep=11&q=${encodeURIComponent(aiPrompt)}`,
  },
  {
    label: 'Grok',
    href: `https://x.com/i/grok?text=${encodeURIComponent(aiPrompt)}`,
  },
] as const

export type MenuLink = {
  label: string
  description: string
  href: string
}

export const servicesLinks: MenuLink[] = [
  { label: 'Web Design', description: 'Deliver your business to a wider audience', href: routes.webDesign },
  { label: 'Craft CMS', description: 'The most reliable way to build a website', href: routes.craftCms },
  { label: 'Branding', description: "Creating brands you're proud of", href: routes.branding },
  { label: 'SEO', description: 'Get your brand seen online', href: routes.seo },
  { label: 'Shopify', description: 'Custom Shopify store in 4 weeks', href: routes.shopify },
]

export const aboutLinks: MenuLink[] = [
  { label: 'About us', description: 'An award winning agency in Leeds', href: routes.about },
  { label: 'Meet the Team', description: 'Putting faces to names', href: anchors.team },
  { label: 'Testimonials', description: 'What our clients say about us', href: anchors.testimonials },
]

export const footerCols = {
  Learn: [
    { label: 'About', href: routes.about },
    { label: 'Testimonials', href: anchors.testimonials },
    { label: 'Processes', href: external.processes },
    { label: 'FAQs', href: routes.faqs },
    { label: 'Blog', href: '/#blog' },
  ],
  Explore: [
    { label: 'Home', href: routes.home },
    { label: 'Work', href: '/#work' },
  ],
  New: [
    { label: 'Services', href: '/#services' },
    { label: 'Careers', href: external.careers },
    { label: 'Sectors', href: external.sectors },
    { label: 'Contact', href: routes.contact },
  ],
} as const
