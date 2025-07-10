import adapter from "@sveltejs/adapter-cloudflare";
import { mdsvex } from "mdsvex";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex-svelte";

const mdsvexOptions = {
  extensions: [".svx", ".md"],
  remarkPlugins: [remarkMath],
  rehypePlugins: [rehypeKatex],
};

const config = {
  extensions: [".svelte", ".svx", ".md"],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: { adapter: adapter() },
};

export default config;
