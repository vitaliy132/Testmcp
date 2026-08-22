import type { MetadataRoute } from 'next'
import { canonicalUrl, sitemapPaths } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPaths().map((path) => ({
    url: canonicalUrl(path),
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
