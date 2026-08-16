import { workSites } from '@/config/routes'

export const work = [
  {
    id: 'anovair',
    client: 'Anovair',
    year: '2026',
    title:
      'Anovair — Shopify menswear storefront, warehouse-sale merchandising, collection/PDP, and cart UX.',
    tags: ['Shopify', 'E-Commerce', 'CRO'],
    image: 'https://anovair.com/cdn/shop/files/Warehouse_Banner_new.jpg?v=1783623031&width=1600',
    imageAlt: 'Anovair website — warehouse sale hero',
    url: workSites.anovair,
  },
  {
    id: 'forma-studio',
    client: 'FORMA Studio',
    year: '2025',
    title: 'Premium DTC storefront with product storytelling, wishlist and modern checkout UX.',
    tags: ['Next.js', 'E-Commerce', 'CRO'],
    image:
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'FORMA Studio website — minimal lifestyle retail hero',
    url: workSites.formaStudio,
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
      'https://www.proudmarycoffee.com.au/cdn/shop/files/WrightC_Humbler_RenderV2_236cf380-85fb-4977-a455-18686bce1f59.png?v=1741210366',
    imageAlt: 'Proud Mary Coffee website — Humbler coffee bag',
    url: workSites.proudMary,
  },
] as const

export type WorkItem = (typeof work)[number]
