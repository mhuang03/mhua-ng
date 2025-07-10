<script>
  import { afterNavigate, onNavigate } from "$app/navigation";
  import { onMount } from "svelte";

  let { children } = $props();

  let drawerOpen = $state(false);
  let scrollBarVisible = $state(false);

  const checkScrollBar = () => {
    scrollBarVisible = document.documentElement.scrollHeight > document.documentElement.clientHeight;
    console.log(scrollBarVisible);
  };

  onMount(() => {
    checkScrollBar();
    window.addEventListener("resize", checkScrollBar);
    return () => {
      window.removeEventListener("resize", checkScrollBar);
    };
  });

  afterNavigate(() => {
    checkScrollBar();
  });

  onNavigate(() => {
    if (drawerOpen) {
      drawerOpen = false;
    }
  });
</script>

<div class="drawer">
  <input id="sidebar" type="checkbox" class="drawer-toggle" bind:checked={drawerOpen} />
  <div class="drawer-content">
    {@render children()}
  </div>
  <div class="drawer-side">
    <label for="sidebar" aria-label="close sidebar" class="drawer-overlay"></label>
    <ul class="menu bg-base-200 min-h-full w-80 p-4">
      <li><a class="text-lg" href="/">home</a></li>
      {#each ["things", "thoughts"] as tab}
        <li><a class="text-lg" href="/{tab}">{tab}</a></li>
      {/each}
    </ul>
  </div>
</div>

{#if !scrollBarVisible}
  <style>
    :root {
      scrollbar-gutter: auto;
    }
  </style>
{/if}
