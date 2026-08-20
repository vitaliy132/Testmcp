import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { aboutTeam, type AboutTeamMember } from '@/features/about/data'
import { anchors } from '@/config/routes'
import { CornerFillet } from '@/components/ui/CornerFillet'
import { SmartLink } from '@/components/ui/SmartLink'

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function PlusIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 448 512" fill="currentColor" aria-hidden>
      <path d="M240 64V48h-32v192H16v32h192v192h32V272h192v-32H240V64z" />
    </svg>
  )
}

function TeamCard({ member, index = 0 }: { member: AboutTeamMember; index?: number }) {
  const [hovering, setHovering] = useState(false)
  const [hoverIndex, setHoverIndex] = useState(0)
  const hoverImages = member.hoverImages ?? []
  const profileHref = member.profileHref ?? anchors.team
  // MadeByShape: every other slide gets mt-10 / lg:mt-16 so cards zigzag, not a straight line
  const staggered = index % 2 === 0

  useEffect(() => {
    if (!hovering || hoverImages.length === 0) {
      setHoverIndex(0)
      return
    }
    const id = window.setInterval(() => {
      setHoverIndex((i) => (i + 1) % hoverImages.length)
    }, 380)
    return () => window.clearInterval(id)
  }, [hovering, hoverImages.length])

  const activeSrc =
    hovering && hoverImages.length > 0 ? hoverImages[hoverIndex] : member.image

  return (
    <article
      className={`about-team-slide group relative self-start px-2 lg:px-3 xl:px-4 ${
        staggered ? 'mt-10 lg:mt-16' : 'mt-0'
      }`}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="relative w-full">
        <SmartLink
          href={profileHref}
          className="absolute inset-0 z-10"
          aria-label={`${member.name}'s profile`}
        />

        {/* Top-right actions */}
        <div className="absolute right-3 top-3 z-20 flex items-center gap-1.5">
          {member.linkedin ? (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="grid h-8 w-8 place-items-center rounded-full bg-nd-lime text-nd-ink transition hover:bg-nd-ink hover:text-white"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
            </a>
          ) : null}
          <SmartLink
            href={profileHref}
            aria-label={`Open ${member.name}'s profile`}
            className="grid h-8 w-8 place-items-center rounded-full bg-nd-lime text-nd-ink transition duration-300 group-hover:rotate-90"
          >
            <PlusIcon className="h-3.5 w-3.5" />
          </SmartLink>
        </div>

        {/* Portrait / hover stack */}
        <div className="relative w-full overflow-hidden rounded-2xl bg-nd-soft lg:rounded-3xl dark:bg-[#1a1a1a]">
          <div className="relative w-full" style={{ paddingTop: '133.25%' }}>
            <img
              src={activeSrc}
              alt={`${member.name} portrait`}
              loading="lazy"
              decoding="async"
              className={`absolute inset-0 h-full w-full object-cover object-center transition duration-300 ${
                member.isPlaceholder ? 'opacity-80 grayscale' : ''
              } ${hovering && hoverImages.length ? 'opacity-100' : ''}`}
            />
          </div>
        </div>

        {/* Name / role cutout — bottom-left overlay (MadeByShape pattern) */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-20 pr-14">
          <div className="relative inline-flex flex-wrap rounded-tr-2xl bg-white pt-3 pr-5 lg:rounded-tr-3xl lg:pr-8 dark:bg-nd-dark">
            <CornerFillet className="absolute right-px -bottom-px h-10 w-10 translate-x-full rotate-180 text-white lg:h-12 lg:w-12 dark:text-nd-dark" />
            <CornerFillet className="absolute top-px left-0 h-10 w-10 -translate-y-full rotate-180 text-white lg:h-12 lg:w-12 dark:text-nd-dark" />
            <div>
              <div className="leading-tight tracking-tight dark:text-white">{member.name}</div>
              <div className="text-sm font-light leading-tight text-nd-muted dark:text-white/55">
                {member.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export function InfiniteTeamCarousel() {
  const reduceMotion = useReducedMotion()
  const items = [...aboutTeam, ...aboutTeam]

  if (reduceMotion) {
    return (
      <div className="about-team-viewport flex items-start overflow-x-auto pb-6 scrollbar-none">
        {aboutTeam.map((member, i) => (
          <TeamCard key={`${member.name}-${member.role}`} member={member} index={i} />
        ))}
      </div>
    )
  }

  return (
    <div className="about-team-viewport w-full overflow-hidden pb-6">
      <div className="animate-about-team-marquee flex items-start">
        {items.map((member, i) => (
          <TeamCard key={`${member.name}-${member.role}-${i}`} member={member} index={i} />
        ))}
      </div>
    </div>
  )
}
