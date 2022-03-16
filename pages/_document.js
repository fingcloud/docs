import NextDocument, { Head, Html, Main, NextScript } from "next/document"
import Favicon from "components/Favicon"
import { Yandex } from "components/Yandex"

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    return await NextDocument.getInitialProps(ctx)
  }
  render() {
    return (
      <Html dir={'rtl'} lang={'fa'} >
        <Head>
          <link href="https://fing.ir/fonts/VazirWeb/font.css" rel="stylesheet" />
          <Favicon />
          <Yandex />
        </Head>
        <body className="relative w-full h-full antialiased text-gray-600">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document