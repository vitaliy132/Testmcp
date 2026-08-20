export type AnovairAssets = {
  logo: string
  favicon: string
  warehouse: string
  shopNew: string
  shopBest: string
  exclusive: string
  tops: string
  bottoms: string
  about: string
  trustpilot: string
}

export type AnovairCollection = {
  id: string
  title: string
  blurb: string
}

export type AnovairProduct = {
  id: string
  title: string
  price: number
  compare?: number
  sizes?: string[]
  images?: string[]
  files?: string[]
  description: string
  collections: string[]
  b2g1?: boolean
}

export type AnovairInfluencer = {
  h: string
  img: string
}

export type AnovairPolicy = {
  title: string
  body: string[]
}

export type AnovairJournal = {
  id: string
  title: string
  date: string
  author: string
  excerpt: string
  cover: string
  tags?: string[]
  full?: boolean
  dek?: string
  body?: string[]
}

export type AnovairCartItem = {
  id: string
  size: string
  qty: number
}

export type AnovairCatalog = {
  brand: string
  currency: string
  freeShipping: number
  saleEnds: string
  assets: AnovairAssets
  collections: AnovairCollection[]
  home: {
    sale: string[]
    henleys: string[]
  }
  products: AnovairProduct[]
  influencers: AnovairInfluencer[]
  policies: Record<string, AnovairPolicy>
  about: {
    lede: string
    body: string[]
  }
  journal: AnovairJournal[]
}
