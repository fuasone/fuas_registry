/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'FUASONE',
    description: 'FUASONE ',
    icon: 'https://github.com/fuasone/fuas_registry/tree/1.0/site/fuasonelogo.svg',
    listUrl: 'https://github.com/fuasone/fuas_registry/',
    contactUrl: 'https://github.com/fuasone/fuas_registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/fuas_registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
