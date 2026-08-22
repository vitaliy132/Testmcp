import { brand } from '@/config/brand'
import {
  CareersCta,
  CareersGallery,
  CareersHero,
  CareersLife,
  CareersPerks,
  CareersRoles,
  CareersSpeculative,
} from '@/features/careers'
import { usePageTitle } from '@/hooks/usePageTitle'

export function CareersPage() {
  usePageTitle(`Careers | ${brand.name}`)

  return (
    <>
      <CareersHero />
      <CareersGallery />
      <CareersLife />
      <CareersRoles />
      <CareersPerks />
      <CareersSpeculative />
      <CareersCta />
    </>
  )
}
