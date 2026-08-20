import { useRef, useState } from 'react'
import { aboutShowreel } from '@/features/about/data'
import { BottomRightNotchFillets } from '@/components/ui/CornerFillet'
import { PageContainer } from '@/components/ui/PageContainer'

export function AboutShowreel() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(true)

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

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
  }

  return (
    <section className="pb-20 lg:pb-24 2xl:pb-32">
      <PageContainer variant="about">
        <div className="relative w-full overflow-hidden rounded-2xl lg:rounded-3xl">
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? 'Unmute video' : 'Mute video'}
            className="absolute inset-0 z-10 cursor-default"
          />
          <div className="relative aspect-[4/3] w-full lg:aspect-video">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              src={aboutShowreel.src}
              muted
              autoPlay
              playsInline
              loop
              preload="metadata"
            />
          </div>

          <div className="absolute right-0 bottom-0 z-20 inline-flex rounded-tl-2xl bg-white pl-4 pt-4 lg:rounded-tl-3xl dark:bg-[#121212]">
            <BottomRightNotchFillets />
            <button
              type="button"
              onClick={togglePlay}
              className="relative z-10 inline-flex items-center overflow-hidden rounded-full bg-nd-ink text-white dark:bg-white/15 dark:text-white"
            >
              <span className="px-5 py-2 text-sm leading-tight">{playing ? 'Pause' : 'Play'}</span>
              <span className="grid h-9 w-9 place-items-center">
                {playing ? (
                  <svg className="h-3 w-3 fill-current" viewBox="0 0 320 512" aria-hidden>
                    <path d="M128 64H0v384h128V64zm192 0H192v384h128V64z" />
                  </svg>
                ) : (
                  <svg className="h-3 w-3 fill-current" viewBox="0 0 384 512" aria-hidden>
                    <path d="M384 256L0 32v448l384-224z" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
      </PageContainer>
    </section>
  )
}
