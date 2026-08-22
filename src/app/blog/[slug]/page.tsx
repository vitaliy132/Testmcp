import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { blog, getBlogPost } from '@/features/blog'
import { BlogPostPage } from '@/views/BlogPostPage'
import { JsonLd } from '@/components/seo/JsonLd'
import { articleJsonLd, pageMeta } from '@/lib/seo'
import { blogPost } from '@/config/routes'

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
  })
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  return (
    <>
      <JsonLd data={articleJsonLd(post)} />
      <BlogPostPage post={post} />
    </>
  )
}
