import { BlogArticle } from '@/features/blog'
import type { BlogPost } from '@/features/blog/data/types'

export function BlogPostPage({ post }: { post: BlogPost }) {
  return <BlogArticle post={post} />
}
