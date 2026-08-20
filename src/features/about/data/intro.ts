import { brand } from '@/config/brand'
import { routes } from '@/config/routes'

type IntroLink = {
  label: string
  href: string
}

export type AboutIntroParagraph =
  | string
  | {
      before: string
      link: IntroLink
      after: string
    }

export type AboutIntro = {
  eyebrow: string
  heading: string
  lead: {
    before: string
    branding: IntroLink
    mid: string
    webDesign: IntroLink
    mid2: string
    ecommerce: IntroLink
    mid3: string
    seo: IntroLink
    after: string
  }
  paragraphs: AboutIntroParagraph[]
}

export const aboutIntro: AboutIntro = {
  eyebrow: 'About us',
  heading:
    'Expert web designers and web developers trained in the digital industry who offer a bespoke, professional and trustworthy service.',
  lead: {
    before: 'We are an Award-Winning ',
    branding: { label: 'Branding', href: routes.branding },
    mid: ' and Web Design Agency based in Leeds, UK specialising in ',
    webDesign: { label: 'Web Design', href: routes.webDesign },
    mid2: ', Web Development, ',
    ecommerce: { label: 'eCommerce', href: routes.ecommerce },
    mid3: ' and ',
    seo: {
      label: 'Organic SEO',
      href: routes.seo,
    },
    after: '.',
  },
  paragraphs: [
    `Founded in ${brand.foundedYear}, Northern Digital is an energetic, fresh and vibrant team offering creative talent, industry knowledge and extremely high standards.`,
    {
      before:
        "We work with ambitious start-up businesses through to large global organisations such as Blackberry, NHS and L'Occitane so we can tailor our services to suit your needs. Our preferred content management system of choice is ",
      link: { label: 'Craft CMS', href: routes.craftCms },
      after: '.',
    },
  ],
}
