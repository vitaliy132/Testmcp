export type ProudMaryAssets = {
  logo: string
  favicon: string
  tileWild: string
  graphicWild: string
  tileDeluxe: string
  graphicDeluxe: string
  tileMild: string
  graphicMild: string
  tileCurious: string
  graphicCurious: string
  cafe: string
  cafe2: string
  cafe3: string
  cafe4: string
  journey: string
}

export type ProudMaryCollection = {
  id: string
  title: string
  blurb?: string
}

export type ProudMaryOption = {
  name: string
  values: string[]
}

export type ProudMaryVariant = {
  id: string
  title: string
  option1?: string
  option2?: string
  option3?: string
  price: number
  compare?: number
  available: boolean
}

export type ProudMaryProduct = {
  id: string
  title: string
  type?: string
  vendor?: string
  tags?: string[]
  description: string
  images: string[]
  options: ProudMaryOption[]
  variants: ProudMaryVariant[]
  price: number
  compare?: number
  available: boolean
  freeShipping?: boolean
  collections: string[]
}

export type ProudMaryQuote = {
  text: string
  source: string
}

export type ProudMaryFeeling = {
  id: string
  name: string
  color: string
  body: string
}

export type ProudMaryPolicy = {
  title: string
  body: string[]
}

export type ProudMaryCartItem = {
  id: string
  vid: string
  title: string
  variant: string
  price: number
  image: string
  qty: number
}

export type ProudMaryCatalog = {
  brand: string
  currency: string
  assets: ProudMaryAssets
  collections: ProudMaryCollection[]
  home: {
    subscriptions: string[]
    newest: string[]
    merch: string[]
  }
  quotes: ProudMaryQuote[]
  about: {
    lede: string
    feelings: ProudMaryFeeling[]
  }
  policies: Record<string, ProudMaryPolicy>
  products: ProudMaryProduct[]
}
