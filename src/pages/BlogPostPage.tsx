import { Navigate, useParams } from 'react-router-dom'
import { brand } from '@/config/brand'
import { routes } from '@/config/routes'
import { BlogArticle, getBlogPost } from '@/features/blog'
import { PageFallback } from '@/components/ui/PageFallback'
import { usePageTitle } from '@/hooks/usePageTitle'

export function BlogPostPage() {
  const { slug } = useParams()
  const post = getBlogPost(slug)

  usePageTitle(post ? `${post.title} | ${brand.name}` : undefined)

  if (!slug) {
    return <PageFallback />
  }

  if (!post) {
    return <Navigate to={routes.blog} replace />
  }

  return <BlogArticle post={post} />
}
