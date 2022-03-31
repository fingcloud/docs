import { DefaultSeo } from "next-seo"
import { MDXProvider } from "@mdx-js/react"
import { components } from 'components/mdx'
import NextNprogress from 'nextjs-progressbar'
import { Sidebar } from "components/Sidebar"
import { Navbar } from "components/Navbar"
import 'styles/globals.css'

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
      
      <Navbar />

      <main className="relative w-full px-4 mx-auto md:flex max-w-screen-2xl sm:px-6 lg:px-8 py-36">
        <Sidebar />
        <Component {...pageProps} />
      </main>
    </MDXProvider>
  )
}

export default MyApp
