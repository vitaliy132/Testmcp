import { ServiceRoute, serviceMetadata } from '@/features/service/ServiceRoute'

export const metadata = serviceMetadata('shopify')

export default function Page() {
  return <ServiceRoute serviceKey="shopify" />
}
