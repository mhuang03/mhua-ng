<script lang="ts">
  import { skeletonImages } from "$lib/utils";

  let {
    src,
    alt,
    sizes,
    loading = "lazy" as "lazy" | "eager",
    class: className = "rounded-lg",
    ...rest
  }: {
    src: string;
    alt: string;
    sizes?: string;
    loading?: "lazy" | "eager";
    class?: string;
    [key: string]: any;
  } = $props();

  const imageModules = import.meta.glob("$lib/assets/*.{png,jpg,jpeg,webp,avif}", {
    eager: true,
    query: { enhanced: true, w: "256;400;672;1024;1344" },
  });

  const imageMap: Record<string, any> = {};
  for (const [path, mod] of Object.entries(imageModules)) {
    const filename = path.split("/").at(-1);
    if (filename) {
      imageMap[filename] = (mod as any).default;
      imageMap[path] = (mod as any).default;
    }
  }

  function resolve(imgSrc: string) {
    return imageMap[imgSrc] ?? imageMap[imgSrc.split("/").at(-1) ?? ""];
  }

  let enhanced = $derived(resolve(src));
</script>

<span use:skeletonImages>
  {#if enhanced}
    <enhanced:img
      src={enhanced}
      {alt}
      {sizes}
      class="{className} skeleton"
      {loading}
      decoding="async"
      {...rest}
    />
  {:else}
    <img {src} {alt} class="{className} skeleton" {loading} decoding="async" {...rest} />
  {/if}
</span>
