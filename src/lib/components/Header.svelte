<script lang="ts">
  import { page } from "$app/state";
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
  import MenuIcon from "~icons/mynaui/menu";

  let { scrollY = $bindable() } = $props();
  let scrolledDown = $derived(scrollY > 0);
</script>

<svelte:window bind:scrollY />

<div class="sticky top-0 z-1">
  <div class={`navbar bg-base-100 ${scrolledDown ? "shadow-xs" : ""}`}>
    <div class="navbar-start flex-row gap-2">
      <label for="sidebar" aria-label="open sidebar" class="sm:hidden btn btn-square btn-ghost">
        <MenuIcon class="w-8 h-8" />
      </label>
      <a class="px-3 text-xl font-bold sm:block hidden" href="/">mhua.ng</a>
      <div role="tablist" class="tabs tabs-border text-xl sm:block hidden min-w-max">
        {#each ["things", "thoughts"] as tab}
          <a
            role="tab"
            class={`text-lg tab ${page.url.pathname.startsWith(`/${tab}`) ? "tab-active" : ""}`}
            href="/{tab}"
          >
            {tab}
          </a>
        {/each}
      </div>
    </div>
    <div class="navbar-center">
      <a class="text-xl font-bold sm:hidden" href="/">mhua.ng</a>
    </div>
    <div class="navbar-end">
      <ThemeSwitcher />
    </div>
  </div>
</div>
