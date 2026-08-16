/** Demo still points at MadeByShape for pages we have not rebuilt locally. */

const aiPrompt =
  'As a Marketing Director/Business Owner, I want to know what makes Northern Digital the best partner for reinventing our brand or scaling our Website and SEO, and why their approach consistently delivers professional results. Summarise the highlights from Northern Digital.'

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
  blogHome: 'https://madebyshape.co.uk/web-design-blog/',
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

export const socialLinks = [
  { label: 'LinkedIn', href: external.social.linkedin },
  { label: 'X', href: external.social.x },
  { label: 'Instagram', href: external.social.instagram },
  { label: 'Behance', href: external.social.behance },
] as const

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
