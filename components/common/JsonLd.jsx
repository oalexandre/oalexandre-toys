import Head from "next/head";

/** Injeta um bloco JSON-LD no <head>. Aceita um objeto ou uma lista. */
const JsonLd = ({ data }) => {
  const items = Array.isArray(data) ? data : [data];
  return (
    <Head>
      {items.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </Head>
  );
};

export default JsonLd;
