import type { RefObject } from 'react'
import { MediaImage } from '@/components/ui/MediaImage'

export function HeroReel({
  videoRef,
  showPoster,
  src,
  poster,
  onError,
}: {
  videoRef: RefObject<HTMLVideoElement | null>
  showPoster: boolean
  src: string
  poster: string
  onError: () => void
}) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#010202]" aria-hidden>
      {showPoster ? (
        <MediaImage
          src={poster}
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 62vw, 100vw"
          className="object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          onError={onError}
        />
      )}
    </div>
  )
}
