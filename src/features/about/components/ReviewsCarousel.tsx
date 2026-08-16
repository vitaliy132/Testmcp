import { useEffect, useRef, useState } from 'react'
import { aboutGoogleBadge, aboutReviews, aboutReviewsLink } from '@/data/about'

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 576 512" fill="currentColor" aria-hidden>
      <path d="M288.1 0l86.5 164 182.7 31.6L428 328.5 454.4 512l-166.3-81.8L121.7 512l26.4-183.5L18.9 195.6 201.5 164 288.1 0z" />
    </svg>
  )
}

export function ReviewsCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateEdges = () => {
    const el = scrollerRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2)
  }

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    updateEdges()
    el.addEventListener('scroll', updateEdges, { passive: true })
    window.addEventListener('resize', updateEdges)
    return () => {
      el.removeEventListener('scroll', updateEdges)
      window.removeEventListener('resize', updateEdges)
    }
  }, [])

  const scrollBy = (dir: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.75, 520), behavior: 'smooth' })
  }

  return (
    <section id="testimonials" className="scroll-mt-28 pb-20 lg:pb-24 2xl:pb-32">
      <div className="w-full pl-2 sm:pl-6 xl:pl-12 2xl:pl-20">
        <div className="flex w-full flex-wrap">
          {/* Left sidebar — MadeByShape lg:w-4/16 */}
          <div className="mb-10 flex w-full flex-row items-end justify-between px-2 md:pr-6 lg:mb-0 lg:w-1/4 lg:flex-col lg:items-start lg:justify-between lg:px-3 xl:px-4">
            <div className="w-full">
              <div className="mb-3 w-56 lg:mb-5">
                <img
                  src={aboutGoogleBadge.light}
                  alt="Google reviews"
                  className="h-auto w-full dark:hidden"
                />
                <img
                  src={aboutGoogleBadge.dark}
                  alt="Google reviews"
                  className="hidden h-auto w-full dark:block"
                />
              </div>
              <div className="flex flex-col items-start space-y-3 lg:space-y-5">
                <h2 className="max-w-sm text-balance text-2xl leading-none tracking-tight text-nd-ink md:text-3xl lg:max-w-none xl:text-4xl dark:text-white">
                  People love us, and we love them
                </h2>
                <a
                  href={aboutReviewsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-lime"
                >
                  Read more Reviews
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2 lg:mt-10">
              <button
                type="button"
                aria-label="Previous reviews"
                disabled={atStart}
                onClick={() => scrollBy(-1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-nd-soft transition hover:bg-nd-lime disabled:pointer-events-none disabled:opacity-30 dark:bg-white/10 dark:hover:bg-white/20"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 320 512" aria-hidden>
                  <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next reviews"
                disabled={atEnd}
                onClick={() => scrollBy(1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-nd-soft transition hover:bg-nd-lime disabled:pointer-events-none disabled:opacity-30 dark:bg-white/10 dark:hover:bg-white/20"
              >
                <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 320 512" aria-hidden>
                  <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right carousel — MadeByShape lg:w-12/16 */}
          <div className="relative w-full lg:w-3/4">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-20 bg-gradient-to-r from-white dark:from-[#121212] lg:block" />
            <div
              ref={scrollerRef}
              className="flex snap-x snap-mandatory overflow-x-auto scrollbar-none"
            >
              {aboutReviews.map((review) => (
                <article
                  key={`${review.name}-${review.company}`}
                  className="flex h-auto w-[min(100%,520px)] shrink-0 snap-start px-2 sm:w-[85%] md:w-[70%] lg:w-[55%] lg:px-3 xl:w-[48%] xl:px-4"
                >
                  <div className="flex w-full flex-col items-start justify-between rounded-2xl bg-nd-soft p-6 lg:rounded-3xl lg:p-10 dark:bg-[#1a1a1a]">
                    <div className="mb-5 w-full lg:mb-10">
                      <div
                        className="mb-5 flex gap-1 text-nd-ink lg:mb-10 dark:text-white"
                        aria-label="5 star review"
                      >
                        {Array.from({ length: 5 }).map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4" />
                        ))}
                      </div>
                      <p className="text-base font-light leading-7 text-nd-muted lg:text-lg dark:text-white/70">
                        {review.quote}
                      </p>
                    </div>
                    <div className="flex items-end gap-2 lg:gap-3">
                      <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-nd-lime lg:h-12 lg:w-12 lg:rounded-lg">
                        <span className="mt-px text-xl leading-none text-nd-ink">
                          {review.initial}
                        </span>
                      </div>
                      <div className="leading-tight tracking-tight">
                        <p className="text-nd-ink dark:text-white">{review.name}</p>
                        <p className="text-xs font-light text-nd-muted lg:text-sm dark:text-white/55">
                          {review.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
