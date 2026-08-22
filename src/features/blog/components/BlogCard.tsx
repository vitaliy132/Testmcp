import { blogPost } from '@/config/routes'
import type { BlogPost } from '@/features/blog/data'
import { CornerFillet } from '@/components/ui/CornerFillet'
import { SmartLink } from '@/components/ui/SmartLink'
import { MediaImage } from '@/components/ui/MediaImage'

function AuthorCutout({ src, name }: { src: string; name: string }) {
  return (
    <div className="absolute bottom-0 left-0 z-20 rounded-tr-2xl bg-white pb-0 pr-2 pt-2 dark:bg-nd-dark lg:rounded-tr-3xl lg:pr-3 lg:pt-3">
      <CornerFillet className="absolute top-0 left-px h-5 w-5 -translate-y-full text-white dark:text-nd-dark lg:h-6 lg:w-6" />
      <CornerFillet className="absolute right-0 bottom-px h-5 w-5 translate-x-full text-white dark:text-nd-dark lg:h-6 lg:w-6" />
      <MediaImage
        src={src}
        alt={name}
        width={48}
        height={48}
        sizes="48px"
        className="h-10 w-10 rounded-full object-cover lg:h-12 lg:w-12"
      />
    </div>
  )
}

export function BlogCard({
  post,
  className = '',
}: {
  post: BlogPost
  className?: string
}) {
  return (
    <SmartLink href={blogPost(post.slug)} className={`group flex flex-col items-start ${className}`.trim()}>
      <div className="relative mb-5 w-full">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl rounded-bl-xl bg-nd-soft lg:rounded-3xl lg:rounded-bl-2xl dark:bg-[#1a1a1a]">
          <MediaImage
            src={post.cover}
            alt={post.coverAlt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        </div>
        <AuthorCutout src={post.authorImage} name={post.author} />
      </div>
      <div className="text-xs font-medium text-nd-muted dark:text-white/50">{post.readTime}</div>
      <h3 className="mt-1 text-lg font-medium tracking-tight transition group-hover:text-nd-ink lg:text-xl dark:group-hover:text-white">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm text-nd-muted dark:text-white/55">{post.excerpt}</p>
    </SmartLink>
  )
}
