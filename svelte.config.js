import adapter from "@sveltejs/adapter-cloudflare";
import { mdsvex } from "mdsvex";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import visit from "unist-util-visit";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex-svelte";
import rehypeExternalLinks from "rehype-external-links";
import { imageSize } from "image-size";
import path from "path";
import fs from "fs";

const processImages = () => (tree) => {
  visit(tree, "element", (node) => {
    if (node.tagName === "img") {
      const className = node.properties.className || [];
      className.push("rounded-lg", "skeleton");
      node.properties.className = className;

      node.properties.loading = "lazy";
      node.properties.decoding = "async";

      const src = node.properties.src;
      if (src && src.startsWith("/") && !node.properties.width) {
        try {
          const filePath = path.join("static", src);
          const buffer = fs.readFileSync(filePath);
          const { width, height } = imageSize(buffer);
          if (width && height) {
            node.properties.width = width;
            node.properties.height = height;
          }
        } catch {}
      }
    }
  });
};

const mdsvexOptions = {
  extensions: [".svx", ".md"],
  remarkPlugins: [remarkMath],
  rehypePlugins: [
    rehypeKatex,
    [
      rehypeExternalLinks,
      { target: "_blank", rel: ["noopener", "noreferrer"] },
    ],
    processImages,
  ],
};

const config = {
  extensions: [".svelte", ".svx", ".md"],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: { adapter: adapter() },
};

export default config;
