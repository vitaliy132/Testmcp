import { workItem, workSites } from '@/config/routes'

export type PartnerLockup = 'noramble' | 'skew' | 'crystal' | 'releve'

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
  {
    name: 'Emna Studio',
    href: workSites.emnaStudio,
    src: 'https://static.wixstatic.com/media/a22769_0bd5e08d46ce43708400e7b6e1e8c6ce~mv2.png/v1/fill/w_200,h_200,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a22769_0bd5e08d46ce43708400e7b6e1e8c6ce~mv2.png',
  },
  { name: 'Noramble', lockup: 'noramble' },
  { name: 'Skew Studios', lockup: 'skew' },
  { name: 'Crystal Health', lockup: 'crystal' },
  { name: 'Relevé Clothing', lockup: 'releve' },
]
