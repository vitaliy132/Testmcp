import { workItem, workSites } from '@/config/routes'

export type WorkStill = {
  src: string
  alt: string
}

export type WorkChapter = {
  eyebrow: string
  heading: string
  body: string
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
  chapters: WorkChapter[]
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
    image: '/images/work/anovair-portrait.jpg',
    imageAlt: 'Anovair campaign — editorial menswear portrait',
    imagePosition: '50% 18%',
    href: workItem('anovair'),
    liveUrl: workSites.anovair,
    caseStudy: {
      headline: 'Warehouse sale, built to sell.',
      dek: 'A Shopify website for a warehouse-sale menswear brand',
      body: 'Anovair needed a digital storefront that could merchandize a warehouse sale without feeling like a dump bin. Collection, product, and cart were designed to move stock with the same editorial confidence as the campaign imagery — so the sale still felt like the brand, even with up to 50% off across the site.',
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
      chapters: [
        {
          eyebrow: 'Design',
          heading: 'Sale, without looking like a sale.',
          body: 'The site had to clear a warehouse without looking like a dump bin. We kept the campaign portraits, generous space, and collection tiles — Tops, Bottoms, Henleys — so the sale still read as Anovair. A warehouse banner and “up to 50% off” sit on the same photography as a full-price season.',
        },
        {
          eyebrow: 'Development',
          heading: 'Merchandising that actually moves stock.',
          body: 'We built the storefront around Shopify collection, product, and cart so a warehouse sale could run as a first-class collection — sale merchandising, size and colour on the PDP, and FAQs for shipping — rather than a bolted-on promo bar.',
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
    image: '/images/work/aqua.jpg',
    imageAlt: 'Aqua website — advisor using the TAIP platform',
    imagePosition: '50% 22%',
    href: workItem('aqua'),
    liveUrl: workSites.aqua,
    caseStudy: {
      headline: 'Alternative investments, on one platform.',
      dek: 'A fintech marketing site for a turnkey alternative investment platform',
      body: 'Aqua needed a site that could explain TAIP without drowning advisors in product jargon. We built a modular marketing surface for the platform, product lines, and demo flow — so the work is the product, shown as it is, from the definition of a turnkey alternative investment platform through to a booked demo.',
      industry: 'Fintech',
      duration: '6 Weeks',
      video: '/videos/aqua.mp4',
      poster: '/videos/posters/aqua.jpg',
      stills: [
        {
          src: 'https://www.investwithaqua.com/assets/advisor-office-CB0Zu6Q6.jpg',
          alt: 'Advisor using the Aqua TAIP platform',
        },
        {
          src: 'https://www.investwithaqua.com/assets/solution-diagram-CixPP6in.png',
          alt: 'Aqua solution architecture diagram',
        },
        {
          src: 'https://www.investwithaqua.com/assets/image_1770902955444-BmoCSt31.png',
          alt: 'AIX by Aqua',
        },
      ],
      chapters: [
        {
          eyebrow: 'Design',
          heading: 'A platform, explained without the jargon.',
          body: 'Advisors do not need another wall of product copy. The homepage opens on a plain-language definition of TAIP, then modular product lines, who they serve, and advisor photography — so the platform is visible before anyone books a demo.',
        },
        {
          eyebrow: 'Development',
          heading: 'Demo-ready, not brochure-ware.',
          body: 'The site is a marketing surface for a live product: solutions, capabilities, and a clear path to a TAIP demo. Navigation, lockup, and CTAs are built so an advisor can go from “what is this?” to a calendar hold without a detour through a pitch deck.',
        },
      ],
    },
  },
  {
    id: 'proud-mary',
    client: 'Proud Mary Coffee',
    year: '2026',
    title:
      'Proud Mary Coffee — Shopify specialty-coffee storefront, subscriptions, collection/PDP, and cart UX.',
    tags: ['Shopify', 'E-Commerce', 'Brand'],
    image: '/images/work/proud-mary.jpg',
    imageAlt: 'Proud Mary Coffee — ripe coffee cherries on the branch',
    imagePosition: '50% 50%',
    href: workItem('proud-mary'),
    liveUrl: workSites.proudMary,
    caseStudy: {
      headline: 'Specialty coffee, from vault to cart.',
      dek: 'A Shopify storefront for a specialty-coffee brand',
      body: 'Proud Mary needed a storefront that could hold both the vault sale and everyday subscriptions. We built collection, product, and cart around the brand’s own photography and roasting story — specialty coffee, sold with the same care as the cup, whether someone is grabbing a tin from the Deluxe Vault or setting up a weekly subscription.',
      industry: 'eCommerce',
      duration: '4 Weeks',
      video: '/videos/proud-mary.mp4',
      poster: '/videos/posters/proud-mary.jpg',
      stills: [
        {
          src: 'https://www.proudmarycoffee.com.au/cdn/shop/files/preview_images/7f197418a9ae4d82897c4c32774f6e21.thumbnail.0000000000_2000x.jpg?v=1786402541',
          alt: 'Proud Mary Coffee — ripe coffee cherries on the branch',
        },
        {
          src: 'https://www.proudmarycoffee.com.au/cdn/shop/files/Screenshot_2023-04-10_at_11.07.32_AM.png?v=1681150072',
          alt: 'Proud Mary Café Collingwood',
        },
        {
          src: 'https://www.proudmarycoffee.com.au/cdn/shop/files/Screenshot_2023-04-10_at_3.44.26_PM.png?v=1681166705',
          alt: 'Aunty Peg’s roasting',
        },
      ],
      chapters: [
        {
          eyebrow: 'Design',
          heading: 'From the farm to the vault.',
          body: 'The homepage leads with the Deluxe Vault sale on the brand’s own origin footage, then subscriptions and new coffees. Photography of cherries, cafés, and the roast keeps the store in the same world as the cup — not a generic grocery grid.',
        },
        {
          eyebrow: 'Development',
          heading: 'Subscriptions and a sale, on one store.',
          body: 'Shopify collections carry the vault sale, subscribe-and-save, merch, and wholesale without splitting the brand. Product and cart stay simple so a one-off tin and a weekly subscription can live in the same checkout.',
        },
      ],
    },
  },
  {
    id: 'emna-studio',
    client: 'Emna Studio',
    year: '2026',
    title:
      'Architecture studio and concept store — furniture, artisan objects, and a Fethiye boutique in one site.',
    tags: ['Architecture', 'E-Commerce', 'Design'],
    image: '/images/work/emna-studio.jpg',
    imageAlt: 'Emna Studio TROCTA coffee table — Mudalla geometry in marble and metal',
    imagePosition: '50% 50%',
    href: workItem('emna-studio'),
    liveUrl: workSites.emnaStudio,
    caseStudy: {
      headline: 'Architecture and a concept store, under one roof.',
      dek: 'A studio website for architecture, artisan furniture, and a Fethiye boutique',
      body: 'Emna Studio needed one digital home for the practice, the atelier, and Le Concept Store. We built a site that can hold Mediterranean architecture, limited-edition furniture, and a curated boutique — so the Fethiye studio reads as one world, whether someone is browsing a TROCTA table or starting a project.',
      industry: 'Architecture',
      duration: '6 Weeks',
      video: '/videos/emna-studio.mp4',
      poster: '/videos/posters/emna-studio.jpg',
      stills: [
        {
          src: 'https://static.wixstatic.com/media/a22769_548ec3092ea24c679e985b4851eb2af9~mv2_d_6354_3000_s_4_2.jpg/v1/fill/w_1600,h_1200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a22769_548ec3092ea24c679e985b4851eb2af9~mv2_d_6354_3000_s_4_2.jpg',
          alt: 'Emna Studio TROCTA coffee table — Mudalla geometry in marble and metal',
        },
        {
          src: 'https://static.wixstatic.com/media/a22769_5374837cbfbb41398cc39ad2208a79ad~mv2.jpg/v1/fill/w_1600,h_1400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a22769_5374837cbfbb41398cc39ad2208a79ad~mv2.jpg',
          alt: 'Le Concept Store — renovated Greek house in Fethiye',
        },
        {
          src: 'https://static.wixstatic.com/media/a22769_6d88f69ab4df4c1c87e3881f29c90d2d~mv2.jpg/v1/fill/w_1400,h_900,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a22769_6d88f69ab4df4c1c87e3881f29c90d2d~mv2.jpg',
          alt: 'Emna Studio architecture — Mediterranean light and a precise line',
        },
      ],
      chapters: [
        {
          eyebrow: 'Design',
          heading: 'Practice and store, one visual world.',
          body: 'The homepage opens on architecture, furniture, and consulting as equal doors, then Le Concept Store. Photography of the renovated Greek house, Mudalla furniture, and artisan objects keeps the boutique in the same world as the practice — not a bolted-on shop.',
        },
        {
          eyebrow: 'Development',
          heading: 'Catalog, gallery, and cart on one site.',
          body: 'Architecture and design galleries sit next to a working concept-store catalog — furniture, tableware, wearables — with product pages and cart. The studio, the store, and the contact path share one chrome so a project enquiry and a TROCTA table can live in the same brand.',
        },
      ],
    },
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
