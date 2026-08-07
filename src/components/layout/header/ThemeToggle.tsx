import { useEffect, useState } from 'react'
import { applyTheme, getPreferredDark } from '@/lib/theme'

export function ThemeToggle() {
  const [dark, setDark] = useState(() => getPreferredDark())

  useEffect(() => {
    applyTheme(dark)
  }, [dark])

  return (
    <button
      type="button"
      onClick={() => setDark((v) => !v)}
      className="grid h-10 w-10 place-items-center rounded-full bg-nd-soft text-sm text-nd-ink transition hover:scale-105 dark:bg-[#2a2a2a] dark:text-white"
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={dark}
    >
      {dark ? '☀' : '☾'}
    </button>
  )
}
