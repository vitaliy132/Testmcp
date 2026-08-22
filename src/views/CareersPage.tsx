import {
  CareersCta,
  CareersGallery,
  CareersHero,
  CareersLife,
  CareersPerks,
  CareersRoles,
  CareersSpeculative,
} from '@/features/careers'

export function CareersPage() {
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
