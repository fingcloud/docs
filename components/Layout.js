import { Sidebar } from './Sidebar'
import { Content } from './Content'
import { useRouter } from 'next/dist/client/router'
import { ArticleJsonLd, NextSeo } from 'next-seo'

export default function Layout({ children, meta }) {
  const router = useRouter()
  const url = `https://docs.fing.ir${router.asPath}`

  return (
    <div className="relative flex max-w-6xl min-h-screen mx-auto">
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
      <Sidebar />
      <Content>{children}</Content>
    </div>
  )
}

export const withLayout = (matter) => {
  const Layout = ({ children }) => <Layout>{children}</Layout>
  return Layout
}
