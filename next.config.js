const withPlugins = require('next-compose-plugins')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
}

module.exports = withPlugins([
  withMDX
], nextConfig)
