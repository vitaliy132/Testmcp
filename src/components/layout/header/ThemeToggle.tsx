'use client'

import { useEffect, useState } from 'react'
import { applyTheme } from '@/lib/theme'

export function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  return (
    <button
      type="button"
      onClick={() => {
        const next = !document.documentElement.classList.contains('dark')
        applyTheme(next)
        setDark(next)
      }}
      className="grid h-10 w-10 place-items-center rounded-full bg-nd-soft text-sm text-nd-ink transition hover:scale-105 dark:bg-[#2a2a2a] dark:text-white"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={dark}
    >
      {dark ? '☀' : '☾'}
    </button>
  )
}
