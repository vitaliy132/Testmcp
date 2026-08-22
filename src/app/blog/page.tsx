import { BlogPage } from '@/views/BlogPage'
import { blogIndexMeta } from '@/lib/seo'

export const metadata = blogIndexMeta

export default function Page() {
  return <BlogPage />
}
