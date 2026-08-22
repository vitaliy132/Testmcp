import { brand } from '@/config/brand'
import {
  ServiceCapabilities,
  ServiceCta,
  ServiceFaqs,
  ServiceHero,
  ServicePitch,
  servicePages,
  type ServiceKey,
} from '@/features/service'
import { usePageTitle } from '@/hooks/usePageTitle'

export function ServicePage({ serviceKey }: { serviceKey: ServiceKey }) {
  const service = servicePages[serviceKey]
  usePageTitle(`${service.eyebrow} | ${brand.name}`)

  return (
    <>
      <ServiceHero service={service} />
      <ServicePitch service={service} />
      <ServiceCapabilities service={service} />
      <ServiceFaqs service={service} />
      <ServiceCta service={service} />
    </>
  )
}
