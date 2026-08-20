export type EmnaAssets = {
  logo: string
  logoHover: string
  favicon: string
  storeHero: string
  founder: string
  payments: string
  gift: string
}

export type EmnaCollection = {
  id: string
  label: string
}

export type EmnaProduct = {
  id: string
  title: string
  price: number
  collections: string[]
  images: string[]
  description: string
  size?: string
  material?: string
}

export type EmnaJournal = {
  title: string
  dek: string
  image: string
}

export type EmnaFaq = {
  q: string
  a: string
}

export type EmnaCartItem = {
  id: string
  title: string
  price: number
  image: string
  qty: number
}

export type EmnaCatalog = {
  brand: string
  currency: string
  freeShipping: number
  assets: EmnaAssets
  collections: EmnaCollection[]
  homeCarousel: string[]
  architecture: string[]
  design: string[]
  journal: EmnaJournal[]
  faqs: EmnaFaq[]
  products: EmnaProduct[]
}
