import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { homeVideos, videoCarouselCopy, type HomeVideo } from '@/features/home/data/videos'
import { CornerFillet } from '@/components/ui/CornerFillet'
import { SectionEyebrow } from '@/components/ui/SectionEyebrow'
import { useSnapScroller } from '@/components/ui/useSnapScroller'

function PlayPauseIcon({ playing }: { playing: boolean }) {
  if (playing) {
    return (
      <svg className="h-3 w-3 fill-current" viewBox="0 0 320 512" aria-hidden>
        <path d="M128 64H0v384h128V64zm192 0H192v384h128V64z" />
      </svg>
    )
  }
  return (
    <svg className="h-3 w-3 fill-current" viewBox="0 0 384 512" aria-hidden>
      <path d="M384 256L0 32v448l384-224z" />
    </svg>
  )
}

function ArrowIcon({ dir }: { dir: 'prev' | 'next' }) {
  if (dir === 'prev') {
    return (
      <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 320 512" aria-hidden>
        <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
      </svg>
    )
  }
  return (
    <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 320 512" aria-hidden>
      <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
    </svg>
  )
}

function VideoSlide({
  item,
  reduceMotion,
}: {
  item: HomeVideo
  reduceMotion: boolean
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(!reduceMotion)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (reduceMotion) {
          video.pause()
          setPlaying(false)
          return
        }
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          void video.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
        } else {
          video.pause()
          setPlaying(false)
        }
      },
      { threshold: [0, 0.55, 1] },
    )

    io.observe(video)
    return () => io.disconnect()
  }, [reduceMotion])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      void video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <article className="home-video-slide shrink-0 snap-start px-2 sm:px-3 xl:px-4">
      <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] lg:rounded-3xl">
        <div className="relative aspect-[4/3] w-full lg:aspect-video">
          {reduceMotion ? (
            <img
              src={item.poster}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : (
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              src={item.src}
              poster={item.poster}
              muted
              loop
              playsInline
              preload="metadata"
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 max-w-[calc(100%-9rem)] p-5 sm:p-7 lg:max-w-[calc(100%-10.5rem)] lg:p-8">
          <div className="min-w-0 text-white">
            <p className="mb-1.5 text-xs font-medium uppercase tracking-[0.14em] text-nd-lime">
              {item.kicker}
            </p>
            <h3 className="text-xl leading-tight tracking-tight sm:text-2xl">{item.client}</h3>
            <p className="mt-1 max-w-md text-sm font-light leading-relaxed text-white/75 sm:text-base">
              {item.title}
            </p>
            <a
              href={item.href}
              className="pointer-events-auto mt-4 inline-flex text-sm font-medium text-white underline-offset-4 hover:underline"
            >
              {item.cta}
            </a>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 z-20 inline-flex rounded-tl-2xl bg-white pl-3 pt-3 lg:rounded-tl-3xl lg:pl-4 lg:pt-4 dark:bg-[#121212]">
          <CornerFillet className="pointer-events-none absolute -left-px top-px h-8 w-8 -translate-x-full text-white dark:text-[#121212] lg:h-10 lg:w-10" />
          <CornerFillet className="pointer-events-none absolute right-px -top-px h-8 w-8 -translate-y-full rotate-180 text-white dark:text-[#121212] lg:h-10 lg:w-10" />
          <button
            type="button"
            onClick={togglePlay}
            className="relative z-10 inline-flex items-center overflow-hidden rounded-full bg-nd-ink text-white dark:bg-white/15"
            aria-label={playing ? `Pause ${item.client}` : `Play ${item.client}`}
          >
            <span className="px-4 py-2 text-sm leading-tight">{playing ? 'Pause' : 'Play'}</span>
            <span className="grid h-9 w-9 place-items-center">
              <PlayPauseIcon playing={playing} />
            </span>
          </button>
        </div>
      </div>
    </article>
  )
}

export function VideoCarousel() {
  const reduceMotion = useReducedMotion() ?? false
  const { ref: scrollerRef, atStart, atEnd, scrollBy } = useSnapScroller((el) => {
    const slide = el.querySelector<HTMLElement>('.home-video-slide')
    return slide?.offsetWidth ?? el.clientWidth * 0.8
  })

  return (
    <section id="showreel" className="scroll-mt-28 py-16 lg:py-24">
      <div className="mb-8 flex w-full flex-wrap items-end justify-between gap-6 px-5 lg:mb-12 lg:px-8">
        <div className="mx-auto flex w-full max-w-[1400px] flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col items-start gap-3">
            <SectionEyebrow>{videoCarouselCopy.eyebrow}</SectionEyebrow>
            <h2 className="max-w-sm text-[clamp(1.75rem,4vw,3.75rem)] leading-none tracking-tight text-balance">
              {videoCarouselCopy.heading}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous video"
              disabled={atStart}
              onClick={() => scrollBy(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-nd-soft transition hover:bg-nd-lime disabled:pointer-events-none disabled:opacity-30 dark:bg-white/10 dark:hover:bg-white/20"
            >
              <ArrowIcon dir="prev" />
            </button>
            <button
              type="button"
              aria-label="Next video"
              disabled={atEnd}
              onClick={() => scrollBy(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-nd-soft transition hover:bg-nd-lime disabled:pointer-events-none disabled:opacity-30 dark:bg-white/10 dark:hover:bg-white/20"
            >
              <ArrowIcon dir="next" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory overflow-x-auto pb-2 scrollbar-none"
        aria-label="Project videos"
      >
        <div className="w-2 shrink-0 sm:w-5 lg:w-[max(0.5rem,calc((100vw-1400px)/2+1.5rem))]" aria-hidden />
        {homeVideos.map((item) => (
          <VideoSlide key={item.id} item={item} reduceMotion={reduceMotion} />
        ))}
        <div className="w-2 shrink-0 sm:w-5 lg:w-8" aria-hidden />
      </div>
    </section>
  )
}
