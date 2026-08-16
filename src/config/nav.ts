import { IMG } from '@/data/assets'
import { work } from '@/data/work'
import { external } from '@/config/external'
import { anchors, homeHash, routes } from '@/config/routes'
import { serviceList } from '@/features/service/data/registry'
import type { MenuLink } from '@/types/nav'

export type { MenuLink }

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
]

export const featuredCards = {
  services: {
    title: 'View all Services',
    description: 'We don’t stop there, check out all the services we offer here at Northern Digital',
    href: homeHash(anchors.services),
    image: IMG.servicesDropdown,
  },
  about: {
    title: 'Watch our Showreel',
    description: 'Want a snippet of our work in under a minute? We’ve got just the thing for ya...',
    href: homeHash(anchors.work),
    image: IMG.sketch,
  },
} as const

export const workCount = work.length

export const footerCols = {
  Learn: [
    { label: 'About', href: routes.about },
    { label: 'Testimonials', href: anchors.testimonials },
    { label: 'Processes', href: external.processes },
    { label: 'FAQs', href: routes.faqs },
    { label: 'Blog', href: homeHash(anchors.blog) },
  ],
  Explore: [
    { label: 'Home', href: routes.home },
    { label: 'Work', href: homeHash(anchors.work) },
  ],
  New: [
    { label: 'Services', href: homeHash(anchors.services) },
    { label: 'Careers', href: external.careers },
    { label: 'Sectors', href: external.sectors },
    { label: 'Contact', href: routes.contact },
  ],
} as const
