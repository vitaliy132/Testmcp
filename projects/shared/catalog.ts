export function findById<T extends { id: string }>(items: T[], id: string | null | undefined) {
  if (!id) return undefined
  return items.find((item) => item.id === id)
}

export function inCollection<T extends { collections: string[] }>(
  items: T[],
  id: string | null | undefined,
) {
  if (!id || id === 'all') return items.slice()
  return items.filter((item) => item.collections.includes(id))
}
