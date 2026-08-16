import { routes } from '@/config/routes'

export const aboutIntro = {
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
    'With over a decade of experience, Northern Digital is an energetic, fresh and vibrant team offering creative talent, industry knowledge and extremely high standards.',
    {
      before:
        "We work with ambitious start-up businesses through to large global organisations such as Blackberry, NHS and L'Occitane so we can tailor our services to suit your needs. Our preferred content management system of choice is ",
      link: { label: 'Craft CMS', href: routes.craftCms },
      after: '.',
    },
  ],
}
