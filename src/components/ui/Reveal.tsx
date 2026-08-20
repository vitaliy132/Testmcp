import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type RevealTag = 'div' | 'h1' | 'p'

export function Reveal({
  children,
  className,
  delay = 0,
  y = 12,
  duration = 0.45,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  duration?: number
  as?: RevealTag
}) {
  const reduceMotion = useReducedMotion() ?? false
  const props = {
    initial: reduceMotion ? false : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : duration, delay: reduceMotion ? 0 : delay },
    className,
    children,
  }

  if (as === 'h1') return <motion.h1 {...props} />
  if (as === 'p') return <motion.p {...props} />
  return <motion.div {...props} />
}
