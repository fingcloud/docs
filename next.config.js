const withPlugins = require('next-compose-plugins')
const fontmatterPlugin = require('./lib/frontmatter')
const autolinkHeaddings = require('remark-autolink-headings')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      autolinkHeaddings,
      fontmatterPlugin,
    ],
    rehypePlugins: [],
  }
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
}

module.exports = withPlugins([
  withMDX
], nextConfig)
