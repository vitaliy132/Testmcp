import { BlogAuthor } from '@/features/blog/components/BlogAuthor'
import { BlogRelated } from '@/features/blog/components/BlogRelated'
import { getPostHeadings } from '@/features/blog/posts'
import type { BlogBlock, BlogPost } from '@/features/blog/types'
import { PageContainer } from '@/components/ui/PageContainer'
import { Reveal } from '@/components/ui/Reveal'

function BlogBodyBlock({ block }: { block: BlogBlock }) {
  if (block.type === 'h2') {
    return (
      <h2
        id={block.id}
        className="scroll-mt-28 pt-6 text-2xl font-medium tracking-tight lg:pt-10 lg:text-3xl"
      >
        {block.text}
      </h2>
    )
  }

  if (block.type === 'p') {
    return (
      <p className="text-base font-light leading-7 text-pretty text-nd-muted lg:text-lg dark:text-white/65">
        {block.text}
      </p>
    )
  }

  if (block.type === 'ul') {
    return (
      <ul className="list-disc space-y-2 pl-5 text-base font-light leading-7 text-pretty text-nd-muted lg:text-lg dark:text-white/65">
        {block.items.map((item) => (
          <li key={item.slice(0, 48)}>{item}</li>
        ))}
      </ul>
    )
  }

  return (
    <figure className="py-4 lg:py-6">
      <div className="overflow-hidden rounded-2xl bg-nd-soft lg:rounded-3xl dark:bg-[#1a1a1a]">
        <img
          src={block.src}
          alt={block.alt}
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
    </figure>
  )
}

export function BlogArticle({ post }: { post: BlogPost }) {
  const headings = getPostHeadings(post)
  const showToc = headings.length >= 3

  return (
    <>
      <article className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
        <PageContainer>
          <div className="mx-auto max-w-[820px]">
            <Reveal>
              <div className="text-sm font-medium text-nd-muted dark:text-white/50">{post.readTime}</div>
            </Reveal>
            <Reveal as="h1" delay={0.06} y={20} duration={0.55} className="mt-3 text-[clamp(2rem,5vw,3.75rem)] font-medium leading-none tracking-tight text-balance">
              {post.title}
            </Reveal>
            <Reveal delay={0.1} className="mt-8">
              <BlogAuthor post={post} />
            </Reveal>
          </div>

          <Reveal delay={0.14} y={24} duration={0.55} className="mt-10 lg:mt-14">
            <div className="overflow-hidden rounded-2xl bg-nd-soft lg:rounded-3xl dark:bg-[#1a1a1a]">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={post.cover}
                  alt={post.coverAlt}
                  width={1400}
                  height={788}
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className={`mt-12 lg:mt-16 ${showToc ? 'lg:grid lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:items-start lg:gap-16 xl:gap-24' : ''}`}>
            {showToc ? (
              <nav
                aria-label="Contents"
                className="mb-10 lg:sticky lg:top-28 lg:mb-0 lg:pt-1"
              >
                <div className="text-sm font-medium tracking-tight">Contents</div>
                <ol className="mt-4 space-y-3">
                  {headings.map((heading, index) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="text-sm font-light leading-snug text-nd-muted transition hover:text-nd-ink dark:text-white/55 dark:hover:text-white"
                      >
                        <span className="mr-2 text-nd-ink/40 dark:text-white/35">{index + 1}.</span>
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}

            <div className="mx-auto max-w-[820px] space-y-6 lg:mx-0">
              {post.body.map((block, index) => (
                <BlogBodyBlock
                  key={block.type === 'h2' ? block.id : `${block.type}-${index}`}
                  block={block}
                />
              ))}
              <div className="border-t border-black/10 pt-10 dark:border-white/10">
                <BlogAuthor post={post} variant="footer" />
              </div>
            </div>
          </div>
        </PageContainer>
      </article>
      <BlogRelated slug={post.slug} />
    </>
  )
}
