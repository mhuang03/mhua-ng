<script>
  import SEO from "$lib/components/SEO.svelte";
  import { skeletonImages } from "$lib/utils";

  let { data } = $props();
  let { title, description } = data.metadata;
</script>

<SEO {title} {description} />

<article class="prose" use:skeletonImages>
  <h1>{title}</h1>
  <data.content />
</article>
