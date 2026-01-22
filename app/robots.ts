import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/cart", "/checkout", "/?*", "/*utm*", "/admin"],
        crawlDelay: 1,
      },
      {
        userAgent: "Googlebot",
        allow: ["/"],
        crawlDelay: 1,
      },
      {
        userAgent: "Bingbot",
        allow: ["/"],
        crawlDelay: 1,
      },
      {
        userAgent: ["AhrefsBot", "SemrushBot", "DotBot"],
        disallow: "/",
      },
    ],
    sitemap: "https://www.globalskyprint.com/sitemap.xml",
  };
}
