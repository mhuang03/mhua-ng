<script>
  import SEO from "$lib/components/SEO.svelte";

  let { data } = $props();
  let { title, math, description } = data.metadata;

  if (math) import("katex/dist/katex.min.css");
</script>

<SEO {title} {description} />

<article class="prose">
  <h1>{title}</h1>
  <data.content />
</article>
