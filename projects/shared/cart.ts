export type CartLine = {
  id: string
  qty: number
}

export function createCart<T extends CartLine>(key: string, onChange?: () => void) {
  const load = (): T[] => {
    try {
      const raw = localStorage.getItem(key)
      if (!raw) return []
      const parsed: unknown = JSON.parse(raw)
      return Array.isArray(parsed) ? (parsed as T[]) : []
    } catch {
      return []
    }
  }

  const save = (items: T[]) => {
    localStorage.setItem(key, JSON.stringify(items))
    onChange?.()
  }

  const count = () => load().reduce((n, item) => n + item.qty, 0)

  return { load, save, count }
}
