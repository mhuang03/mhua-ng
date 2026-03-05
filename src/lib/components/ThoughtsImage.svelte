<script lang="ts">
  import { getContext } from "svelte";
  import EnhancedImage from "$lib/components/EnhancedImage.svelte";

  let { src, alt, ...rest }: { src: string; alt: string; [key: string]: any } = $props();
  const counter = getContext<{ count: number }>("imageCounter");
  const loading: "eager" | "lazy" = counter ? (counter.count++ === 0 ? "eager" : "lazy") : "lazy";
</script>

<EnhancedImage {src} {alt} sizes="min(672px, calc(100vw - 40px))" class="rounded-lg" {loading} {...rest} />
