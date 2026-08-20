/** Internal SPA routes, work demos, and in-page anchors. */

export const routes = {
  home: '/',
  about: '/about',
  contact: '/contact',
  careers: '/careers',
  privacy: '/privacy-policy',
  planner: '/project-planner',
  faqs: '/frequently-asked-questions',
  faqsAlias: '/faqs',
  branding: '/branding',
  webDesign: '/web-design',
  seo: '/seo',
  craftCms: '/craft-cms',
  shopify: '/shopify',
  /** eCommerce work is covered by the Shopify service page. */
  ecommerce: '/shopify',
  /** No standalone processes page yet — FAQs cover how we work. */
  processes: '/frequently-asked-questions',
  workPattern: '/work/:slug',
} as const

/** Case-study page for a home-grid project, e.g. `/work/anovair`. */
export function workItem(slug: string) {
  return `/work/${slug}`
}

/** Live demo client sites — source lives in /projects/<id>/ */
export const workSites = {
  anovair: '/projects/anovair/',
  emnaStudio: '/projects/emna-studio/',
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

/** Home-page hash as an absolute path, e.g. `#work` → `/#work`. */
export function homeHash(hash: string) {
  const normalized = hash.startsWith('#') ? hash : `#${hash}`
  return `/${normalized}`
}
