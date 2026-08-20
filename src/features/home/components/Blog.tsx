import { motion } from 'framer-motion'
import { blog } from '@/features/home/data/blog'
import { blogCopy } from '@/features/home/data/copy'
import { PageContainer } from '@/components/ui/PageContainer'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { CornerFillet } from '@/components/ui/CornerFillet'
import { useSnapScroller } from '@/components/ui/useSnapScroller'

function AuthorCutout({ src, name }: { src: string; name: string }) {
  return (
    <div className="absolute bottom-0 left-0 z-20 rounded-tr-2xl bg-white pb-0 pr-2 pt-2 dark:bg-[#121212] lg:rounded-tr-3xl lg:pr-3 lg:pt-3">
      <CornerFillet className="absolute top-0 left-px h-5 w-5 -translate-y-full text-white dark:text-[#121212] lg:h-6 lg:w-6" />
      <CornerFillet className="absolute right-0 bottom-px h-5 w-5 translate-x-full text-white dark:text-[#121212] lg:h-6 lg:w-6" />
      <img
        src={src}
        alt={name}
        width={48}
        height={48}
        loading="lazy"
        decoding="async"
        className="h-10 w-10 rounded-full object-cover lg:h-12 lg:w-12"
      />
    </div>
  )
}

export function Blog() {
  const { ref, atStart, atEnd, scrollBy } = useSnapScroller((el) => {
    const slide = el.querySelector<HTMLElement>('.blog-slide')
    return slide?.offsetWidth ?? el.clientWidth * 0.8
  })

  return (
    <section id="blog" className="py-16 lg:py-24">
      <PageContainer>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-12">
          <div>
            <SectionEyebrow className="mb-3 inline-flex items-center gap-2">{blogCopy.eyebrow}</SectionEyebrow>
            <h2 className="max-w-md text-[clamp(1.8rem,3.5vw,3.4rem)] leading-[1.05] tracking-tight">
              {blogCopy.heading}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <a href="#blog" className="btn-soft">
              {blogCopy.cta}
            </a>
            <button
              type="button"
              aria-label="Previous posts"
              disabled={atStart}
              onClick={() => scrollBy(-1)}
              className="hidden h-10 w-10 items-center justify-center rounded-full bg-nd-soft text-nd-ink transition enabled:hover:bg-nd-lime disabled:opacity-30 sm:inline-flex dark:bg-[#2a2a2a] dark:text-white"
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
              className="hidden h-10 w-10 items-center justify-center rounded-full bg-nd-soft text-nd-ink transition enabled:hover:bg-nd-lime disabled:opacity-30 sm:inline-flex dark:bg-[#2a2a2a] dark:text-white"
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
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="blog-slide w-[85%] shrink-0 snap-start px-2 sm:w-[55%] lg:w-[42%] xl:w-[38%] xl:px-3"
          >
            <div className="group flex flex-col items-start">
              <div className="relative mb-5 w-full">
                <div className="aspect-[16/9] overflow-hidden rounded-2xl rounded-bl-xl bg-nd-soft lg:rounded-3xl lg:rounded-bl-2xl dark:bg-[#1a1a1a]">
                  <img
                    src={post.cover}
                    alt={post.title}
                    width={800}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <AuthorCutout src={post.authorImage} name={post.author} />
              </div>
              <div className="text-xs font-medium text-nd-muted dark:text-white/50">{post.readTime}</div>
              <h3 className="mt-1 text-lg font-medium tracking-tight lg:text-xl">{post.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-nd-muted dark:text-white/55">{post.excerpt}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
