import { blog, blogPageCopy } from '@/features/blog/data'
import { BlogCard } from '@/features/blog/components/BlogCard'
import { PageHero } from '@/components/ui/PageHero'
import { PageContainer } from '@/components/ui/PageContainer'

export function BlogIndex() {
  return (
    <>
      <PageHero eyebrow={blogPageCopy.eyebrow} title={blogPageCopy.title} intro={blogPageCopy.intro} />
      <section className="pb-20 lg:pb-28">
        <PageContainer>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-14">
            {blog.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </PageContainer>
      </section>
    </>
  )
}
