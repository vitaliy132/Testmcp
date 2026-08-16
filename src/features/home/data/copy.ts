import { IMG } from '@/data/assets'
import { anchors } from '@/config/routes'

export const heroCopy = {
  eyebrow: 'Hiya, we’re Northern Digital',
  headline: ['A web design and', 'branding agency', 'in Leeds'] as const,
  workCta: 'View our work',
  teamCta: 'Meet the team →',
  andy: {
    title: 'Hear from Andy',
    subtitle: 'Co-Founder of Northern Digital',
    image: IMG.andy,
  },
}

export const aboutTeaser = {
  eyebrow: 'Who are we?',
}

export const workCopy = {
  eyebrow: 'Our Work',
  heading: 'Take a look at our projects',
  ctaHeading: ['Like what', 'you see?'] as const,
  ctaLabel: 'Contact us',
}

export const servicesCopy = {
  eyebrow: 'Our Expertise',
  heading: 'How we take your business to the next level',
  body: 'We are a digital marketing agency with expertise, and we’re on a mission to help you take the next step in your business.',
  cta: 'See all services',
  andy: {
    title: 'Hear from Andy',
    subtitle: 'Co-founder of Northern Digital',
    href: anchors.about,
  },
}

export const blogCopy = {
  eyebrow: 'From the studio',
  heading: 'The latest from our design studio',
  cta: 'Visit our blog',
}

export const aiCopy = {
  eyebrow: 'Don’t believe the hype?',
  heading: ['See what AI has', 'to say about us'] as const,
}

export const heroReelChips = [
  { label: 'Web', x: '58%', y: '28%', delay: 0 },
  { label: 'Brand', x: '74%', y: '42%', delay: 0.4 },
  { label: 'SEO', x: '52%', y: '68%', delay: 0.8 },
  { label: 'Craft', x: '78%', y: '72%', delay: 1.2 },
] as const
