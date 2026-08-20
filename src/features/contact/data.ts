import { routes } from '@/config/routes'
import { faqsByIds } from '@/features/faqs/data'
import type { FaqItem } from '@/types/faq'

export type ContactFormData = {
  name: string
  email: string
  phone: string
  hearAbout: string
  message: string
  newsletter: boolean
}

export const initialContactForm: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  hearAbout: '',
  message: '',
  newsletter: false,
}

export const hearAboutOptions = [
  'Google',
  'Friend or family',
  'Instagram',
  'Linkedin',
  'Word of mouth',
  'Newsletter',
] as const

export const contactContent = {
  eyebrow: 'Contact',
  headline: "It's nice to meet ya",
  intro:
    'For general enquiries, please fill out the form to get in touch. Alternatively, if you know your project details — head over to our project planner for a more refined step-by-step process.',
  plannerCta: 'Go to Project Planner',
  hateFormsLabel: 'Hate contact forms?',
  newsletterText: 'Subscribe to our newsletter for all the latest Northern Digital goss!',
  privacyNote: 'By submitting this form I accept the Privacy Policy of this site.',
  submitLabel: 'Send Message',
  studioTitle: 'Our Studio',
  studioDescription:
    'Just a short drive from the city centre, our Studio is in a very convenient location, near two train stations, a motorway, and the east Lancashire road.',
  studioImage:
    'https://made-byshape.transforms.svdcdn.com/production/uploads/images/India-2022/Empty-Studio/Shape-April-2022-HR-18.jpg?w=800&h=450&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1651142707&s=b522e5aa7def9ed40e6b896d1ad3210d',
  directionsHref: 'https://maps.app.goo.gl/2rmk5J3Fh5z1YLFPA',
  faqsEyebrow: 'Anything else?',
  faqsTitle: 'The answers to your questions.',
  viewAllFaqs: 'View all FAQs',
  viewAllFaqsHref: routes.faqs,
} as const

export const contactFaqs: FaqItem[] = faqsByIds([
  'timeline',
  'cost',
  'limited-budget',
  'outsource',
  'services',
  'location',
  'payment-terms',
  'meetings',
  'phone-call',
])

export function buildContactMessage(data: ContactFormData): string {
  return [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.hearAbout ? `Heard about us via: ${data.hearAbout}` : null,
    `Message:\n${data.message}`,
    `Newsletter: ${data.newsletter ? 'Yes' : 'No'}`,
  ]
    .filter(Boolean)
    .join('\n')
}

export function buildContactSubject(data: ContactFormData): string {
  return `Contact enquiry — ${data.name}`
}
