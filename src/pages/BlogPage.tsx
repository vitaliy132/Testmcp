import { brand } from '@/config/brand'
import { BlogIndex } from '@/features/blog'
import { usePageTitle } from '@/hooks/usePageTitle'

export function BlogPage() {
  usePageTitle(`The Blog | ${brand.name}`)

  return <BlogIndex />
}
