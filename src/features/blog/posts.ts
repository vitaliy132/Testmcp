import { IMG } from '@/config/assets'
import { brand } from '@/config/brand'
import { BLOG_IMG } from '@/features/blog/media'
import type { BlogHeading, BlogPost } from '@/features/blog/types'

const andy = {
  author: 'Andy',
  authorImage: IMG.andy,
  authorRole: 'Co-Founder',
  authorBio: `Co-Founder of ${brand.name}. Most of my posts are about how we run the studio — not just how we design websites.`,
} as const

const natasia = {
  author: 'Natasia',
  authorImage: IMG.natasia,
  authorRole: 'Content Writer',
  authorBio: `Hello, I'm Natasia, and I'm a content writer at ${brand.name}.`,
} as const

const ella = {
  author: 'Ella',
  authorImage: IMG.ella,
  authorRole: 'Brand Designer',
  authorBio: `Brand Designer at ${brand.name}. This is why a small studio was the right move for me.`,
} as const

export const blog: BlogPost[] = [
  {
    slug: 'rise-at-seven',
    title: 'Why did Rise at Seven choose Northern Digital?',
    excerpt:
      'It always has a feel good factor when another agency instructs us to totally rebrand their business, create a new digital environment and ...',
    readTime: '2 min read',
    cover: BLOG_IMG.laptopReview,
    coverAlt: 'The team gathered around a laptop in the studio',
    ...andy,
    body: [
      {
        type: 'p',
        text: 'It always has a feel-good factor when another agency asks us to rebrand their business and build a new digital environment. Agencies are picky. They live in the same world we do, they know what a lazy website looks like, and they can smell a pitch deck from the other side of a Teams call.',
      },
      {
        type: 'h2',
        id: 'when-another-agency-calls',
        text: 'When another agency calls',
      },
      {
        type: 'p',
        text: 'Rise at Seven did not need us to explain what a brand is. They needed a partner who would treat their own site with the same care they give their clients — and who would not disappear into a production line once the kickoff deck landed.',
      },
      {
        type: 'p',
        text: `That is usually why agencies hire agencies. Not because they cannot design. Because they want someone outside the building to hold the work to a standard, move quickly, and still pick up the phone. From our studio in Leeds, that is the job we like.`,
      },
      {
        type: 'image',
        src: BLOG_IMG.collabCafe,
        alt: 'Designers reviewing work together on laptops in the studio',
      },
      {
        type: 'h2',
        id: 'what-they-needed',
        text: 'What they needed',
      },
      {
        type: 'p',
        text: 'The brief was a full environment, not a lick of paint. Positioning, visual identity, and a site that could carry case studies, culture, and new business without feeling like a brochure bolted onto a blog.',
      },
      {
        type: 'p',
        text: 'We started with how they talk, not how they look. Once the voice was honest, the design had somewhere to sit. Pages got room to breathe. Work led. Contact was obvious. Nothing was there to impress other designers at the expense of the people actually hiring them.',
      },
      {
        type: 'h2',
        id: 'why-leeds-why-us',
        text: 'Why Leeds, why us',
      },
      {
        type: 'p',
        text: `We are not in their office. We are a train ride away at West Pt, and most of the work happened on shared boards and short calls. That distance is useful. It keeps the relationship adult. They stayed the experts on their craft; we stayed the experts on making it show up online.`,
      },
      {
        type: 'p',
        text: 'If you run an agency and your own digital home is the last thing you have time for, that is a brief we understand. We have been on both sides of it.',
      },
    ],
  },
  {
    slug: 'culture-value-studio',
    title: 'Our Culture, Our Value & Our Studio',
    excerpt: `In our own words, how important culture, values and studio environment is to us as a web design agency at ${brand.name}`,
    readTime: '6 min read',
    cover: BLOG_IMG.openOffice,
    coverAlt: 'The team working side by side in an open studio',
    ...natasia,
    body: [
      {
        type: 'p',
        text: `In our own words: culture, values, and the studio are not a careers-page garnish at ${brand.name}. They are how the work gets made.`,
      },
      {
        type: 'h2',
        id: 'we-are-proud-of-our-culture',
        text: 'We are proud of our culture',
      },
      {
        type: 'p',
        text: 'The spaces we inhabit shape us. When you spend more than thirty hours a week in one place with the same people, it becomes a large part of your life. Being productive is the baseline. Identifying with the room — and with the people in it — is what keeps the work sharp.',
      },
      {
        type: 'p',
        text: `Andy and Jason set ${brand.name} up in ${brand.foundedYear} as an independent studio in Leeds. The brief for the company was never “look like a city-centre agency.” It was: hire carefully, stay close to the work, and build relationships that last longer than a twelve-week build.`,
      },
      {
        type: 'p',
        text: 'There is no production line here, and no gatekeeper between you and the people actually designing and building your site. When you hire us, you hire the team in the room — not a brand name with a junior bench behind it.',
      },
      {
        type: 'p',
        text: 'Collaboration is the method. Every project is meant to be a piece both sides are proud to put in a portfolio. That sounds simple. It is also the thing that breaks first when a studio treats people as utilisation percentages.',
      },
      {
        type: 'image',
        src: BLOG_IMG.studioFloor,
        alt: 'A working studio floor — desks, screens, and conversation',
      },
      {
        type: 'h2',
        id: 'we-provide-value-for-our-clients',
        text: 'We provide value for our clients',
      },
      {
        type: 'p',
        text: 'From a first-time founder to a brand that already knows its market, every brief is as important to us as it is to the person walking in with it. We aim for each piece of work to be worth showing — including to the next client who asks what we actually do.',
      },
      {
        type: 'p',
        text: 'That is why the home grid is live work: Anovair, Aqua, Proud Mary, Emna Studio. Menswear on sale that still looks like a brand. A fintech platform explained without drowning advisors in jargon. Coffee roasted in Leeds. A practice and a concept store in one visual world. Different sectors, same standard.',
      },
      {
        type: 'p',
        text: 'We have time for smaller independent brands as well as the ones with a marketing team and a timeline. You do not need a finished vision to start. You do need to want to collaborate. We will not take a brief and vanish until deadline day.',
      },
      {
        type: 'p',
        text: 'If the business is still finding its feet, we can build a brand around it — personality, audience, then a site that speaks in that voice. Craft CMS when you need control without a template ceiling. Shopify when the job is to sell. Organic SEO so the work has a chance of being found after launch day.',
      },
      {
        type: 'image',
        src: BLOG_IMG.conference,
        alt: 'A studio meeting around the conference table',
      },
      {
        type: 'h2',
        id: 'our-studio-is-a-home-from-home',
        text: 'Our studio is a home from home',
      },
      {
        type: 'p',
        text: `The interior of a studio should match the work you claim to do. Ours is at West Pt in Leeds — ${brand.address.lines.slice(1).join(', ')} — close enough for clients to visit, far enough from the theatre of a glass-box reception.`,
      },
      {
        type: 'p',
        text: 'People work better in a room they helped shape. Clients feel that when they come in. It is a chance to show how we think about brands, comfort, and purpose without putting it on a slide.',
      },
      {
        type: 'p',
        text: 'Some of the team work from home and use the studio when they need to be together. Productivity is high either way. Every so often we want the same table, the same coffee, and a conversation that does not have a waiting-room chime.',
      },
      {
        type: 'p',
        text: 'Environment, staff, culture, personality — for us those are the same foundations. They are how the story so far got written, and they are how the next project will get made.',
      },
    ],
  },
  {
    slug: 'staying-small',
    title: "Why haven't we upscaled our web design agency?",
    excerpt: `Co-Founder of ${brand.name}, Andy Golpys, explains why we haven't turned our digital agency of 10 staff into 30.`,
    readTime: '10 min read',
    cover: BLOG_IMG.smallTeam,
    coverAlt: 'A small team gathered around one laptop',
    ...andy,
    body: [
      {
        type: 'p',
        text: `I get asked this more than almost anything else. If the work is good and the phone keeps ringing, why haven't we turned ${brand.name} into a thirty-person machine? The short answer: we tried the thought experiment, and we did not like the company on the other side of it.`,
      },
      {
        type: 'h2',
        id: 'ten-people-is-a-choice',
        text: 'Ten people is a choice',
      },
      {
        type: 'p',
        text: 'Headcount is treated like a scoreboard in this industry. More people, more billable days, more “capacity,” more slides about squads. I have sat in enough rooms to know what that actually buys you: account managers who translate, specialists who never meet the client, and a calendar that is always six weeks too full.',
      },
      {
        type: 'p',
        text: 'Ten people is enough to brand, design, build, and look after a site properly. It is not enough to hide. If a page is weak, everyone in the studio knows who touched it. That pressure is useful. It keeps the quality bar where we can still feel it.',
      },
      {
        type: 'p',
        text: `We founded the studio in ${brand.foundedYear} in Leeds because we wanted that kind of closeness — to the work and to each other — not because we failed to raise a round.`,
      },
      {
        type: 'image',
        src: BLOG_IMG.collabGlass,
        alt: 'Two people working through a design on laptops',
      },
      {
        type: 'h2',
        id: 'what-you-lose-when-you-scale',
        text: 'What you lose when you scale',
      },
      {
        type: 'p',
        text: 'The first thing that goes is taste as a shared language. In a small team, you argue in the kitchen and the argument is over by lunch. In a large one, taste becomes a process: brand guardians, design QA, a PDF of rules nobody reads.',
      },
      {
        type: 'p',
        text: 'The second thing that goes is the client relationship. I still want to be on the call. Jason still wants to see the build. Natasia still wants to write like a person. Ella still wants the identity to survive contact with a CMS. That only works if there are not three layers between the kickoff and the people doing the job.',
      },
      {
        type: 'ul',
        items: [
          'You start hiring to fill seats, not because you found someone you would trust with a client.',
          'Utilisation replaces craft as the number you watch on a Monday.',
          'Junior work gets sold at senior prices because the pitch deck is still the founders.',
          'Culture becomes a values poster and a Slack emoji.',
        ],
      },
      {
        type: 'p',
        text: 'None of that is evil. Plenty of good agencies run that way and make a lot of money. It is just not the job I want to go to.',
      },
      {
        type: 'h2',
        id: 'quality-over-headcount',
        text: 'Quality over headcount',
      },
      {
        type: 'p',
        text: 'Staying small is not the same as staying still. We take on the work we can do well — Shopify storefronts, Craft builds, identity, organic SEO — and we say no when a brief needs a factory. Saying no is how the yes stays good.',
      },
      {
        type: 'p',
        text: 'Look at the work we do show. Anovair had to feel like a warehouse sale without looking like a dump bin. Aqua had to explain a platform without a glossary. Proud Mary had to taste like Leeds. Those are judgment jobs. You cannot process-map your way to that in a scrum of twenty designers who have never met the founder.',
      },
      {
        type: 'image',
        src: BLOG_IMG.deskOverhead,
        alt: 'A small team sharing one table — laptops, notes, and tea',
      },
      {
        type: 'h2',
        id: 'clients-notice',
        text: 'Clients notice',
      },
      {
        type: 'p',
        text: 'The clients we want already know the difference. They have been through an agency that grew faster than its taste. They are tired of being handed over. They would rather have a smaller team that remembers the brief from week one.',
      },
      {
        type: 'p',
        text: 'We still have to be commercial. Rent at West Pt is real. Salaries are real. We are not a hobby. The constraint is the point: if we cannot make the numbers work at this size, the answer is better work and better-fit clients, not another row of desks.',
      },
      {
        type: 'p',
        text: 'When someone asks why we have not “gone to thirty,” I tell them the truth. We could. We would be a different company. I like this one.',
      },
      {
        type: 'h2',
        id: 'where-we-go-from-here',
        text: 'Where we go from here',
      },
      {
        type: 'p',
        text: 'We will hire when we find people we would let talk to a client on day one. We will not hire to look bigger in a pitch. If that means some briefs go elsewhere, good — they were never ours.',
      },
      {
        type: 'p',
        text: `If you want a studio that still fits in one room, you know where we are. ${brand.address.lines.join(', ')}. The kettle is on.`,
      },
    ],
  },
  {
    slug: 'leeds-studio',
    title: 'Why our studio in Leeds works for us',
    excerpt: `Hi, I'm Andy Golpys, Co-Founder here at ${brand.name}. I started my web career 18 years ago as a freelancer, whilst at University.`,
    readTime: '4 min read',
    cover: BLOG_IMG.meetingRoom,
    coverAlt: 'A working session in a glass meeting room',
    ...andy,
    body: [
      {
        type: 'p',
        text: `Hi, I'm Andy Golpys, Co-Founder here at ${brand.name}. I started my web career eighteen years ago as a freelancer, whilst at university. I made sites for individuals, small businesses, friends, family, and for other design studios. Most of that work lived in the North of England. A lot of the agencies were in city centres I did not need to sit in every day.`,
      },
      {
        type: 'h2',
        id: 'starting-out',
        text: 'Starting out',
      },
      {
        type: 'p',
        text: 'As a freelancer my days were split: agency offices, university, or the kitchen table. That mix worked for a while. I was young, I wanted the hours, and I was not commuting into a centre every morning just to prove I had a postcode.',
      },
      {
        type: 'ul',
        items: [
          'I could protect making time — email in the morning, design in the day, build in the evening.',
          'I was not spending three hours a day in traffic before I opened a laptop.',
          'Client meetings were rare. I turned up, did the work, and left.',
        ],
      },
      {
        type: 'image',
        src: BLOG_IMG.workshop,
        alt: 'The team around a table, working through ideas on the wall',
      },
      {
        type: 'h2',
        id: 'the-city-centre-myth',
        text: 'The city-centre myth',
      },
      {
        type: 'p',
        text: `When Jason and I set up ${brand.name}, the reflex was familiar. Get a studio people can walk past. Be in the middle of it. Look bigger. We talked ourselves into the idea that a serious agency had to be in a serious postcode.`,
      },
      {
        type: 'p',
        text: 'That idea does not survive contact with how we actually work. Our clients are not only in Leeds, and they are not wandering the streets looking for a neon sign. They find us because of the work, then they get on a call, then they visit if it helps. Paying city-centre rent to impress a passer-by is a very expensive billboard.',
      },
      {
        type: 'p',
        text: 'I have also done the other version: park, sit in traffic, lose a day to a meeting that should have been an hour. When you are the person who still wants to design, that is not a badge of honour. It is a leak.',
      },
      {
        type: 'image',
        src: BLOG_IMG.studioTalk,
        alt: 'A one-to-one conversation in the studio',
      },
      {
        type: 'h2',
        id: 'getting-here',
        text: 'Getting here',
      },
      {
        type: 'p',
        text: `We are at West Pt in Leeds — ${brand.address.lines.join(', ')}. Trains, a walkable centre when we need it, and a room clients can come to without turning the day into a logistics exercise. Nobody has ever told us they went with someone else because we were not on a more fashionable street.`,
      },
      {
        type: 'p',
        text: 'Most of the relationship is still email, Figma, and a sensible call. The studio is for the days that need a table. That is enough. If you have a story about where you work and why, I would like to hear it — we are not precious about the postcode. We are precious about the work.',
      },
    ],
  },
  {
    slug: 'types-of-clients',
    title: 'Types of clients we want to work with',
    excerpt: `Here at ${brand.name} in Leeds, we want to create websites for nice people. Here's a list of the types of clients we want to work with.`,
    readTime: '6 min read',
    cover: BLOG_IMG.clientMeeting,
    coverAlt: 'Two people reviewing work together at a studio desk',
    ...andy,
    body: [
      {
        type: 'p',
        text: `Here at ${brand.name} in Leeds, we want to create websites for nice people. That sounds soft. It is the most practical filter we have. The work is better, the timeline is calmer, and nobody has to pretend in the standup.`,
      },
      {
        type: 'h2',
        id: 'nice-people-first',
        text: 'Nice people first',
      },
      {
        type: 'p',
        text: 'We can design for almost any sector. We cannot design well for someone who wants a punching bag, a yes-machine, or a factory that will swallow a bad brief and spit out a theme. If you are proud of what you sell and curious about how it could show up online, we will get on.',
      },
      {
        type: 'p',
        text: 'The projects on our site are the proof, not the pitch. Anovair, Aqua, Proud Mary, Emna Studio — different businesses, same pattern. A founder or marketing lead who cared, who let us in, and who wanted the thing to be good rather than merely launched.',
      },
      {
        type: 'image',
        src: BLOG_IMG.conference,
        alt: 'A working session with the people who actually make the decisions',
      },
      {
        type: 'h2',
        id: 'the-list',
        text: 'The list',
      },
      {
        type: 'p',
        text: 'If you recognise yourself in a few of these, you are probably our kind of client.',
      },
      {
        type: 'ul',
        items: [
          'People who are proud of the product, the service, or the place — and want the site to tell the truth about it.',
          'Founders and marketing leads who will be in the room, not a committee that only appears at the end.',
          'Businesses that want a relationship after launch: content, SEO, a Shopify season, a Craft rebuild, not a fire-and-forget PDF.',
          'Teams who already have taste, even if they do not have the hours to execute it.',
          'Independent brands and in-house teams who would rather hire a small studio than get lost in a large one.',
          'People who can laugh on a call. We will still take the work seriously.',
        ],
      },
      {
        type: 'image',
        src: BLOG_IMG.collabCafe,
        alt: 'A relaxed table with the kind of clients we like working with',
      },
      {
        type: 'h2',
        id: 'what-we-walk-away-from',
        text: 'What we walk away from',
      },
      {
        type: 'p',
        text: 'We walk away from briefs that are really a request to copy a competitor, from timelines that assume weekends are a resource, and from anyone who talks about “resources” when they mean people. We also walk away when the product is something we would not want our names next to. That is not a moral lecture. It is how you keep a small studio intact.',
      },
      {
        type: 'p',
        text: 'If this reads like a dating profile, good. A website project is a few months of trusting each other with unfinished work. We would rather be picky at the start than polite all the way through a bad fit.',
      },
      {
        type: 'p',
        text: `If you still think we would get on, say hello — ${brand.email}. The worst we will do is tell you honestly if we are not the right studio.`,
      },
    ],
  },
  {
    slug: 'small-design-agency',
    title: 'Why I chose to work for a small design agency',
    excerpt:
      "The size of the business you work for should be well-considered when looking for a job in design. Here's why I chose to work for a small design agency...",
    readTime: '4 min read',
    cover: BLOG_IMG.studioTalk,
    coverAlt: 'A one-to-one conversation in a small studio',
    ...ella,
    body: [
      {
        type: 'p',
        text: 'The size of the business you work for should be well-considered when you are looking for a job in design. Portfolio, software, salary — those get the attention. How many people sit between you and the actual work is the thing that shapes your week.',
      },
      {
        type: 'h2',
        id: 'size-is-part-of-the-job',
        text: 'Size is part of the job',
      },
      {
        type: 'p',
        text: 'In a large agency you can learn a lot, quickly, and you can also spend a year polishing other people’s decks. I wanted my name on the identity, not on the file path. I wanted to sit with a founder, hear why the brand exists, and still be the person drawing the thing the next morning.',
      },
      {
        type: 'p',
        text: `That is why I chose ${brand.name}. A small studio in Leeds, a real table, and a team that still does the work they talk about on the website.`,
      },
      {
        type: 'image',
        src: BLOG_IMG.collabGlass,
        alt: 'Collaborating on brand work in the studio',
      },
      {
        type: 'h2',
        id: 'what-a-small-studio-feels-like',
        text: 'What a small studio feels like',
      },
      {
        type: 'p',
        text: 'It feels like responsibility. If the type is wrong, there is no brand team two floors up to absorb it. If the colour dies on a product page, I will see it on a phone the same afternoon. That would scare some people. It is the reason I get better.',
      },
      {
        type: 'p',
        text: 'It also feels like range. One week I am in an identity for a practice that also sells furniture. The next I am making sure a sale still looks like a brand. You do not get siloed into “only social” or “only keylines” unless you ask to be.',
      },
      {
        type: 'ul',
        items: [
          'You talk to clients, not only to an account manager.',
          'You see work ship, not only work presented.',
          'You get opinions from developers before the file is “final.”',
          'You are allowed to care about the room as well as the Figma file.',
        ],
      },
      {
        type: 'image',
        src: BLOG_IMG.deskOverhead,
        alt: 'Brand thinking on paper as often as it starts on a screen',
      },
      {
        type: 'h2',
        id: 'why-im-still-here',
        text: "Why I'm still here",
      },
      {
        type: 'p',
        text: 'I am still here because the people are still here. A small agency only works if the culture is not a performance. Ours is not. We argue about type. We go to the pub. We take the work personally without taking ourselves too seriously.',
      },
      {
        type: 'p',
        text: `If you are choosing your next studio, visit the room. Look at who is actually designing. Ask who the client met last week. Then decide. For me, the answer was a small design agency in Leeds — and I would make the same choice again.`,
      },
    ],
  },
]

export function getBlogPost(slug: string | undefined): BlogPost | undefined {
  if (!slug) return undefined
  return blog.find((post) => post.slug === slug)
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  const index = blog.findIndex((post) => post.slug === slug)
  if (index < 0) return blog.slice(0, count)

  const related: BlogPost[] = []
  for (let offset = 1; offset < blog.length && related.length < count; offset += 1) {
    const next = blog[(index + offset) % blog.length]
    if (next) related.push(next)
  }
  return related
}

export function getPostHeadings(post: BlogPost): BlogHeading[] {
  return post.body.flatMap((block) => (block.type === 'h2' ? [{ id: block.id, text: block.text }] : []))
}
