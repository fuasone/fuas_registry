/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'FUASONE',
    description: 'FUASONE ',
    icon: '/site/fuasonelogo.svg',
    listUrl: 'https://github.com/fuasone/fuas_registry/',
    contactUrl: 'https://fuas.dk',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
