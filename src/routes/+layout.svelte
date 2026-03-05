<script>
  import { onNavigate } from "$app/navigation";
  import Header from "$lib/components/Header.svelte";
  import Drawer from "$lib/components/Drawer.svelte";
  import "../styles.css";
  import interWoff2 from "@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url";

  let { children } = $props();

  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<svelte:head>
  <link rel="preload" href={interWoff2} as="font" type="font/woff2" crossorigin="anonymous" fetchpriority="high" />
</svelte:head>

<Drawer>
  <a
    href="#main-content"
    class="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-base-100 focus:text-base-content"
    >Skip to content</a
  >
  <Header />
  {@render children()}
</Drawer>
