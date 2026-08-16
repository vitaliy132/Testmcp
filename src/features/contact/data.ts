import { routes } from '@/config/links'

export type ContactFaq = {
  question: string
  answer: string
  bullets?: { strong?: string; text: string }[]
}

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

export const contactFaqs: ContactFaq[] = [
  {
    question: 'How long does a website project usually take to complete?',
    answer: 'Timelines depend on the spec of the website project, but here are some guidelines...',
    bullets: [
      { strong: 'Shopify', text: ' projects usually take around four weeks.' },
      { strong: 'Craft CMS', text: ' projects usually take a minimum of five weeks.' },
      { strong: 'Craft Commerce', text: ' projects usually take a minimum of eight weeks.' },
      { strong: 'Branding', text: ' projects usually take around four weeks.' },
    ],
  },
  {
    question: 'How much does a website cost?',
    answer:
      "Unfortunately, we don't have set project prices. Every brief we work on has different requirements which alters the spec of the job. So, once we've received the brief, we can give you an indication of the cost and timescale.",
  },
  {
    question: 'We have a limited budget, will you still work with us?',
    answer:
      'We work with a range of clients, from start-up brands to large global organisations such as the NHS and Blackberry. Our mindset is that we want to work with clients of the same vision. If you want to improve your brand online and understand the way we work (and the discussions are of mutual understanding) then we want to work with you. In terms of budget, the easiest way to find out if a project is possible is to let us know what your budget is.',
  },
  {
    question: 'Do you outsource any work?',
    answer: 'The only aspects we outsource (but offer full project management to the client on) are:',
    bullets: [{ text: 'Photography' }, { text: 'Videography' }, { text: 'Social Media Campaigns' }],
  },
  {
    question: 'What services do you offer?',
    answer:
      'We offer a full branding service in-house here at Northern Digital. We win awards for our websites, and in particular specialise in building websites in Craft CMS and Shopify. We also offer SEO, hosting, and support to look after your site once live.',
  },
  {
    question: "We're not based nearby — does that matter?",
    answer:
      'We work with clients all over the UK... all over the world in fact. So location does not matter. We will guide you through the process and communicate clearly at certain stages via email and sometimes Zoom. If available, we are happy to have face-to-face meetings.',
  },
  {
    question: 'What are your payment terms?',
    answer:
      'We usually do 50% upfront, 25% on design sign-off, and 25% on build. But these terms can be discussed if need be. We are flexible. We just want to work with the right partner.',
  },
  {
    question: 'How many meetings can we have?',
    answer:
      'As many as you want. But we guide you through this process and ask for your feedback at certain stages. We have vast experience in delivering brand + website projects. We will go through multiple stages in a hierarchy so that you never get to a stage where you don’t feel comfortable with the progress.',
  },
  {
    question: 'Can we arrange a phone call to discuss?',
    answer:
      "Yes of course — we can schedule a traditional phone call or Zoom meeting that's convenient for both parties. It's quicker to email us and organise a time for a discussion, rather than just ringing the studio number.",
  },
]

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
