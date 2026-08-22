import { brand } from '@/config/brand'

export type AboutStat =
  | {
      label: string
      description: string
      value: number
      suffix: string
    }
  | {
      label: string
      description: string
      display: string
    }

export const aboutStats: AboutStat[] = [
  {
    label: 'Clients',
    value: 250,
    suffix: '+',
    description:
      `Founded in ${brand.foundedYear}, ${brand.name} is an energetic, fresh and vibrant team offering creative talent and industry knowledge.`,
  },
  {
    label: 'Referrals',
    value: 55,
    suffix: '%',
    description:
      'Over 55% of our projects are referrals from clients already with us. Our clients love to spread the love far and wide.',
  },
  {
    label: 'Male:Female ratio',
    display: '1:1',
    description:
      `In a male-dominated industry, we are proud to say we’re striving for equal gender roles at ${brand.name}.`,
  },
  {
    label: 'Burritos consumed',
    value: 942,
    suffix: '',
    description:
      'We’re not lying. We love a burrito and know a good one when we try it. Our favourite spot is Panchos (not an ad, we wish)',
  },
]
