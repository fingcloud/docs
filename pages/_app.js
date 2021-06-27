import { MDXProvider } from "@mdx-js/react"
import { components } from 'components/mdx'
import NextNprogress from 'nextjs-progressbar';
import 'styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {

  return (
    <MDXProvider components={components}>
      <NextNprogress className="bg-indigo-500" color="#6366f1" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
