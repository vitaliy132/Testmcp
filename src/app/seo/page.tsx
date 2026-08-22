import { ServiceRoute, serviceMetadata } from '@/features/service/ServiceRoute'

export const metadata = serviceMetadata('seo')

export default function Page() {
  return <ServiceRoute serviceKey="seo" />
}
