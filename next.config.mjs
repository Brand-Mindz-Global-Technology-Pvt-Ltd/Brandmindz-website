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
      { source: '/api/media-kit/white-logo', destination: '/media-kit/logos/Brand-Mindz-White-Logo.webp', permanent: false },
      { source: '/api/media-kit/white-logo-transparent', destination: '/media-kit/logos/Brand-Mindz-White-Logo-Transparent.png', permanent: false },
      { source: '/api/media-kit/black-logo', destination: '/media-kit/logos/Brand-Mindz-Black-Logo.webp', permanent: false },
      { source: '/api/media-kit/black-logo-transparent', destination: '/media-kit/logos/Brand-Mindz-Black-Logo-Transparent.png', permanent: false },
      { source: '/api/media-kit/founder-profile', destination: '/media-kit/founder/Brand-Mindz-Founder-Profile.pdf', permanent: false },
      { source: '/api/media-kit/founder-formal', destination: '/media-kit/founder/R-Vasanth-Kumar-Formal-Portrait.webp', permanent: false },
      { source: '/api/media-kit/founder-office', destination: '/media-kit/founder/R-Vasanth-Kumar-Office-Portrait.webp', permanent: false },
      { source: '/api/media-kit/founder-speaking', destination: '/media-kit/founder/R-Vasanth-Kumar-Speaking.webp', permanent: false },
      { source: '/api/media-kit/founder-podium', destination: '/media-kit/founder/R-Vasanth-Kumar-Keynote.webp', permanent: false },
    ]
  },
}

export default nextConfig
