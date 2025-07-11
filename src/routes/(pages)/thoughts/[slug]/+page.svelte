<script>
  import SEO from "$lib/components/SEO.svelte";

  let { data } = $props();
  let { title, date, description } = data.metadata;
</script>

<SEO {title} {description} />

<article class="prose">
  <h1>{title}</h1>
  <data.content />
</article>
