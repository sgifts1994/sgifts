import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

// مطلوب مع output: "export" عشان robots.txt يتولّد كملف ثابت وقت الـ build.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cart", "/checkout"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
