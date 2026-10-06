/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/digital-marketing-agency-in-tirunelveli.html',
        destination: '/digital-marketing-agency-in-tirunelveli',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
