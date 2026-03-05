<script lang="ts">
  import EnhancedImage from "$lib/components/EnhancedImage.svelte";

  let { src, alt, ...rest }: { src: string; alt: string; [key: string]: any } = $props();
</script>

<EnhancedImage {src} {alt} sizes="min(672px, calc(100vw - 40px))" class="rounded-lg" loading="eager" {...rest} />
