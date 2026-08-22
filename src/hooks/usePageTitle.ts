import { useEffect } from 'react'
import { brand } from '@/config/brand'

export function usePageTitle(title: string | undefined) {
  useEffect(() => {
    if (!title) return
    document.title = title
    return () => {
      document.title = brand.title
    }
  }, [title])
}
