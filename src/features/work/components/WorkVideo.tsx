import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { WorkCaseStudyItem } from '@/data/work'
import { CornerFillet } from '@/components/ui/CornerFillet'
import { PageContainer } from '@/components/ui/PageContainer'

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

export function WorkVideo({ project }: { project: WorkCaseStudyItem }) {
  const reduceMotion = useReducedMotion() ?? false
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(!reduceMotion)
  const { video, poster } = project.caseStudy

  useEffect(() => {
    const el = videoRef.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (reduceMotion) {
          el.pause()
          setPlaying(false)
          return
        }
        if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
          void el.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
        } else {
          el.pause()
          setPlaying(false)
        }
      },
      { threshold: [0, 0.45, 1] },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [reduceMotion, video])

  const togglePlay = () => {
    const el = videoRef.current
    if (!el) return
    if (el.paused) {
      void el.play()
      setPlaying(true)
    } else {
      el.pause()
      setPlaying(false)
    }
  }

  return (
    <section className="pb-16 lg:pb-24">
      <PageContainer variant="about">
        <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] lg:rounded-3xl">
          <div className="relative aspect-[4/3] w-full lg:aspect-video">
            {reduceMotion ? (
              <img src={poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
            ) : (
              <video
                key={video}
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src={video}
                poster={poster}
                muted
                loop
                playsInline
                preload="metadata"
              />
            )}
          </div>

          {reduceMotion ? null : (
            <div className="absolute right-0 bottom-0 z-20 inline-flex rounded-tl-2xl bg-white pl-3 pt-3 lg:rounded-tl-3xl lg:pl-4 lg:pt-4 dark:bg-[#121212]">
              <CornerFillet className="pointer-events-none absolute -left-px top-px h-8 w-8 -translate-x-full text-white dark:text-[#121212] lg:h-10 lg:w-10" />
              <CornerFillet className="pointer-events-none absolute right-px -top-px h-8 w-8 -translate-y-full rotate-180 text-white dark:text-[#121212] lg:h-10 lg:w-10" />
              <button
                type="button"
                onClick={togglePlay}
                className="relative z-10 inline-flex items-center overflow-hidden rounded-full bg-nd-ink text-white dark:bg-white/15"
                aria-label={playing ? `Pause ${project.client}` : `Play ${project.client}`}
              >
                <span className="px-4 py-2 text-sm leading-tight">{playing ? 'Pause' : 'Play'}</span>
                <span className="grid h-9 w-9 place-items-center">
                  <PlayPauseIcon playing={playing} />
                </span>
              </button>
            </div>
          )}
        </div>
      </PageContainer>
    </section>
  )
}
