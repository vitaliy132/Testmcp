import { workSites } from '@/config/routes'

export const work = [
  {
    id: 'anovair',
    client: 'Anovair',
    year: '2026',
    title:
      'Anovair — Shopify menswear storefront, warehouse-sale merchandising, collection/PDP, and cart UX.',
    tags: ['Shopify', 'E-Commerce', 'CRO'],
    image: 'https://anovair.com/cdn/shop/files/Jorge_1.jpg?v=1783623208&width=1600',
    imageAlt: 'Anovair campaign — editorial menswear portrait',
    imagePosition: '50% 18%',
    url: workSites.anovair,
  },
  {
    id: 'aqua',
    client: 'Aqua',
    year: '2026',
    title:
      'Aqua TAIP — fintech marketing site for a turnkey alternative investment platform, modular product lines, and demo flow.',
    tags: ['Web Design', 'Fintech', 'SaaS'],
    image: 'https://www.investwithaqua.com/assets/advisor-office-CB0Zu6Q6.jpg',
    imageAlt: 'Aqua website — advisor using the TAIP platform',
    imagePosition: '50% 22%',
    url: workSites.aqua,
  },
  {
    id: 'proud-mary',
    client: 'Proud Mary Coffee',
    year: '2026',
    title:
      'Proud Mary Coffee — Shopify specialty-coffee storefront, subscriptions, collection/PDP, and cart UX.',
    tags: ['Shopify', 'E-Commerce', 'Brand'],
    image:
      'https://www.proudmarycoffee.com.au/cdn/shop/files/preview_images/7f197418a9ae4d82897c4c32774f6e21.thumbnail.0000000000_2000x.jpg?v=1786402541',
    imageAlt: 'Proud Mary Coffee — ripe coffee cherries on the branch',
    imagePosition: '50% 50%',
    url: workSites.proudMary,
  },
  {
    id: 'forma-studio',
    client: 'FORMA Studio',
    year: '2025',
    title: 'Premium DTC storefront with product storytelling, wishlist and modern checkout UX.',
    tags: ['Next.js', 'E-Commerce', 'CRO'],
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'FORMA Studio lookbook — considered home at dusk',
    imagePosition: '50% 50%',
    url: workSites.formaStudio,
  },
] as const

export type WorkItem = (typeof work)[number]
