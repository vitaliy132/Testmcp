import { BottomRightNotchFillets } from '@/components/ui/CornerFillet'

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

export function VideoPlayNotch({
  playing,
  onToggle,
  label,
}: {
  playing: boolean
  onToggle: () => void
  label: string
}) {
  return (
    <div className="absolute right-0 bottom-0 z-20 inline-flex rounded-tl-2xl bg-white pl-3 pt-3 lg:rounded-tl-3xl lg:pl-4 lg:pt-4 dark:bg-nd-dark">
      <BottomRightNotchFillets />
      <button
        type="button"
        onClick={onToggle}
        className="relative z-10 inline-flex items-center overflow-hidden rounded-full bg-nd-ink text-white dark:bg-white/15 dark:text-white"
        aria-label={label}
      >
        <span className="px-4 py-2 text-sm leading-tight">{playing ? 'Pause' : 'Play'}</span>
        <span className="grid h-9 w-9 place-items-center">
          <PlayPauseIcon playing={playing} />
        </span>
      </button>
    </div>
  )
}
