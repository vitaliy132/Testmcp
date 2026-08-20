import data from './catalog.json' with { type: 'json' }
import type { AnovairCatalog } from './types.ts'

export const catalog = data as AnovairCatalog
