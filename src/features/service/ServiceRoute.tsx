import { ServicePage } from '@/views/ServicePage'
import { JsonLd } from '@/components/seo/JsonLd'
import { breadcrumbJsonLd, faqPageJsonLd, pageMeta, serviceJsonLd } from '@/lib/seo'
import { servicePages } from '@/features/service'
import { routes } from '@/config/routes'
import type { ServiceKey } from '@/types/service'

const serviceSeoTitle: Record<ServiceKey, string> = {
  branding: 'Branding Agency Leeds',
  webDesign: 'Web Design Agency Leeds',
  seo: 'SEO Agency Leeds',
  craftCms: 'Craft CMS Developers Leeds',
  shopify: 'Shopify Agency Leeds',
}

export function serviceMetadata(key: ServiceKey) {
  const service = servicePages[key]
  return pageMeta({
    title: serviceSeoTitle[key],
    description: service.intro,
    path: service.path,
  })
}

export function ServiceRoute({ serviceKey }: { serviceKey: ServiceKey }) {
  const service = servicePages[serviceKey]
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: routes.home },
          { name: service.eyebrow, path: service.path },
        ])}
      />
      <JsonLd data={serviceJsonLd(service)} />
      <JsonLd data={faqPageJsonLd(service.faqs)} />
      <ServicePage serviceKey={serviceKey} />
    </>
  )
}
