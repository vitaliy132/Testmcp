import type { Metadata } from 'next'
import { brand } from '@/config/brand'
import { socialLinks } from '@/config/external'
import { routes } from '@/config/routes'
import { blog, blogPageCopy } from '@/features/blog/data'
import { faqSections } from '@/features/faqs/data'
import { serviceList } from '@/features/service/data/registry'
import { work } from '@/features/work/data'
import { isWorkCaseStudyItem } from '@/features/work/types'
import type { BlogPost } from '@/features/blog/data/types'
import type { FaqItem } from '@/types/faq'

export const SITE_URL = `https://${brand.url}`

export function canonicalUrl(path: string): string {
  if (path === '/') return SITE_URL
  return `${SITE_URL}${path}`
}

export function pageMeta({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string
  description: string
  path: string
  absoluteTitle?: boolean
}): Metadata {
  const url = canonicalUrl(path)
  const fullTitle =
    absoluteTitle || title.includes(brand.name) ? title : `${title} | ${brand.name}`

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: brand.name,
      type: 'website',
      locale: 'en_GB',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
  }
}

export function faqPlainAnswer(item: FaqItem): string {
  const extra = item.bullets?.map((bullet) => `${bullet.strong ?? ''}${bullet.text}`).join(' ')
  return extra ? `${item.answer} ${extra}` : item.answer
}

export function allFaqItems(): FaqItem[] {
  return faqSections.flatMap((section) => section.items)
}

export function faqPageJsonLd(items: readonly FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faqPlainAnswer(item),
      },
    })),
  }
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: brand.name,
    legalName: brand.legalName,
    url: SITE_URL,
    email: brand.email,
    telephone: '+447732510318',
    description: brand.description,
    image: `${SITE_URL}/logo.svg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: brand.address.lines[1],
      addressLocality: brand.address.lines[2],
      postalCode: brand.address.lines[3],
      addressCountry: 'GB',
    },
    sameAs: socialLinks.map((link) => link.href),
  }
}

export function articleJsonLd(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.cover}`,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      '@type': 'Organization',
      name: brand.name,
      url: SITE_URL,
    },
    mainEntityOfPage: canonicalUrl(routes.blogPattern.replace(':slug', post.slug)),
  }
}

export const homeMeta = pageMeta({
  title: brand.title,
  description: brand.description,
  path: routes.home,
  absoluteTitle: true,
})

export const aboutMeta = pageMeta({
  title: 'About',
  description:
    'Expert web designers and web developers trained in the digital industry who offer a bespoke, professional and trustworthy service.',
  path: routes.about,
})

export const contactMeta = pageMeta({
  title: 'Contact',
  description:
    'For general enquiries, fill out the form to get in touch with our Leeds studio — or use the project planner for a step-by-step brief.',
  path: routes.contact,
})

export const careersMeta = pageMeta({
  title: 'Careers',
  description:
    'Want to work in a vibrant, friendly, award-winning digital agency in Leeds? See open roles, or send a speculative note.',
  path: routes.careers,
})

export const privacyMeta = pageMeta({
  title: 'Privacy Policy',
  description: 'Because your privacy is important to us.',
  path: routes.privacy,
})

export const plannerMeta = pageMeta({
  title: 'Project Planner',
  description:
    'Tell us about your budget, timeline, and services so we can start your web design, branding, Shopify, or SEO project on the right brief.',
  path: routes.planner,
})

export const faqsMeta = pageMeta({
  title: 'Frequently Asked Questions',
  description: 'The answers to your questions about timelines, cost, Craft CMS, Shopify, and working with our Leeds studio.',
  path: routes.faqs,
})

export const blogIndexMeta = pageMeta({
  title: 'The Blog',
  description: blogPageCopy.intro,
  path: routes.blog,
})

export function sitemapPaths(): string[] {
  const staticPaths = [
    routes.home,
    routes.about,
    routes.contact,
    routes.careers,
    routes.privacy,
    routes.planner,
    routes.faqs,
    routes.blog,
  ]
  const services = serviceList.map((service) => service.path)
  const posts = blog.map((post) => `/blog/${post.slug}`)
  const cases = work.filter(isWorkCaseStudyItem).map((project) => `/work/${project.id}`)
  return [...staticPaths, ...services, ...posts, ...cases]
}
