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

const notchFilletClass =
  'pointer-events-none absolute h-10 w-10 text-white lg:h-12 lg:w-12 dark:text-[#121212]'

/** Concave scoops for a bottom-right page-color notch (play/pause). */
export function BottomRightNotchFillets() {
  return (
    <>
      <CornerFillet
        fill="top-left"
        className={`${notchFilletClass} -bottom-px left-px -translate-x-full rotate-180`}
      />
      <CornerFillet
        fill="top-left"
        className={`${notchFilletClass} top-px -right-px -translate-y-full rotate-180`}
      />
    </>
  )
}
