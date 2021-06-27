import NextDocument, { Head, Html, Main, NextScript } from "next/document"

class Document extends NextDocument {
  static async getInitialProps(ctx) {
    return await NextDocument.getInitialProps(ctx)
  }
  render() {
    // const { locale } = this.props.__NEXT_DATA__
    // const dir = locale === "fa" ? "rtl" : "ltr"
    return (
      < Html dir={'rtl'} lang={'fa'} >
        <Head />
        <body >
          <Main />
          <NextScript />
        </body>
      </Html >
    )
  }
}

export default Document