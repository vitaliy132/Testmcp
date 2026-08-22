import { IMG } from '@/config/assets'
import type { ServiceKey } from '@/types/service'
import { servicePages, type ServicePageContent } from '@/features/service/data/pages'

type ServiceNavMeta = {
  navLabel: string
  navDescription: string
  navOrder: number
  homeName: string
  homeImage: string
  homeOrder: number
}

const navMeta: Record<ServiceKey, ServiceNavMeta> = {
  webDesign: {
    navLabel: 'Web Design',
    navDescription: 'Deliver your business to a wider audience',
    navOrder: 0,
    homeName: 'Websites',
    homeImage: IMG.websites,
    homeOrder: 1,
  },
  craftCms: {
    navLabel: 'Craft CMS',
    navDescription: 'The most reliable way to build a website',
    navOrder: 1,
    homeName: 'Craft CMS',
    homeImage: IMG.sketch,
    homeOrder: 3,
  },
  branding: {
    navLabel: 'Branding',
    navDescription: "Creating brands you're proud of",
    navOrder: 2,
    homeName: 'Brand Identity',
    homeImage: IMG.brand,
    homeOrder: 0,
  },
  seo: {
    navLabel: 'SEO',
    navDescription: 'Get your brand seen online',
    navOrder: 3,
    homeName: 'SEO',
    homeImage: IMG.seo,
    homeOrder: 2,
  },
  shopify: {
    navLabel: 'Shopify',
    navDescription: 'Custom Shopify store in 4 weeks',
    navOrder: 4,
    homeName: 'Shopify',
    homeImage: IMG.shopify,
    homeOrder: 4,
  },
}

type ServiceRecord = ServiceNavMeta & {
  key: ServiceKey
  path: string
  page: ServicePageContent
}

export const serviceList: ServiceRecord[] = (Object.keys(servicePages) as ServiceKey[]).map((key) => ({
  key,
  path: servicePages[key].path,
  page: servicePages[key],
  ...navMeta[key],
}))

export const homeServices = [...serviceList]
  .sort((a, b) => a.homeOrder - b.homeOrder)
  .map((service) => ({
    name: service.homeName,
    image: service.homeImage,
    url: service.path,
  }))
