// lib/structured-data.ts
export const companyStructuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "The Skyprint Global Services Limited",
  description:
    "Professional printing solutions for corporate branding, technical printing, merchandise, and event branding",
  url: "https://www.globalskyprint.com",
  telephone: "+2348067614781",
  email: "info@skyprint.com",
  logo: "https://www.globalskyprint.com/logo.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "2, Ayinde Street, Off Ikate",
    addressLocality: "Lagos",
    addressRegion: "Lagos",
    postalCode: "100001",
    addressCountry: "NG",
  },
  // sameAs: [
  //   "https://www.facebook.com/skyprint",
  //   "https://www.twitter.com/skyprint",
  //   "https://www.linkedin.com/company/skyprint",
  //   "https://www.instagram.com/skyprint",
  // ],
  priceRange: "₦1,000 - ₦500,000+",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  image: "https://www.globalskyprint.com/og_image.png",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
  },
};

export const productStructuredData = (
  name: string,
  description: string,
  price: number | null,
  image: string,
  url: string,
) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name,
  description,
  image,
  url,
  brand: {
    "@type": "Brand",
    name: "The Skyprint Global Services Limited",
  },
  ...(price && {
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "NGN",
      price: price.toString(),
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "The Skyprint Global Services Limited",
      },
    },
  }),
});

export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Skyprint Global Services Limited",
  url: "https://www.globalskyprint.com",
  logo: "https://www.globalskyprint.com/logo.png",
  description:
    "Professional printing solutions for corporate branding, technical printing, merchandise, and event branding",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: "+2348067614781",
    email: "info@skyprint.com",
  },
  sameAs: [
    "https://www.facebook.com/skyprint",
    "https://www.twitter.com/skyprint",
    "https://www.linkedin.com/company/skyprint",
  ],
};
