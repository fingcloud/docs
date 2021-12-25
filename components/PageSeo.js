import { ArticleJsonLd, NextSeo } from "next-seo"

export const PageSeo = ({ title, description, url, created_at, modified_at }) => {
  const fullUrl = `https://docs.fing.ir${url}`

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={fullUrl}
        openGraph={{
          type: 'article',
          title: title,
          description: description,
          url,
        }}
      />

      < ArticleJsonLd
        url={fullUrl}
        description={description}
        title={title}
        images={[]}
        datePublished={created_at}
        dateModified={modified_at}
        authorName="Fing"
        publisherLogo="https://fing.ir/images/icon.png"
        publisherName="Fing"
      />
    </>
  )
}