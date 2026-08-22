import { brand } from '@/config/brand'
import { anchors, routes } from '@/config/routes'
import { IMG } from '@/config/assets'
import { aboutHeroImages } from '@/features/about/data/media'

type CareerRole = {
  title: string
  type: 'Full Time' | 'Part Time'
  href: string
}

/** Add a role here when hiring — the page lists whatever is in this array. */
export const openRoles: CareerRole[] = []

export const careersContent = {
  eyebrow: 'Careers',
  headline: `Embrace life at ${brand.name}.`,
  intro:
    'Want to work in a vibrant, friendly, award-winning digital agency in Leeds? We’re a tight-knit studio — and when the right role opens, you’ll see it here first.',
  cta: 'View open positions',
  positionsAnchor: '#open-positions',

  lifeEyebrow: `Life at ${brand.name}`,
  lifeHeading: 'A home away from home, a place where you can be who you want to be',
  lifeParagraphs: [
    'We want everyone here to feel comfortable with the people they work with, the studio they walk into, and the clients we take on. You’re trusted to do the work — and given the space to be creative.',
    `${brand.name} is a small family of talented, honest people. We give straight advice to clients, and honest feedback to each other, so the work keeps getting better.`,
  ],

  rolesEyebrow: 'Open Positions',
  rolesHeading: 'Find your next job',
  emptyTitle: 'Nothing open right now',
  emptyBody:
    'We’re not hiring at the moment. Roles only go live when we have a genuine seat to fill — not to make the jobs board look busy. Check back, or send a speculative note and we’ll keep you in mind.',

  speculativeEyebrow: 'Not for you?',
  speculativeHeading: 'Nothing open for you right now? Stay on the radar...',
  speculativeBody:
    'If you think you’d be a fit — designer, developer, or otherwise — drop us a line with a bit about you and some work. We’ll be in touch when something opens.',
  speculativeCta: 'Send us a note',
  speculativeEmailHref: `mailto:${brand.email}?subject=${encodeURIComponent('Careers — speculative application')}`,
  meetTeamCta: 'Meet the team',
  meetTeamHref: anchors.team,
  andy: {
    name: 'Andy',
    role: 'Co-Founder',
    image: IMG.andy,
  },

  perksEyebrow: 'Benefits',
  perksHeading: 'A snippet of our perks',
  perks: [
    {
      title: '28 days holiday',
      body: 'For some rest and relaxation... and that’s excluding bank holidays.',
    },
    {
      title: 'Equipment',
      body: 'Laptop, subscriptions, desk, chair — if you need it to do the work, we’ve got you.',
    },
    {
      title: 'Studio days',
      body: 'A proper studio just outside Manchester. Nice light, good coffee, and people you actually want to sit with.',
    },
    {
      title: 'Two weeks off at Christmas',
      body: 'We close the studio over Christmas for time with family and friends — on top of the 28 days.',
    },
    {
      title: 'Flexible hours',
      body: 'Need to leave early? Want a day from home? Work to fit your schedule, no drama.',
    },
    {
      title: 'Work you’re proud of',
      body: 'Award-winning brands and websites, with a small team that still gives a damn.',
    },
  ],

  teamEyebrow: 'Our Team',
  teamHeading: ['Meet your future', 'mates (colleagues)'] as const,
  teamCta: 'Meet the whole Team',

  ctaHeadline: 'Like what you see?',
  ctaLabel: 'Get in touch',
  ctaHref: routes.contact,

  gallery: aboutHeroImages,
} as const
