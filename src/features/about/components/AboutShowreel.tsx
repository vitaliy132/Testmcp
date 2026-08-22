'use client'

import { useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { aboutShowreel } from '@/features/about/data'
import { PageContainer } from '@/components/ui/PageContainer'
import { VideoPlayNotch } from '@/components/ui/VideoPlayNotch'
import { useInViewVideo } from '@/hooks/useInViewVideo'

export function AboutShowreel() {
  const reduceMotion = useReducedMotion() ?? false
  const videoRef = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(false)
  const [muted, setMuted] = useState(true)
  const showPoster = reduceMotion || failed
  const { playing, togglePlay } = useInViewVideo(videoRef, {
    enabled: !showPoster,
    src: aboutShowreel.src,
  })

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }

  return (
    <section className="pb-20 lg:pb-24 2xl:pb-32">
      <PageContainer variant="about">
        <div className="relative w-full overflow-hidden rounded-2xl bg-[#1a1a1a] lg:rounded-3xl">
          {showPoster ? null : (
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? 'Unmute video' : 'Mute video'}
              className="absolute inset-0 z-10 cursor-default"
            />
          )}
          <div className="relative aspect-[4/3] w-full lg:aspect-video">
            {showPoster ? (
              <img
                src={aboutShowreel.poster}
                alt=""
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <video
                ref={videoRef}
                className="absolute inset-0 h-full w-full object-cover"
                src={aboutShowreel.src}
                poster={aboutShowreel.poster}
                muted
                playsInline
                loop
                preload="metadata"
                onError={() => setFailed(true)}
              />
            )}
          </div>

          {showPoster ? null : (
            <VideoPlayNotch
              playing={playing}
              onToggle={togglePlay}
              label={playing ? 'Pause showreel' : 'Play showreel'}
            />
          )}
        </div>
      </PageContainer>
    </section>
  )
}
