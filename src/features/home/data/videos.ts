import { anchors, workSites } from '@/config/routes'

export const videoCarouselCopy = {
  eyebrow: 'In motion',
  heading: 'Watch the websites',
} as const

export const homeVideos = [
  {
    id: 'showreel',
    client: 'Northern Digital',
    kicker: 'Showreel',
    title: 'Three live sites, shown as they are.',
    src: '/videos/showcase.mp4',
    poster: '/videos/posters/showcase.png',
    href: anchors.work,
    cta: 'See the work',
  },
  {
    id: 'anovair',
    client: 'Anovair',
    kicker: 'Shopify',
    title: 'Warehouse-sale merchandising, collection, product, cart.',
    src: '/videos/anovair.mp4',
    poster: '/videos/posters/anovair.jpg',
    href: workSites.anovair,
    cta: 'View site',
  },
  {
    id: 'aqua',
    client: 'Aqua',
    kicker: 'Fintech',
    title: 'Turnkey alternative investments, on one platform.',
    src: '/videos/aqua.mp4',
    poster: '/videos/posters/aqua.jpg',
    href: workSites.aqua,
    cta: 'View site',
  },
  {
    id: 'proud-mary',
    client: 'Proud Mary',
    kicker: 'Brand',
    title: 'Specialty coffee, subscriptions, and the vault sale.',
    src: '/videos/proud-mary.mp4',
    poster: '/videos/posters/proud-mary.jpg',
    href: workSites.proudMary,
    cta: 'View site',
  },
] as const

export type HomeVideo = (typeof homeVideos)[number]
