import React from 'react'
import { Content } from './Content'
import { useRouter } from 'next/dist/client/router'
import { ArticleJsonLd, NextSeo } from 'next-seo'
import { TableOfContent } from './TableOfContent'

export default function Layout({ children, meta }) {
  const router = useRouter()
  const url = `https://docs.fing.ir${router.asPath}`

  const headers = React.Children.toArray(children)
    .filter(
      (child) =>
        child.props?.mdxType && ['h2', 'h3'].includes(child.props.mdxType)
    )
    .map((child) => ({
      url: '#' + child.props.id,
      depth:
        (child.props?.mdxType &&
          parseInt(child.props.mdxType.replace('h', ''), 0)) ??
        0,
      text: child.props.children[1],
    }))

  return (
    <>
      <NextSeo
        title={meta.title}
        description={meta.description}
        canonical={url}
        openGraph={{
          type: 'article',
          title: meta.title,
          description: meta.description,
          url,
        }}
      />

      <ArticleJsonLd
        url={url}
        description={meta.description}
        title={meta.title}
        images={[]}
        datePublished={meta.created_at}
        dateModified={meta.modified_at}
        authorName="Fing"
        publisherLogo="https://fing.ir/images/icon.png"
        publisherName="Fing"
      />
      <Content >{children}</Content>
      <TableOfContent headers={headers} />
    </>
  )
}

export const withLayout = (matter) => {
  const Layout = ({ children }) => <Layout>{children}</Layout>
  return Layout
}
