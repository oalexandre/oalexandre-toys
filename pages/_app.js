import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import Script from "next/script";

import Toast from "../components/common/Toast";
import Layout from "../components/layout";
import GlobalStateProvider from "../context/GlobalContext";
import theme from "../theme";

import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
          
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-MFE6KDGLRK"
      />
          
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXX', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
          
      <ThemeProvider theme={theme}>
        <GlobalStateProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Toast />
        </GlobalStateProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
