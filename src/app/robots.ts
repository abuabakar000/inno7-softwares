import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/actions/"],
      },
    ],
    sitemap: "https://inexlabs.com/sitemap.xml",
  };
}
