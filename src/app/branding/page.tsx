import { ServiceRoute, serviceMetadata } from '@/features/service/ServiceRoute'

export const metadata = serviceMetadata('branding')

export default function Page() {
  return <ServiceRoute serviceKey="branding" />
}
