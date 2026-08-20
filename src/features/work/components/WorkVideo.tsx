import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { WorkCaseStudyItem } from '@/features/work/types'
import { PageContainer } from '@/components/ui/PageContainer'
import { VideoPlayNotch } from '@/components/ui/VideoPlayNotch'
import { useInViewVideo } from '@/hooks/useInViewVideo'

export function WorkVideo({ project }: { project: WorkCaseStudyItem }) {
  const reduceMotion = useReducedMotion() ?? false
  const videoRef = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(false)
  const { video, poster } = project.caseStudy
  const showPoster = reduceMotion || failed
  const { playing, togglePlay } = useInViewVideo(videoRef, {
    enabled: !showPoster,
    src: video,
  })

  useEffect(() => {
    setFailed(false)
  }, [video])

  return (
    <section className="pb-16 lg:pb-24">
      <PageContainer variant="about">
        <div className="relative overflow-hidden rounded-2xl bg-[#1a1a1a] lg:rounded-3xl">
          <div className="relative aspect-[4/3] w-full lg:aspect-video">
            {showPoster ? (
              <img
                src={poster}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
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
                onError={() => setFailed(true)}
              />
            )}
          </div>

          {showPoster ? null : (
            <VideoPlayNotch
              playing={playing}
              onToggle={togglePlay}
              label={playing ? `Pause ${project.client}` : `Play ${project.client}`}
            />
          )}
        </div>
      </PageContainer>
    </section>
  )
}
