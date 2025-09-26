import Head from "next/head";

const SEO = ({ description, title, url, imageUrl, keywords }) => {
  const baseUrl = "https://toys.oalexandre.com.br/";
  const fullUrl = `${baseUrl}${url}`;

  return (
    <Head>
      <title>{`${title} | oAlexandre Toys`}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Portuguese" />
      <meta name="author" content="Alexandre - oAlexandre.com.br" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="oAlexandre Toys" />
      <meta
        property="og:image"
        content={
          imageUrl ? `${baseUrl}/previews${imageUrl}` : `${baseUrl}/logos/oalexandre-logo.png`
        }
      />
      <meta property="og:locale" content="pt_BR" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={
          imageUrl ? `${baseUrl}/previews${imageUrl}` : `${baseUrl}/logos/oalexandre-logo.png`
        }
      />
      <meta property="twitter:site" content="@oalexandre" />
      <meta property="twitter:creator" content="@oalexandre" />
    </Head>
  );
};

export default SEO;
