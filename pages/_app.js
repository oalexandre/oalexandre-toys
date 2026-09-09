import { CssBaseline, GlobalStyles } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { JetBrains_Mono, Onest } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect } from "react";

import Layout from "../components/layout";
import theme from "../theme";
import { pageview } from "../utils/gtag";

import "../styles/globals.css";

const sans = Onest({ subsets: ["latin"], display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap", weight: ["400", "500"] });

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    if (!GA_ID) return undefined;
    const handleRouteChange = url => pageview(url);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {GA_ID && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `,
            }}
          />
        </>
      )}

      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            html: {
              "--font-sans": sans.style.fontFamily,
              "--font-mono": mono.style.fontFamily,
              fontFamily: `${sans.style.fontFamily}, sans-serif`,
            },
          }}
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
