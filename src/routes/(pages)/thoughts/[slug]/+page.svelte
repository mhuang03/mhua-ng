<script>
  import SEO from "$lib/components/SEO.svelte";

  let { data } = $props();
  let { title, renderMath, description } = data.metadata;

  if (renderMath) import("katex/dist/katex.min.css");
</script>

<SEO {title} {description} />

<article class="prose">
  <h1>{title}</h1>
  <data.content />
</article>
