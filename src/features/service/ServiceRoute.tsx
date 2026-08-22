import { ServicePage } from '@/views/ServicePage'
import { JsonLd } from '@/components/seo/JsonLd'
import { faqPageJsonLd, pageMeta } from '@/lib/seo'
import { servicePages } from '@/features/service'
import type { ServiceKey } from '@/types/service'

export function serviceMetadata(key: ServiceKey) {
  const service = servicePages[key]
  return pageMeta({
    title: service.eyebrow,
    description: service.intro,
    path: service.path,
  })
}

export function ServiceRoute({ serviceKey }: { serviceKey: ServiceKey }) {
  const service = servicePages[serviceKey]
  return (
    <>
      <JsonLd data={faqPageJsonLd(service.faqs)} />
      <ServicePage serviceKey={serviceKey} />
    </>
  )
}
