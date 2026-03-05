import type { RequestHandler } from "./$types";

const site = "https://mhua.ng";
const staticPages: string[] = ["", "things", "thoughts"];

type PostEntry = { slug: string; date?: string };
const postEntries: PostEntry[] = [];

const posts = import.meta.glob("/src/lib/thoughts/*.md", { eager: true });
for (const path of Object.keys(posts)) {
  const file = posts[path];
  if (file && typeof file === "object" && "metadata" in file) {
    const metadata = file.metadata as { published?: boolean; date?: string };
    if (metadata.published === false) continue;
    const slug = path.split("/").at(-1)?.replace(".md", "");
    if (slug) postEntries.push({ slug, date: metadata.date });
  }
}

export const GET: RequestHandler = async () => {
  return new Response(sitemap(staticPages, postEntries), {
    headers: { "Content-Type": "application/xml" },
  });
};

const sitemap = (pages: string[], postItems: PostEntry[]) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${site}/${page}</loc>
    <priority>0.5</priority>
  </url>`
    )
    .join("")}
  ${postItems
    .map(
      (post) => `
  <url>
    <loc>${site}/thoughts/${post.slug}</loc>
    ${post.date ? `<lastmod>${post.date}</lastmod>` : ""}
    <priority>0.5</priority>
  </url>`
    )
    .join("")}
</urlset>`;
