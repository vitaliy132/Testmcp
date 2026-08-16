import { motion } from 'framer-motion'
import { blog } from '@/data/content'

export function Blog() {
  return (
    <section id="blog" className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-5 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-medium text-nd-muted dark:text-white/55">From the studio</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] tracking-tight">The latest from our design studio</h2>
          </div>
          <a href="https://madebyshape.co.uk/web-design-blog/" className="btn-soft">
            Visit our blog
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blog.map((post, i) => (
            <motion.a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-[1.35rem] bg-nd-soft dark:bg-[#1a1a1a]">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <img
                  src={post.authorImage}
                  alt=""
                  className="absolute left-3 top-3 h-10 w-10 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="mt-3 text-xs font-medium text-nd-muted dark:text-white/50">{post.readTime}</div>
              <h3 className="mt-1 text-lg font-medium tracking-tight lg:text-xl">{post.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm text-nd-muted dark:text-white/55">{post.excerpt}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
