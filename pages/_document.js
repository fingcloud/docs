import NextDocument, { Head, Html, Main, NextScript } from "next/document"
import Favicon from "components/Favicon"

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    return await NextDocument.getInitialProps(ctx)
  }
  render() {
    return (
      < Html dir={'rtl'} lang={'fa'} >
        <Head>
          <Favicon />
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html >
    )
  }
}

export default Document