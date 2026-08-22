import { brand } from '@/config/brand'
import type { FaqItem, FaqSection } from '@/types/faq'

export const faqHero = {
  title: 'Frequently Asked Questions',
  subtitle: 'The answers to your questions.',
  headline: ['The answers to', 'your questions.'] as const,
}

export const faqSections: FaqSection[] = [
  {
    title: 'General',
    items: [
      {
        id: 'timeline',
        question: 'How long does a website project usually take to complete?',
        answer: "Timelines depend on the spec of the website project, but here's some guidelines...",
        bullets: [
          { strong: 'Shopify', text: ' projects usually take around 4 weeks.' },
          { strong: 'Craft CMS', text: ' projects usually take a minimum of 5 weeks.' },
          { strong: 'Craft Commerce', text: ' projects usually take a minimum of 8 weeks.' },
          { strong: 'Branding', text: ' projects usually take around 4 weeks.' },
        ],
      },
      {
        id: 'cost',
        question: 'How much does a website cost?',
        answer:
          "Unfortunately, we don't have set project prices. Every brief we work on has different requirements which alters the spec of the job. So, once we've received the brief - we can give you an indication of the cost and timescale.",
      },
      {
        id: 'content-edit',
        question: 'How easy is it for me to change content myself?',
        answer:
          "VERY EASY! We build every site with the client in mind, and that's to improve the ability for you to add new content, edit content, remove content very easily and very quickly. Adding content to your website should not be stressful. We also give you the ability to create new pages yourself. We don't charge per page, we charge for the spec of the project, and base it off what your business needs and will benefit from. Thereafter, you can create unlimited pages.",
      },
      {
        id: 'ppc-landing',
        question: 'Can I create PPC landing pages myself?',
        answer:
          'Yeh sure. If you have Google Ads as a strategy, or thinking of doing it in the future - this will be included in the brief and we will design a PPC specific landing page during the design phase. Once the website is live, you will then be able to add as many landing pages as you like, editing the URLs and page structure also if needed.',
      },
      {
        id: 'limited-budget',
        question: 'We have a limited budget, will you still work with us?',
        answer:
          'We work with a range of clients - from start up brands through to large global organisations such as the NHS and Blackberry. Our mindset is that we want to work with clients of the same vision. If you want to improve your brand online, and understand the way we work - and the discussions are of mutual understanding - then we want to work with you. In terms of budget, the easiest way to find out if a project is possible... is to let us know what your budget is. That way, if we know the budget, we can advise the best way of spending your money.',
      },
      {
        id: 'outsource',
        question: 'Do you outsource any work?',
        answer: 'The only aspects we outsource (but offer full project management to the client on) are:',
        bullets: [
          { text: 'Photography' },
          { text: 'Videography' },
          { text: 'Social Media Campaigns' },
        ],
      },
    ],
  },
  {
    title: `Working with ${brand.name}`,
    items: [
      {
        id: 'meetings',
        question: 'How many meetings can we have?',
        answer:
          "As many as you want. But we guide you through this process and ask for your feedback at certain stages. We have vast experience in delivering Brand + Website projects, so we will go through multiple stages in hierarchy so that you never get to a stage where you don't feel comfortable with the progress.",
      },
      {
        id: 'project-manager',
        question: 'Do we have a dedicated project manager?',
        answer: 'Yes, and all our staff are nice people, so it will be an enjoyable project to work on.',
      },
      {
        id: 'payment-terms',
        question: 'What are your payment terms?',
        answer:
          'We usually do 50% up front, 25% on design sign off, and 25% on build. But these terms can be discussed if need be. We are flexible, we just want to work with the right partner.',
      },
      {
        id: 'location',
        question: "We're not based in Leeds, does that matter?",
        answer:
          'We work with clients all over the UK..... all over the world in fact. So location does not matter, we will guide you through the process and communicate clearly at certain stages via Email, and sometimes Zoom. If available, we are happy to have F2F meetings.',
      },
    ],
  },
  {
    title: 'Other Questions',
    items: [
      {
        id: 'services',
        question: 'What services do you offer?',
        answer:
          `We offer a full Branding service in-house here at ${brand.name}. We win awards for our websites, and in particular specialise in building websites in Craft CMS and Shopify. We also offer SEO, Hosting and Support to look after your site once live.`,
      },
      {
        id: 'where-based',
        question: 'Where are you based?',
        answer: 'Our studio is based in Leeds, but we have clients all over the world.',
      },
      {
        id: 'phone-call',
        question: 'Can we arrange a phone call to discuss?',
        answer:
          "Yes of course — we can schedule a traditional phone call or Zoom meeting that's convenient for both parties. It's quicker to email us and organise a time for a discussion, rather than just ringing the studio number.",
      },
    ],
  },
]

export function faqsByIds(ids: readonly string[]): FaqItem[] {
  const byId = new Map<string, FaqItem>()
  for (const section of faqSections) {
    for (const item of section.items) {
      if (item.id) byId.set(item.id, item)
    }
  }

  return ids.map((id) => {
    const item = byId.get(id)
    if (!item) {
      throw new Error(`Unknown FAQ id: ${id}`)
    }
    return item
  })
}
