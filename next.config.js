/** @type {import('next').NextConfig} */
const nextConfig = {
  /*eslint: {
    ignoreDuringBuilds: true,
  },*/
  images: {
    remotePatterns: [new URL('https://cdn.discordapp.com/**'), new URL('http://localhost:3000/**')],
  },
}

module.exports = nextConfig
