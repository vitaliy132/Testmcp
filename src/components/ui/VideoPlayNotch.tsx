import { BottomRightNotchFillets } from '@/components/ui/CornerFillet'

function PlayPauseIcon({ playing }: { playing: boolean }) {
  return (
    <span className="relative block h-3.5 w-3.5">
      <svg
        className={`absolute inset-0 fill-current transition-all duration-200 ease-out ${
          playing ? 'scale-75 opacity-0' : 'translate-x-px scale-100 opacity-100'
        }`}
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path d="M8.2 5.4c0-.7.76-1.14 1.37-.8l10.04 6.1c.58.35.58 1.25 0 1.6l-10.04 6.1c-.61.37-1.37-.07-1.37-.8V5.4z" />
      </svg>
      <svg
        className={`absolute inset-0 fill-current transition-all duration-200 ease-out ${
          playing ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path d="M6.75 5.5c-.41 0-.75.34-.75.75v11.5c0 .41.34.75.75.75h2.6c.41 0 .75-.34.75-.75V6.25c0-.41-.34-.75-.75-.75h-2.6zm7.9 0c-.41 0-.75.34-.75.75v11.5c0 .41.34.75.75.75h2.6c.41 0 .75-.34.75-.75V6.25c0-.41-.34-.75-.75-.75h-2.6z" />
      </svg>
    </span>
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
    <div className="absolute right-0 bottom-0 z-20 inline-flex rounded-tl-[1.75rem] bg-white pl-2 pt-2 dark:bg-nd-dark">
      <BottomRightNotchFillets />
      <button
        type="button"
        onClick={onToggle}
        className="relative z-10 inline-flex h-11 min-h-11 items-center rounded-full bg-nd-ink pl-3.5 pr-1 text-white transition-[transform,background-color] duration-200 ease-out hover:bg-[#1a1a1a] active:scale-[0.97] dark:bg-white/15 dark:hover:bg-white/25"
        aria-label={label}
      >
        <span className="relative grid text-sm font-medium leading-none">
          <span className="invisible col-start-1 row-start-1">Pause</span>
          <span className="relative top-px col-start-1 row-start-1 text-center">
            {playing ? 'Pause' : 'Play'}
          </span>
        </span>
        <span className="ml-1 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10">
          <PlayPauseIcon playing={playing} />
        </span>
      </button>
    </div>
  )
}
