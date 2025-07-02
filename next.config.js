/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [new URL('https://cdn.discordapp.com/**')],
  },
}

module.exports = nextConfig
