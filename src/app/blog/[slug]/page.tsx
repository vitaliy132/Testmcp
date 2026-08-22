import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blog, getBlogPost } from '@/features/blog'
import { BlogPostPage } from '@/views/BlogPostPage'
import { JsonLd } from '@/components/seo/JsonLd'
import { articleJsonLd, breadcrumbJsonLd, pageMeta } from '@/lib/seo'
import { blogPost, routes } from '@/config/routes'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return blog.map((post) => ({ slug: post.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return pageMeta({
    title: post.title,
    description: post.excerpt,
    path: blogPost(slug),
    image: post.cover,
    ogType: 'article',
    publishedTime: post.publishedAt,
  })
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: routes.home },
          { name: 'Blog', path: routes.blog },
          { name: post.title, path: blogPost(slug) },
        ])}
      />
      <JsonLd data={articleJsonLd(post)} />
      <BlogPostPage post={post} />
    </>
  )
}
