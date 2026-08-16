import { external, routes, workSites } from '@/config/links'
import { IMG } from '@/data/assets'

export { IMG }

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
    id: 'brick-salt',
    client: 'BRICK & SALT',
    year: '2025',
    title:
      'Industrial-elegant small plates restaurant — cinematic scroll, seasonal menu and reservation flow.',
    tags: ['Next.js', 'UX', 'Booking Flow'],
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80',
    imageAlt: 'BRICK & SALT website — plated dishes on a warmly lit restaurant table',
    url: workSites.brickSalt,
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
]

export const services = [
  { name: 'Brand Identity', image: IMG.brand, url: routes.branding },
  { name: 'Websites', image: IMG.websites, url: routes.webDesign },
  { name: 'SEO', image: IMG.seo, url: routes.seo },
  { name: 'Craft CMS', image: IMG.craft, url: routes.craftCms },
  { name: 'Shopify', image: IMG.shopify, url: routes.shopify },
]

export const blog = [
  {
    title: 'Why did Rise at Seven choose Northern Digital?',
    excerpt:
      'It always has a feel good factor when another agency instructs us to totally rebrand their business, create a new digital environment and ...',
    readTime: '2 min read',
    cover: IMG.rise,
    authorImage: IMG.andyProfile,
    url: external.blog.rise,
  },
  {
    title: 'Our Culture, Our Value & Our Studio',
    excerpt:
      'In our own words, how important culture, values and studio environment is to us as a web design agency at Northern Digital',
    readTime: '6 min read',
    cover: IMG.wireframes,
    authorImage: IMG.natasia,
    url: external.blog.culture,
  },
  {
    title: "Why haven't we upscaled our web design agency?",
    excerpt:
      "Co-Founder of Northern Digital, Andy Golpys, explains why we haven't turned our digital agency of 10 staff into 30.",
    readTime: '10 min read',
    cover: IMG.office,
    authorImage: IMG.andyProfile,
    url: external.blog.upscale,
  },
  {
    title: 'Why our studio outside of Manchester works for us',
    excerpt:
      "Hi, I'm Andy Golpys, Co-Founder here at Northern Digital. I started my web career 18 years ago as a freelancer, whilst at University.",
    readTime: '4 min read',
    cover: IMG.printer,
    authorImage: IMG.andyProfile,
    url: external.blog.studio,
  },
  {
    title: 'Types of clients we want to work with',
    excerpt:
      "Here at Northern Digital in Manchester, we want to create websites for nice people. Here's a list of the types of clients we want to work with.",
    readTime: '6 min read',
    cover: IMG.natasiaDesk,
    authorImage: IMG.andyProfile,
    url: external.blog.clients,
  },
  {
    title: 'Why I chose to work for a small design agency',
    excerpt:
      "The size of the business you work for should be well-considered when looking for a job in design. Here's why I chose to work for a small design agency...",
    readTime: '4 min read',
    cover: IMG.cards,
    authorImage: IMG.ella,
    url: external.blog.smallAgency,
  },
]
