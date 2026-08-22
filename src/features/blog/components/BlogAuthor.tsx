import { anchors } from '@/config/routes'
import { blogPageCopy } from '@/features/blog/copy'
import type { BlogPost } from '@/features/blog/types'
import { SmartLink } from '@/components/ui/SmartLink'

export function BlogAuthor({
  post,
  variant = 'byline',
}: {
  post: BlogPost
  variant?: 'byline' | 'footer'
}) {
  const footer = variant === 'footer'

  return (
    <SmartLink
      href={anchors.team}
      className={`group flex gap-3 ${footer ? 'items-start sm:items-center' : 'items-center'}`}
    >
      <img
        src={post.authorImage}
        alt={post.author}
        width={footer ? 72 : 56}
        height={footer ? 72 : 56}
        loading="lazy"
        decoding="async"
        className={`rounded-full object-cover ${footer ? 'h-16 w-16 lg:h-[4.5rem] lg:w-[4.5rem]' : 'h-12 w-12 lg:h-14 lg:w-14'}`}
      />
      <div>
        <div className="text-xs font-medium text-nd-muted lg:text-sm dark:text-white/50">{blogPageCopy.writtenBy}</div>
        <div className="text-base font-medium tracking-tight group-hover:underline">{post.author}</div>
        <div className="text-sm font-light text-nd-muted dark:text-white/55">{post.authorRole}</div>
        {footer ? (
          <p className="mt-2 max-w-md text-sm font-light leading-6 text-nd-muted dark:text-white/55">{post.authorBio}</p>
        ) : null}
      </div>
    </SmartLink>
  )
}
