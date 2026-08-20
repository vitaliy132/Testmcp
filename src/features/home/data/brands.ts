import { workItem, workSites } from '@/config/routes'

export type Brand = {
  id: string
  name: string
  href?: string
}

export const brands: Brand[] = [
  { id: 'anovair', name: 'Anovair', href: workItem('anovair') },
  { id: 'aqua', name: 'Aqua', href: workItem('aqua') },
  { id: 'proud-mary', name: 'Proud Mary', href: workItem('proud-mary') },
  { id: 'forma', name: 'Forma', href: workSites.formaStudio },
  { id: 'noramble', name: 'Noramble' },
  { id: 'skew', name: 'Skew' },
  { id: 'tlw', name: 'Three Little Words' },
  { id: 'rise', name: 'Rise at Seven' },
]
