import { IMG } from '@/config/assets'

export type BlogPost = {
  title: string
  excerpt: string
  readTime: string
  cover: string
  authorImage: string
  author: string
}

export const blog: BlogPost[] = [
  {
    title: 'Why did Rise at Seven choose Northern Digital?',
    excerpt:
      'It always has a feel good factor when another agency instructs us to totally rebrand their business, create a new digital environment and ...',
    readTime: '2 min read',
    cover: IMG.rise,
    authorImage: IMG.andyProfile,
    author: 'Andy',
  },
  {
    title: 'Our Culture, Our Value & Our Studio',
    excerpt:
      'In our own words, how important culture, values and studio environment is to us as a web design agency at Northern Digital',
    readTime: '6 min read',
    cover: IMG.wireframes,
    authorImage: IMG.natasia,
    author: 'Natasia',
  },
  {
    title: "Why haven't we upscaled our web design agency?",
    excerpt:
      "Co-Founder of Northern Digital, Andy Golpys, explains why we haven't turned our digital agency of 10 staff into 30.",
    readTime: '10 min read',
    cover: IMG.office,
    authorImage: IMG.andyProfile,
    author: 'Andy',
  },
  {
    title: 'Why our studio outside of Manchester works for us',
    excerpt:
      "Hi, I'm Andy Golpys, Co-Founder here at Northern Digital. I started my web career 18 years ago as a freelancer, whilst at University.",
    readTime: '4 min read',
    cover: IMG.printer,
    authorImage: IMG.andyProfile,
    author: 'Andy',
  },
  {
    title: 'Types of clients we want to work with',
    excerpt:
      "Here at Northern Digital in Manchester, we want to create websites for nice people. Here's a list of the types of clients we want to work with.",
    readTime: '6 min read',
    cover: IMG.natasiaDesk,
    authorImage: IMG.andyProfile,
    author: 'Andy',
  },
  {
    title: 'Why I chose to work for a small design agency',
    excerpt:
      "The size of the business you work for should be well-considered when looking for a job in design. Here's why I chose to work for a small design agency...",
    readTime: '4 min read',
    cover: IMG.cards,
    authorImage: IMG.ella,
    author: 'Ella',
  },
]
