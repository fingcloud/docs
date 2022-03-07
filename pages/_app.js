import { DefaultSeo } from "next-seo"
import { MDXProvider } from "@mdx-js/react"
import { components } from 'components/mdx'
import NextNprogress from 'nextjs-progressbar'
import 'styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Sidebar } from "components/Sidebar"
import { Content } from "components/Content"

function MyApp({ Component, pageProps }) {

  return (
    <MDXProvider components={components}>
      <DefaultSeo
        title='مستندات فینگ'
        description='مستندات سرویس ابری فینگ'
        canonical='https://fing.ir/docs'
        titleTemplate='%s | مستندات فینگ'
        openGraph={{
          description: 'مستندات سرویس ابری فینگ',
          type: 'website',
          locale: 'fa_IR',
          url: 'https://fing.ir/docs',
          site_name: 'مستندات فینگ',
          title: 'مستندات فینگ'
        }}
        twitter={{
          handle: '@fingcloud',
          site: '@fingcloud',
          cardType: 'summary_large_image',
        }}
      />
      <NextNprogress className="bg-blue-500" color="#2176ff" options={{ showSpinner: false }} />
      <div className="relative flex max-w-6xl min-h-screen mx-auto">
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </MDXProvider>
  )
}

export default MyApp
