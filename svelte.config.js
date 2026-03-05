import adapter from "@sveltejs/adapter-cloudflare";
import { mdsvex } from "mdsvex";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex-svelte";
import rehypeExternalLinks from "rehype-external-links";
import rehypeKatexFonts from "./src/lib/server/rehype-katex-fonts.ts";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const mdsvexOptions = {
  extensions: [".svx", ".md"],
  layout: {
    thoughts: join(__dirname, "./src/lib/layouts/thoughts.svelte"),
  },
  remarkPlugins: [remarkMath],
  rehypePlugins: [
    rehypeKatex,
    rehypeKatexFonts,
    [
      rehypeExternalLinks,
      { target: "_blank", rel: ["noopener", "noreferrer"] },
    ],
  ],
};

const config = {
  extensions: [".svelte", ".svx", ".md"],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: { adapter: adapter() },
};

export default config;
