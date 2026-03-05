import type { Handle } from "@sveltejs/kit";

const PRELOAD_FONTS = ["inter-latin-wght-normal"];

// create a per-slug mapping of which KaTeX fonts each post actually uses
type PostMeta = { renderMath?: boolean; katexFonts?: string[] };
const postMeta = import.meta.glob<PostMeta>("/src/lib/thoughts/*.md", {
  eager: true,
  import: "metadata",
});
const katexFontsBySlug: Record<string, string[]> = {};
for (const [path, meta] of Object.entries(postMeta)) {
  const slug = path.split("/").at(-1)?.replace(".md", "");
  if (slug && meta.renderMath && meta.katexFonts) {
    katexFontsBySlug[slug] = meta.katexFonts;
  }
}

export const handle: Handle = async ({ event, resolve }) => {
  // determine which KaTeX fonts to preload based on the current route
  const match = event.url.pathname.match(/^\/thoughts\/([^/]+)$/);
  const katexFonts = match?.[1] ? katexFontsBySlug[match[1]] ?? [] : [];

  return await resolve(event, {
    preload: ({ type, path }) => {
      if (type === "font") {
        if (!path.endsWith(".woff2")) return false;
        if (PRELOAD_FONTS.some((name) => path.includes(name))) return true;
        if (katexFonts.some((font) => path.includes(font))) return true;
        return false;
      }
      return type === "js" || type === "css";
    },
  });
};
