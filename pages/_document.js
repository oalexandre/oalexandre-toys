import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="pt-BR">
    <Head>
      <meta charSet="utf-8" />
      <meta name="theme-color" content="#5b2fd1" />
      <meta name="application-name" content="oAlexandre Toys" />
      <meta name="apple-mobile-web-app-title" content="oAlexandre Toys" />
      <meta name="author" content="Alexandre Klostermann" />

      <link rel="icon" href="/favicon.ico" sizes="48x48" />
      <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon-192.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
