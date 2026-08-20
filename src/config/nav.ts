import { IMG } from '@/config/assets'
import { work } from '@/features/work/projects'
import { anchors, homeHash, routes } from '@/config/routes'
import { serviceList } from '@/features/service/data/registry'
import type { MenuLink } from '@/types/nav'

export const servicesLinks: MenuLink[] = [...serviceList]
  .sort((a, b) => a.navOrder - b.navOrder)
  .map((service) => ({
    label: service.navLabel,
    description: service.navDescription,
    href: service.path,
  }))

export const aboutLinks: MenuLink[] = [
  { label: 'About us', description: 'An award winning agency in Leeds', href: routes.about },
  { label: 'Meet the Team', description: 'Putting faces to names', href: anchors.team },
  { label: 'Testimonials', description: 'What our clients say about us', href: anchors.testimonials },
  { label: 'Careers', description: 'Want to work at Northern Digital?', href: routes.careers },
]

export const featuredCards = {
  services: {
    title: 'View all Services',
    description: 'We don’t stop there, check out all the services we offer here at Northern Digital',
    href: homeHash(anchors.services),
    image: IMG.servicesDropdown,
  },
  about: {
    title: 'See the work',
    description: 'Live sites, shown as they are — Anovair, Aqua, Proud Mary, and more.',
    href: homeHash(anchors.work),
    image: IMG.sketch,
  },
} as const

export const workCount = work.length

export const footerCols = {
  Learn: [
    { label: 'About', href: routes.about },
    { label: 'Testimonials', href: anchors.testimonials },
    { label: 'Processes', href: routes.processes },
    { label: 'FAQs', href: routes.faqs },
    { label: 'Blog', href: homeHash(anchors.blog) },
  ],
  Explore: [
    { label: 'Home', href: routes.home },
    { label: 'Work', href: homeHash(anchors.work) },
  ],
  New: [
    { label: 'Services', href: homeHash(anchors.services) },
    { label: 'Careers', href: routes.careers },
    { label: 'Sectors', href: homeHash(anchors.services) },
    { label: 'Contact', href: routes.contact },
  ],
} as const
