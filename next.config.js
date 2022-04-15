/** @type {import('next').NextConfig} */

const path = require('path')

const dev = process.env.NODE_ENV !== 'production'

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname)
    return config
  },
  env: {
    BASE_URL: dev ? 'http://localhost:3000/graphql' : 'https://oguzhanyilmaz.herokuapp.com/graphql',
  },
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },


}

// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
