const ToolSchema = ({ tool }) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    url: `https://toys.oalexandre.com.br${tool.url}`,
    applicationCategory: "WebApplication",
    operatingSystem: "Any",
    browserRequirements: "JavaScript enabled",
    permissions: "No special permissions required",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BRL",
    },
    author: {
      "@type": "Person",
      name: "Alexandre",
      url: "https://oalexandre.com.br",
    },
    inLanguage: "pt-BR",
    isAccessibleForFree: true,
    applicationSubCategory: tool.category || "Productivity",
    featureList: tool.features || [],
    screenshot: tool.imageUrl
      ? `https://toys.oalexandre.com.br/previews${tool.imageUrl}`
      : undefined,
    mainEntity: {
      "@type": "WebPageElement",
      "@id": `https://toys.oalexandre.com.br${tool.url}#main-content`,
    },
  };

  // Remove undefined values
  Object.keys(schemaData).forEach(key => schemaData[key] === undefined && delete schemaData[key]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemaData),
      }}
    />
  );
};

export default ToolSchema;
