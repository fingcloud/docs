import Fuse from 'fuse.js'
import data from '.next/cached-pages.json'

const cached = new Fuse(data, {
  keys: [
    { name: 'title', weight: 3 },
    { name: 'description', weight: 1 },
  ],
  includeScore: true,
  shouldSort: true,
})

async function handler(req, res) {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')

  const result = cached.search(req.query.q)?.map(({item}) => ({
    title: item.title,
    description: item.description,
    href: item.href,
  }))

  res.end(JSON.stringify(result))
}

export default handler