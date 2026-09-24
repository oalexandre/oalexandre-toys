import Head from "next/head";

import { SITE_NAME, SITE_URL } from "../../constants/tools";

const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * Meta tags de uma página. `title` deve ter até ~60 caracteres e
 * `description` entre 120 e 160. `noindex` marca páginas utilitárias
 * (404, offline) para não entrarem no índice.
 */
const SEO = ({ title, description, path = "/", image = DEFAULT_IMAGE, noindex = false }) => {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {/* Página fora do índice não declara canonical: a 404 apontaria para uma URL inexistente. */}
      {!noindex && <link rel="canonical" href={url} />}
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}
      />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  );
};

export default SEO;
