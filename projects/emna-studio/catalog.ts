import data from './catalog.json' with { type: 'json' }
import type { EmnaCatalog } from './types.ts'

export const catalog = data as EmnaCatalog
