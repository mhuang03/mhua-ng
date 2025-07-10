<script>
  import Header from "$lib/components/Header.svelte";

  let { children } = $props();
</script>

<Header />
<div class="px-5">
  {@render children()}
</div>
