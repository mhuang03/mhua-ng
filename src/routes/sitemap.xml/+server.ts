import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ url }) => {
  const body = sitemap(pages);
  const response = new Response(body);
  return response;
};

const site = "https://mhua.ng";
const pages: string[] = ["", "things", "thoughts"];

const posts = import.meta.glob("/src/lib/thoughts/*.md", { eager: true });
for (const path of Object.keys(posts)) {
  const file = posts[path];
  if (file && typeof file === "object" && "metadata" in file) {
    const metadata = file.metadata as { published?: boolean };
    if (metadata.published === false) continue;
  }
  const slug = path.split("/").at(-1)?.replace(".md", "");
  if (slug) pages.push(`thoughts/${slug}`);
}

const sitemap = (pages: string[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
  xmlns:xhtml="https://www.w3.org/1999/xhtml"
  xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
  xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
  xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
>
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${site}/${page}</loc>
    <changefreq>daily</changefreq>
    <priority>0.5</priority>
  </url>
  `
    )
    .join("")}
</urlset>`;
