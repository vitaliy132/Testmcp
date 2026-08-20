import data from './catalog.json' with { type: 'json' }
import type { ProudMaryCatalog } from './types.ts'

export const catalog = data as ProudMaryCatalog
