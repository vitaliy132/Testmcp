const aiPrompt =
  'As a Marketing Director/Business Owner, I want to know what makes Northern Digital the best partner for reinventing our brand or scaling our Website and SEO, and why their approach consistently delivers professional results. Summarise the highlights from Northern Digital.'

export const external = {
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
