/**
 * Rehype plugin that runs after rehype-katex-svelte to detect which KaTeX font
 * files are actually needed by the rendered math on a page. Injects a
 * `katexFonts` array into the mdsvex frontmatter metadata so it can be used
 * for per-page font preloading.
 *
 * rehype-katex-svelte emits KaTeX HTML as raw HAST nodes (HTML strings)
 * rather than structured HAST elements, so this plugin scans both HAST
 * elements and raw HTML strings for KaTeX CSS class names.
 *
 * The class to font mapping is derived from KaTeX's CSS: each class sets a
 * specific font-family, and each @font-face maps to a .woff2 file whose name
 * follows the pattern KaTeX_[Family]-[Style].
 */

interface HastNode {
  type: string;
  value?: string;
  properties?: { className?: string[] };
  children?: HastNode[];
}

interface MdsvexVFile {
  data: {
    fm?: Record<string, unknown>;
  };
}

const CLASS_TO_FONTS: Record<string, string[]> = {
  // Math variables (italic by default in math mode)
  mathnormal: ["KaTeX_Math-Italic"],

  // Explicit style overrides on KaTeX_Main
  mathit: ["KaTeX_Main-Italic"],
  mainit: ["KaTeX_Main-Italic"],
  mathbf: ["KaTeX_Main-Bold"],
  textbf: ["KaTeX_Main-Bold"],
  textit: ["KaTeX_Main-Italic"],

  // Bold math symbols
  boldsymbol: ["KaTeX_Math-BoldItalic"],

  // Alternate font families
  amsrm: ["KaTeX_AMS-Regular"],
  mathbb: ["KaTeX_AMS-Regular"],
  mathcal: ["KaTeX_Caligraphic-Regular"],
  mathfrak: ["KaTeX_Fraktur-Regular"],
  mathsf: ["KaTeX_SansSerif-Regular"],
  mathscr: ["KaTeX_Script-Regular"],
  mathtt: ["KaTeX_Typewriter-Regular"],

  // Operator and delimiter sizing → Size fonts
  "small-op": ["KaTeX_Size1-Regular"],
  "large-op": ["KaTeX_Size2-Regular"],
  size1: ["KaTeX_Size1-Regular"],
  size2: ["KaTeX_Size2-Regular"],
  size3: ["KaTeX_Size3-Regular"],
  size4: ["KaTeX_Size4-Regular"],
  "delim-size1": ["KaTeX_Size1-Regular"],
  "delim-size4": ["KaTeX_Size4-Regular"],

  // Square root sign
  "sqrt-sign": ["KaTeX_Size1-Regular"],
};

// Precompute the set of class names we care about for fast lookup
const KNOWN_CLASSES = new Set(Object.keys(CLASS_TO_FONTS));

/**
 * Scan a raw HTML string for KaTeX CSS class names.
 */
function scanRawHtml(
  html: string,
  fonts: Set<string>,
  hasKatex: { value: boolean },
): void {
  // Quick bail-out: if no "katex" substring, skip expensive regex
  if (!html.includes("katex")) return;

  hasKatex.value = true;

  // Extract all class attribute values from the HTML string.
  // Handles both class="..." (raw nodes) and class=\"...\" (text nodes from
  // rehype-katex-svelte which wraps output in {@html "..."}).
  const classAttrRe = /class=(?:\\"|")([^"\\]*)(?:\\"|")/g;
  let match;
  while ((match = classAttrRe.exec(html)) !== null) {
    const classes = match[1].split(" ");
    for (const cls of classes) {
      if (KNOWN_CLASSES.has(cls)) {
        for (const font of CLASS_TO_FONTS[cls]) fonts.add(font);
      }
    }
  }
}

/**
 * Recursively walk the HAST tree collecting KaTeX font references from both
 * structured elements and raw HTML nodes.
 */
function walk(
  node: HastNode,
  fonts: Set<string>,
  hasKatex: { value: boolean },
): void {
  // rehype-katex-svelte wraps output in {@html "..."} inside text nodes
  if (
    (node.type === "text" || node.type === "raw") &&
    typeof node.value === "string"
  ) {
    scanRawHtml(node.value, fonts, hasKatex);
    return;
  }

  if (node.type === "element") {
    const classes = Array.isArray(node.properties?.className)
      ? node.properties!.className!
      : [];

    for (const cls of classes) {
      if (cls === "katex") hasKatex.value = true;
      if (KNOWN_CLASSES.has(cls)) {
        for (const font of CLASS_TO_FONTS[cls]) fonts.add(font);
      }
    }
  }

  if (node.children) {
    for (const child of node.children) walk(child, fonts, hasKatex);
  }
}

export default function rehypeKatexFonts() {
  return (tree: HastNode, file: MdsvexVFile): void => {
    // skip tree crawl if the post doesn't opt into math rendering
    if (!file.data?.fm?.renderMath) return;

    const fonts = new Set<string>();
    const hasKatex = { value: false };

    if (tree.children) {
      for (const child of tree.children) walk(child, fonts, hasKatex);
    }

    // The base .katex class always uses KaTeX_Main-Regular
    if (hasKatex.value) {
      fonts.add("KaTeX_Main-Regular");
    }

    if (fonts.size > 0) {
      if (!file.data) file.data = { fm: {} };
      if (!file.data.fm) file.data.fm = {};
      file.data.fm.katexFonts = Array.from(fonts).sort();
    }
  };
}
