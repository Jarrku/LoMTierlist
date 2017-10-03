import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            media="screen"
            href="https://fontlibrary.org/face/glacial-indifference"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:200,300,400,600|Roboto:300,500,700"
            rel="stylesheet"
          />

          <title>Tierlist</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
