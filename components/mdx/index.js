import { H1, H2, H3, H4, H5, H6 } from 'components/mdx/Heading'
import { Code } from './Code'
import { Image } from './Image'
import { Inline } from './Inline'
import { List, ListItem, OrderedList } from './List'
import { Link, Paragraph } from './Text'

export const components = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: Paragraph,
  ul: List,
  li: ListItem,
  ol: OrderedList,
  inlineCode: Inline,
  a: Link,
  code: Code,
  img: Image,
}