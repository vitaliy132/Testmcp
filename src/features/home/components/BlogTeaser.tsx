import { motion } from 'framer-motion'
import { blog, BlogCard } from '@/features/blog'
import { blogCopy } from '@/features/home/data/copy'
import { anchors, routes } from '@/config/routes'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { SmartLink } from '@/components/ui/SmartLink'
import { useSnapScroller } from '@/hooks/useSnapScroller'

export function BlogTeaser() {
  const { ref, atStart, atEnd, scrollBy } = useSnapScroller((el) => {
    const slide = el.querySelector<HTMLElement>('.blog-slide')
    return slide?.offsetWidth ?? el.clientWidth * 0.8
  })

  return (
    <section id={anchors.blog.slice(1)} className="scroll-mt-28 py-16 lg:py-24">
      <PageContainer>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-12">
          <div>
            <SectionEyebrow className="mb-3 inline-flex items-center gap-2">{blogCopy.eyebrow}</SectionEyebrow>
            <h2 className="max-w-md text-[clamp(1.8rem,3.5vw,3.4rem)] leading-[1.05] tracking-tight">
              {blogCopy.heading}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <SmartLink href={routes.blog} className="btn-soft">
              {blogCopy.cta}
            </SmartLink>
            <button
              type="button"
              aria-label="Previous posts"
              disabled={atStart}
              onClick={() => scrollBy(-1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-nd-soft text-nd-ink transition enabled:hover:bg-nd-lime disabled:opacity-30 dark:bg-[#2a2a2a] dark:text-white"
            >
              <svg className="h-3 w-3 fill-current" viewBox="0 0 448 512" aria-hidden>
                <path d="M25.4 278.6L2.7 256l22.6-22.6 144-144L192 66.7l45.2 45.3-22.6 22.6-89.4 89.4H448v64H125.3l89.4 89.4 22.5 22.6-45.2 45.3-22.6-22.6-144-144z" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next posts"
              disabled={atEnd}
              onClick={() => scrollBy(1)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-nd-soft text-nd-ink transition enabled:hover:bg-nd-lime disabled:opacity-30 dark:bg-[#2a2a2a] dark:text-white"
            >
              <svg className="h-3 w-3 fill-current" viewBox="0 0 448 512" aria-hidden>
                <path d="M422.6 278.6l22.7-22.6-22.6-22.6-144-144L256 66.7 210.8 112l22.6 22.6 89.4 89.4H0v64h322.7l-89.4 89.4-22.5 22.6 45.2 45.3 22.6-22.6 144-144z" />
              </svg>
            </button>
          </div>
        </div>
      </PageContainer>

      <div
        ref={ref}
        className="flex snap-x snap-mandatory overflow-x-auto px-4 pb-2 scrollbar-none sm:px-5 lg:px-8"
      >
        {blog.map((post, i) => (
          <motion.article
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="blog-slide w-[85%] shrink-0 snap-start px-2 sm:w-[55%] lg:w-[42%] xl:w-[38%] xl:px-3"
          >
            <BlogCard post={post} />
          </motion.article>
        ))}
      </div>
    </section>
  )
}
