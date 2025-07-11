<script>
  import { onNavigate } from "$app/navigation";
  import Header from "$lib/components/Header.svelte";
  import Drawer from "$lib/components/Drawer.svelte";
  import "../styles.css";
  import "katex/dist/katex.min.css";

  let { children } = $props();

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

<Drawer>
  <Header />
  <div class="px-5 max-w-2xl mx-auto">
    {@render children()}
  </div>
</Drawer>
