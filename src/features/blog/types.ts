export type BlogBlock =
  | { type: 'p'; text: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'ul'; items: string[] }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  readTime: string
  cover: string
  coverAlt: string
  author: string
  authorImage: string
  authorRole: string
  authorBio: string
  body: BlogBlock[]
}

export type BlogHeading = {
  id: string
  text: string
}
