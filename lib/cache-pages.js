const fs = require('fs')
const glob = require('glob')
const matter = require('gray-matter')
const path = require('path')

const pagePath = path.join(process.cwd(), "pages", "**/*.mdx")
const files = glob.sync(pagePath)

const data = files.map(item => {
  if (item.endsWith("index.mdx")) return

  const filepath = item.replace(process.cwd() + "/pages/", "")
  const filecontent = fs.readFileSync(item, 'utf-8')
  const { content, data } = matter(filecontent)

  return {
    name: path.basename(filepath.replace(".mdx", "")),
    ...data,
    href: "/" + filepath.replace(".mdx", ""),
    content,
  }
})

fs.writeFileSync('data/cached-pages.json', JSON.stringify(data), 'utf-8')