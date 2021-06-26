const withPlugins = require('next-compose-plugins')
const withMdxEnhanced = require("next-mdx-enhanced");

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPlugins([
  withMdxEnhanced({
    layoutPath: "components/layouts",
    defaultLayout: true,
    fileExtensions: ["mdx", "md"],
    remarkPlugins: [],
    rehypePlugins: [],
  })
], nextConfig)
