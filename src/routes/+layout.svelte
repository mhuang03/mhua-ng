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

  let drawerOpen = $state(false);
  const closeDrawer = () => {
    drawerOpen = false;
  };
</script>

<div class="drawer [scrollbar-gutter:auto]">
  <input id="sidebar" type="checkbox" class="drawer-toggle" bind:checked={drawerOpen} />
  <div class="drawer-content">
    <Header />
    <div class="px-5">
      {@render children()}
    </div>
  </div>
  <div class="drawer-side">
    <label for="sidebar" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-80 p-4">
      {#each ["things", "thoughts"] as tab}
        <li><a class="text-lg" href="/{tab}" onclick={closeDrawer}>{tab}</a></li>
      {/each}
    </ul>
  </div>
</div>
