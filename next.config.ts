import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/faqs',
        destination: '/frequently-asked-questions',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/projects/:project',
        destination: '/projects/:project/index.html',
      },
      {
        source: '/projects/:project/',
        destination: '/projects/:project/index.html',
      },
    ]
  },
}

export default nextConfig
