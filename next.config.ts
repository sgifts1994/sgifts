import type { NextConfig } from "next";

/**
 * النشر على GitHub Pages:
 * الموقع بيخدم من https://<user>.github.io/<repo>/ فالمسارات محتاجة basePath.
 *
 * - اسم الريبو هنا لازم يطابق اسم الريبو على GitHub تمامًا.
 * - لو الريبو اسمه <user>.github.io أو هتربطي دومين خاص، شيلي basePath وassetPrefix.
 * - محليًا (`bun run dev`) مفيش basePath، فالصفحات بتفتح على http://localhost:3000
 *   والـ basePath بيتفعّل وقت الـ build بس (GITHUB_PAGES=true في الـ workflow).
 */
const repoName = "sgifts";
const onGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // مطلوب لـ GitHub Pages: بيمنع تحسين الصور على السيرفر ويطلع ملفات ثابتة في out/
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    // Add the remote hosts of real product photos here once the catalog moves to a CMS.
    remotePatterns: [],
  },
  basePath: onGithubPages ? `/${repoName}` : "",
  assetPrefix: onGithubPages ? `/${repoName}/` : undefined,
};

export default nextConfig;
