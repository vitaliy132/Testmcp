import { ServiceRoute, serviceMetadata } from '@/features/service/ServiceRoute'

export const metadata = serviceMetadata('craftCms')

export default function Page() {
  return <ServiceRoute serviceKey="craftCms" />
}
