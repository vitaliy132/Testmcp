import { IMG } from '@/data/assets'

export const PLANNER_SERVICE_OPTIONS = [
  'Website',
  'eCommerce',
  'SEO',
  'Branding',
  'Illustration',
  'Photography',
  'Videography',
  'Content Writing',
  'Web Hosting',
  'I want it all!',
] as const

export type PlannerService = (typeof PLANNER_SERVICE_OPTIONS)[number]

export type PlannerFormData = {
  fullName: string
  emailAddress: string
  company: string
  date: string
  priceFrom: string
  priceTo: string
  services: PlannerService[]
  summary: string
  briefFileName: string | null
  newsletter: boolean
}

export const initialPlannerForm: PlannerFormData = {
  fullName: '',
  emailAddress: '',
  company: '',
  date: '',
  priceFrom: '',
  priceTo: '',
  services: ['Website'],
  summary: '',
  briefFileName: null,
  newsletter: false,
}

export type PlannerStep = {
  id: number
  heading: string
  mediaCaption: string
  mediaImage: string
  progress: number
}

export const plannerSteps: PlannerStep[] = [
  {
    id: 1,
    heading: 'Let’s start at the very beginning',
    mediaCaption: 'A quick intro from Northern Digital',
    mediaImage: IMG.studio1,
    progress: 25,
  },
  {
    id: 2,
    heading: 'Let’s talk budget & timelines',
    mediaCaption: 'The most crucial part of a partnership',
    mediaImage: IMG.studio2,
    progress: 50,
  },
  {
    id: 3,
    heading: 'What services do you require?',
    mediaCaption: 'What do you need us for?',
    mediaImage: IMG.studio3,
    progress: 75,
  },
  {
    id: 4,
    heading: 'Give us the deets!',
    mediaCaption: 'Why a brief is so important',
    mediaImage: IMG.studio6,
    progress: 100,
  },
]

export const PLANNER_TOTAL_STEPS = plannerSteps.length

const emailOk = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export function validatePlannerStep(step: number, data: PlannerFormData): string | null {
  if (step === 1) {
    if (!data.fullName.trim()) return 'Please enter your name.'
    if (!data.emailAddress.trim() || !emailOk(data.emailAddress)) return 'Please enter a valid email.'
    if (!data.company.trim()) return 'Please enter your company.'
  }
  if (step === 2) {
    if (!data.date.trim()) return 'Please enter a launch date (DD/MM/YYYY).'
    if (!data.priceFrom.trim()) return 'Please enter a minimum budget.'
    if (!data.priceTo.trim()) return 'Please enter a maximum budget.'
  }
  if (step === 3) {
    if (data.services.length === 0) return 'Please select at least one service.'
  }
  if (step === 4) {
    if (!data.summary.trim()) return 'Please provide a summary of your project.'
  }
  return null
}

export function buildPlannerMessage(data: PlannerFormData): string {
  return [
    `Name: ${data.fullName}`,
    `Email: ${data.emailAddress}`,
    `Company: ${data.company}`,
    `Launch date: ${data.date}`,
    `Budget: £${data.priceFrom} – £${data.priceTo}`,
    `Services: ${data.services.join(', ')}`,
    `Summary:\n${data.summary}`,
    data.briefFileName ? `Brief file: ${data.briefFileName}` : null,
    `Newsletter: ${data.newsletter ? 'Yes' : 'No'}`,
  ]
    .filter(Boolean)
    .join('\n')
}

export function buildPlannerSubject(data: PlannerFormData): string {
  return `Project enquiry — ${data.company || data.fullName}`
}
