/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/digital-marketing-agency-in-tirunelveli.html',
        destination: '/digital-marketing-agency-in-tirunelveli',
        permanent: true,
      },
    ]
  },
  // During local development, proxy /admin to the Vite dev server on port 5173.
  // In production, serve the built admin SPA from public/admin/ index.html for
  // route entry points while allowing direct static assets to be served.
  async rewrites() {
    if (process.env.NODE_ENV !== 'production') {
      return [
        {
          source: '/admin',
          destination: 'http://127.0.0.1:5173/admin/',
        },
        {
          source: '/admin/:path*',
          destination: 'http://127.0.0.1:5173/admin/:path*',
        },
      ]
    }

    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
      {
        source: '/admin/:path((?!assets/|_next/|.*\\..*).*)',
        destination: '/admin/index.html',
      },
    ]
  },
}

export default nextConfig
