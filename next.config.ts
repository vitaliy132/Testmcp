import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      {
        source: '/faqs',
        destination: '/frequently-asked-questions',
        permanent: true,
      },
      {
        source: '/:path((?!projects/).*)/',
        destination: '/:path',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/projects/:project/',
          destination: '/projects/:project/index.html',
        },
      ],
    }
  },
}

export default nextConfig
