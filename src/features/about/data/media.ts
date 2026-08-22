import { BLOG_IMG, IMG } from '@/config/assets'

/** Demo CDN — MadeByShape imagery kept for visual fidelity. */
export const CDN = 'https://made-byshape.transforms.svdcdn.com/production/uploads/images'

export const award = (file: string, dm: string, s: string) =>
  `${CDN}/Awards/${file}?w=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=${dm}&s=${s}`

/** Nine local studio stills for the arched carousel (plus one staged duplicate in AboutHero). */
export const aboutHeroImages: string[] = [
  IMG.studio,
  BLOG_IMG.studioFloor,
  BLOG_IMG.workshop,
  IMG.sketch,
  BLOG_IMG.studioTalk,
  BLOG_IMG.openOffice,
  BLOG_IMG.meetingRoom,
  BLOG_IMG.clientMeeting,
  BLOG_IMG.smallTeam,
]

export type AboutShowreel = {
  src: string
  poster: string
}

export const aboutShowreel: AboutShowreel = {
  src: 'https://servd-made-byshape.b-cdn.net/production/uploads/videos/shape-showreel-2024_looping-v3.mp4',
  poster: '/images/studio/hr-204.webp',
}

