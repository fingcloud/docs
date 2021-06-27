const matter = require('gray-matter')
const stringifyObject = require('stringify-object')
const readingTime = require('reading-time')

module.exports = () => (tree, file) => {
  // we will get the frontMatter using `gray-matter`
  const { data, content } = matter(file.contents)

  const { text } = readingTime(content)
  data.timeToRead = text

  // Step 2: Remove frontmatter after converting it into JS object
  if(tree.children[0].type === 'thematicBreak') {
    const firstHeadingIndex = tree.children.findIndex(t => t.type === 'heading')
    if (firstHeadingIndex !== -1) {
      tree.children.splice(0, firstHeadingIndex + 1)
    }
  }
  // Step 3: Insert JSX to pass frontmatter to parent component
  tree.children.unshift({
    type: 'import',
    value: `
      import Layout from 'components/Layout'
    `
  },{
    type: 'jsx',
    value: `
    <Layout meta={frontMatter} >

    `
  })

  // Step 4: Close JSX parent component
  tree.children.push({
    type: 'jsx',
    value: `
    
    </Layout>
    `
  })

  // Step 1: Convert frontmatter to JS object and push to document tree
  tree.children.push({
    type: 'export',
    value: `
    export const frontMatter = ${stringifyObject(data)}
    `
  })
}