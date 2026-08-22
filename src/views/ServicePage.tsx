import {
  ServiceCapabilities,
  ServiceCta,
  ServiceFaqs,
  ServiceHero,
  ServicePitch,
  servicePages,
  type ServiceKey,
} from '@/features/service'

export function ServicePage({ serviceKey }: { serviceKey: ServiceKey }) {
  const service = servicePages[serviceKey]

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
