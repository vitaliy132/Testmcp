import { BlogPage } from '@/views/BlogPage'
import { JsonLd } from '@/components/seo/JsonLd'
import { blogIndexMeta, breadcrumbJsonLd } from '@/lib/seo'
import { routes } from '@/config/routes'

export const metadata = blogIndexMeta

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: routes.home },
          { name: 'Blog', path: routes.blog },
        ])}
      />
      <BlogPage />
    </>
  )
}
