import type { RefObject } from 'react'

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
    <div className="absolute inset-0 overflow-hidden bg-[#010202]" aria-hidden>
      {showPoster ? (
        <img
          src={poster}
          alt=""
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
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
