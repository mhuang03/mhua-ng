<script>
  import SEO from "$lib/components/SEO.svelte";

  let { data } = $props();
  let { title, date, description } = data.metadata;
</script>

<SEO {title} {description} />

<article class="prose">
  <data.content />
</article>
