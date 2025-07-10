<script>
  import { onNavigate } from "$app/navigation";
  import Header from "$lib/components/Header.svelte";
  import "../styles.css";
  import "katex/dist/katex.min.css";

  let { children } = $props();
  export const prerender = true;

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<Header />
<div class="px-5">
  {@render children()}
</div>
