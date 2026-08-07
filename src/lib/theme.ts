import { brand } from '@/config/brand'

export function getPreferredDark(): boolean {
  if (typeof window === 'undefined') return false
  const saved = window.localStorage.getItem(brand.themeKey)
  if (saved === 'dark') return true
  if (saved === 'light') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

export function applyTheme(dark: boolean) {
  const root = document.documentElement
  root.classList.toggle('dark', dark)
  root.style.colorScheme = dark ? 'dark' : 'light'
  window.localStorage.setItem(brand.themeKey, dark ? 'dark' : 'light')
}
