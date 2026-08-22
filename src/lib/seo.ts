import type { Metadata, MetadataRoute } from 'next'
import { brand } from '@/config/brand'
import { blogPost, routes, workItem } from '@/config/routes'
import { blog, blogPageCopy } from '@/features/blog/data'
import { faqSections } from '@/features/faqs/data'
import { serviceList } from '@/features/service/data/registry'
import type { ServicePageContent } from '@/features/service/data/pages'
import { work } from '@/features/work/data'
import { isWorkCaseStudyItem, type WorkCaseStudyItem } from '@/features/work/types'
import type { BlogPost } from '@/features/blog/data/types'
import type { FaqItem } from '@/types/faq'

export const SITE_URL = `https://${brand.url}`
export const OG_IMAGE_PATH = '/opengraph-image'
export const BUSINESS_ID = `${SITE_URL}/#business`

export function canonicalUrl(path: string): string {
  if (path === '/') return SITE_URL
  return `${SITE_URL}${path}`
}

export function pageMeta({
  title,
  description,
  path,
  absoluteTitle = false,
  image,
  ogType = 'website',
  publishedTime,
}: {
  title: string
  description: string
  path: string
  absoluteTitle?: boolean
  image?: string
  ogType?: 'website' | 'article'
  publishedTime?: string
}): Metadata {
  const url = canonicalUrl(path)
  const fullTitle =
    absoluteTitle || title.includes(brand.name) ? title : `${title} | ${brand.name}`
  const images = [{ url: image ?? OG_IMAGE_PATH }]

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: brand.name,
      type: ogType,
      locale: 'en_GB',
      images,
      ...(ogType === 'article' && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image ?? OG_IMAGE_PATH],
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

export function breadcrumbJsonLd(items: readonly { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: canonicalUrl(item.path),
    })),
  }
}

export function localBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': BUSINESS_ID,
    name: brand.name,
    legalName: brand.legalName,
    url: SITE_URL,
    email: brand.email,
    telephone: '+447732510318',
    description: brand.description,
    image: `${SITE_URL}${OG_IMAGE_PATH}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: brand.address.lines[1],
      addressLocality: brand.address.lines[2],
      postalCode: brand.address.lines[3],
      addressCountry: 'GB',
    },
    areaServed: {
      '@type': 'City',
      name: 'Leeds',
      containedInPlace: {
        '@type': 'Country',
        name: 'GB',
      },
    },
  }
}

export function articleJsonLd(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.cover}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      '@type': 'Organization',
      name: brand.name,
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.svg`,
      },
    },
    mainEntityOfPage: canonicalUrl(blogPost(post.slug)),
  }
}

export function serviceJsonLd(service: ServicePageContent) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.eyebrow,
    description: service.intro,
    url: canonicalUrl(service.path),
    provider: { '@id': BUSINESS_ID },
    areaServed: {
      '@type': 'City',
      name: 'Leeds',
      containedInPlace: {
        '@type': 'Country',
        name: 'GB',
      },
    },
  }
}

export function workJsonLd(project: WorkCaseStudyItem) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.caseStudy.headline,
    description: project.caseStudy.dek,
    image: `${SITE_URL}${project.image}`,
    url: canonicalUrl(workItem(project.id)),
    about: {
      '@type': 'Organization',
      name: project.client,
    },
    creator: { '@id': BUSINESS_ID },
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
  const posts = blog.map((post) => blogPost(post.slug))
  const cases = work.filter(isWorkCaseStudyItem).map((project) => workItem(project.id))
  return [...staticPaths, ...services, ...posts, ...cases]
}

export function sitemapEntries(): MetadataRoute.Sitemap {
  const servicePaths = new Set(serviceList.map((service) => service.path))
  return sitemapPaths().map((path) => ({
    url: canonicalUrl(path),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority:
      path === '/'
        ? 1
        : path === routes.privacy
          ? 0.3
          : servicePaths.has(path)
            ? 0.8
            : 0.7,
  }))
}
