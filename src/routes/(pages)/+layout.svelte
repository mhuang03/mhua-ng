<script lang="ts">
  let { children } = $props();
</script>

<div class="p-5 pb-20 max-w-2xl mx-auto">
  <main>
    {@render children()}
  </main>
</div>
