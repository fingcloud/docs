import { DefaultSeo } from "next-seo";
import { MDXProvider } from "@mdx-js/react"
import { components } from 'components/mdx'
import NextNprogress from 'nextjs-progressbar';
import 'styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {

  return (
    <MDXProvider components={components}>
      <DefaultSeo
        title='مستندات فینگ'
        description='مستندات سرویس ابری فینگ'
        canonical='https://docs.fing.ir/'
        titleTemplate='%s | مستندات فینگ'
        openGraph={{
          description: 'مستندات سرویس ابری فینگ',
          type: 'website',
          locale: 'fa_IR',
          url: 'https://docs.fing.ir,',
          site_name: 'مستندات فینگ',
          title: 'مستندات فینگ'
        }}
        twitter={{
          handle: '@fingcloud',
          site: '@fingcloud',
          cardType: 'summary_large_image',
        }}
      />
      <NextNprogress className="bg-indigo-500" color="#6366f1" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
