export type WorkStill = {
  src: string
  alt: string
}

export type WorkChapter = {
  eyebrow: string
  heading: string
  body: string
}

export type WorkCaseStudy = {
  headline: string
  dek: string
  body: string
  industry: string
  duration: string
  video: string
  poster: string
  stills: WorkStill[]
  chapters: WorkChapter[]
}

export type WorkItem = {
  id: string
  client: string
  year: string
  title: string
  tags: string[]
  image: string
  imageAlt: string
  imagePosition: string
  href: string
  liveUrl: string
  caseStudy?: WorkCaseStudy
}

export type WorkCaseStudyItem = WorkItem & { caseStudy: WorkCaseStudy }

export function isWorkCaseStudyItem(item: WorkItem): item is WorkCaseStudyItem {
  return item.caseStudy !== undefined
}
