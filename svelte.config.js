import adapter from "@sveltejs/adapter-cloudflare";
import { mdsvex } from "mdsvex";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex-svelte";
import rehypeExternalLinks from "rehype-external-links";

const mdsvexOptions = {
  extensions: [".svx", ".md"],
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex, [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }]],
};

const config = {
  extensions: [".svelte", ".svx", ".md"],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: { adapter: adapter() },
};

export default config;
