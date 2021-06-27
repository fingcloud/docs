import Layout from 'components/Layout'
import { MDXProvider } from "@mdx-js/react"
import 'styles/globals.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {

  console.log('Component', Component)
  console.log('pageProps', pageProps)
  return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
