export type FaqBullet = {
  strong?: string
  text: string
}

export type FaqItem = {
  question: string
  answer: string
  bullets?: FaqBullet[]
}

export type FaqSection = {
  title: string
  items: FaqItem[]
}
