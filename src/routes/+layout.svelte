<script>
  import Header from "$lib/components/Header.svelte";
  import "../styles.css";

  let { children } = $props();
</script>

<Header />
<div class="px-5">
  {@render children()}
</div>
