<script>
  let { data } = $props();
  let { title, date } = data.metadata;
</script>

<svelte:head>
  <title>{title} | mhua.ng</title>
</svelte:head>

<article class="prose">
  <data.content />
</article>
