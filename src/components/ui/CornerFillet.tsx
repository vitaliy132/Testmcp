/** Inverse-radius scoops used on page-color image/video cutouts. */

const PATHS = {
  /** Top-right fill — work tags, blog avatars, team names */
  'top-right': 'M98.1 0h1.9v51.9h-1.9c0-27.6-22.4-50-50-50V0h50z',
  /** Top-left fill — bottom-right play/pause notch */
  'top-left': 'M51.9 0v1.9c-27.6 0-50 22.4-50 50H0V0h51.9z',
} as const

export function CornerFillet({
  className,
  fill = 'top-right',
}: {
  className?: string
  fill?: keyof typeof PATHS
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden
    >
      <path d={PATHS[fill]} />
    </svg>
  )
}

