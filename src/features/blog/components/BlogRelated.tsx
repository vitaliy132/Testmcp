import { blogPageCopy } from '@/features/blog/copy'
import { getRelatedPosts } from '@/features/blog/posts'
import { BlogCard } from '@/features/blog/components/BlogCard'
import { routes } from '@/config/routes'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { SmartLink } from '@/components/ui/SmartLink'

export function BlogRelated({ slug }: { slug: string }) {
  const related = getRelatedPosts(slug)

  return (
    <section className="border-t border-black/5 py-16 lg:py-24 dark:border-white/10">
      <PageContainer>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 lg:mb-14">
          <div className="flex flex-col items-start gap-3">
            <SectionEyebrow>{blogPageCopy.relatedEyebrow}</SectionEyebrow>
            <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] leading-none tracking-tight">
              {blogPageCopy.relatedHeading}
            </h2>
          </div>
          <SmartLink
            href={routes.blog}
            className="text-sm font-medium underline-offset-4 transition hover:underline"
          >
            {blogPageCopy.relatedCta}
          </SmartLink>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {related.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </PageContainer>
    </section>
  )
}
