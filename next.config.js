const withPlugins = require('next-compose-plugins')
const fontmatterPlugin = require('./lib/frontmatter')
const autoSlug = require('remark-slug')
const autolinkHeaddings = require('remark-autolink-headings')

const content = {
  type: 'element',
  tagName: 'svg',
  properties: { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 16 16', className: 'absolute left-0.5 inset-y-1 w-4 h-4 opacity-0 group-hover:opacity-100' },
  children: [
    {
      type: 'element',
      tagName: 'path',
      properties: { fillRule: "evenodd", d: 'M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z' },
    }
  ]
}

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      autoSlug,
      [autolinkHeaddings, {
        content: (node) => {
          node.data.hProperties.id = encodeURI(node.data.hProperties.id)
          node.data.id = encodeURI(node.data.id)
          return node
        },
      }],
      fontmatterPlugin,
    ],
    rehypePlugins: [],
  }
})

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/cli/installation',
        destination: '/quickstart/installation',
        permanent: true,
      },
      {
        source: '/cli/quick-start',
        destination: '/quickstart/create-app',
        permanent: true,
      },
      {
        source: '/cli/commands',
        destination: '/references/commands',
        permanent: true,
      },
      {
        source: '/apps/:path*',
        destination: '/references/:path*',
        permanent: true,
      },
      {
        source: '/platform/:slug(react|vue|next|vite|nuxt|nest|angular|gastby|flask|django|docusaurus-2)',
        destination: '/quickstart/:slug',
        permanent: true,
      },
    ]
  },
  eslint: {
    // ignoreDuringBuilds: true,
  },
  // basePath: '/docs',
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
}

module.exports = withPlugins([
  withMDX
], nextConfig)
