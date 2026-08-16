import { workItem, workSites } from '@/config/routes'

export type WorkStill = {
  src: string
  alt: string
}

export type WorkCaseStudy = {
  headline: string
  dek: string
  body: string
  industry: string
  duration: string
  video: string
  poster: string
  stills: WorkStill[]
}

export type WorkItem = {
  id: string
  client: string
  year: string
  title: string
  tags: string[]
  image: string
  imageAlt: string
  imagePosition: string
  href: string
  liveUrl: string
  caseStudy?: WorkCaseStudy
}

export type WorkCaseStudyItem = WorkItem & { caseStudy: WorkCaseStudy }

export const work: WorkItem[] = [
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
    href: workItem('anovair'),
    liveUrl: workSites.anovair,
    caseStudy: {
      headline: 'Warehouse sale, built to sell.',
      dek: 'A Shopify website for a warehouse-sale menswear brand',
      body: 'Anovair needed a digital storefront that could merchandize a warehouse sale without feeling like a dump bin. Collection, product, and cart were designed to move stock with the same editorial confidence as the campaign imagery — so the sale still felt like the brand.',
      industry: 'eCommerce',
      duration: '4 Weeks',
      video: '/videos/anovair.mp4',
      poster: '/videos/posters/anovair.jpg',
      stills: [
        {
          src: '/images/work/anovair-hero.jpg',
          alt: 'Anovair warehouse sale banner on the storefront',
        },
        {
          src: '/images/work/anovair-portrait.jpg',
          alt: 'Anovair campaign — editorial menswear portrait',
        },
        {
          src: '/images/work/anovair-product-1.jpg',
          alt: 'Anovair product still — navy henley',
        },
      ],
    },
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
    href: workItem('aqua'),
    liveUrl: workSites.aqua,
    caseStudy: {
      headline: 'Alternative investments, on one platform.',
      dek: 'A fintech marketing site for a turnkey alternative investment platform',
      body: 'Aqua needed a site that could explain TAIP without drowning advisors in product jargon. We built a modular marketing surface for the platform, product lines, and demo flow — so the work is the product, shown as it is.',
      industry: 'Fintech',
      duration: '6 Weeks',
      video: '/videos/aqua.mp4',
      poster: '/videos/posters/aqua.jpg',
      stills: [],
    },
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
    href: workItem('proud-mary'),
    liveUrl: workSites.proudMary,
    caseStudy: {
      headline: 'Specialty coffee, from vault to cart.',
      dek: 'A Shopify storefront for a specialty-coffee brand',
      body: 'Proud Mary needed a storefront that could hold both the vault sale and everyday subscriptions. We built collection, product, and cart around the brand’s own photography and roasting story — specialty coffee, sold with the same care as the cup.',
      industry: 'eCommerce',
      duration: '4 Weeks',
      video: '/videos/proud-mary.mp4',
      poster: '/videos/posters/proud-mary.jpg',
      stills: [],
    },
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
    href: workSites.formaStudio,
    liveUrl: workSites.formaStudio,
  },
]

export function getWorkCaseStudy(slug: string | undefined): WorkCaseStudyItem | undefined {
  const item = work.find((project) => project.id === slug)
  if (!item?.caseStudy) return undefined
  return item as WorkCaseStudyItem
}

export function getRelatedWork(id: string): WorkItem[] {
  return work.filter((project) => project.id !== id)
}
