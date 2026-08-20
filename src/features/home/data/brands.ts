import { workItem, workSites } from '@/config/routes'

export type PartnerLockup = 'forma' | 'noramble' | 'skew' | 'crystal' | 'releve'

export type PartnerBrand = {
  name: string
  href?: string
  src?: string
  lockup?: PartnerLockup
}

export const partnerBrands: PartnerBrand[] = [
  { name: 'Anovair', href: workItem('anovair'), src: '/brands/anovair.png' },
  { name: 'Aqua', href: workItem('aqua'), src: '/brands/aqua.png' },
  { name: 'Proud Mary Coffee', href: workItem('proud-mary'), src: '/brands/proud-mary.png' },
  { name: 'FORMA Studio', href: workSites.formaStudio, lockup: 'forma' },
  { name: 'Noramble', lockup: 'noramble' },
  { name: 'Skew Studios', lockup: 'skew' },
  { name: 'Crystal Health', lockup: 'crystal' },
  { name: 'Relevé Clothing', lockup: 'releve' },
]
