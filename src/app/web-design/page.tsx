import { ServiceRoute, serviceMetadata } from '@/features/service/ServiceRoute'

export const metadata = serviceMetadata('webDesign')

export default function Page() {
  return <ServiceRoute serviceKey="webDesign" />
}
