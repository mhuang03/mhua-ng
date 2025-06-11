<script>
  import "../../styles.css";
  import SunIcon from "~icons/mynaui/sun";
  import MoonIcon from "~icons/mynaui/moon";

  let { activeTab = "home", scrollY = $bindable() } = $props();
  let scrolledDown = $derived(scrollY > 0);
</script>

<svelte:window bind:scrollY />

<div class="sticky top-0">
  <div class={`navbar bg-base-100${scrolledDown ? " shadow-xs" : ""}`}>
    <div class="navbar-start flex-row gap-5">
      <a class="text-2xl font-bold" href="/">mhua.ng</a>
      <div role="tablist" class="tabs tabs-border">
        {#each ["things", "thoughts"] as page}
          <a role="tab" class={`tab${activeTab == page ? " tab-active" : ""}`} href="/{page}">{page}</a>
        {/each}
      </div>
    </div>
    <div class="navbar-end">
      <label class="btn btn-ghost btn-circle swap swap-rotate">
        <input type="checkbox" class="theme-controller" value="business" />
        <SunIcon class="swap-off h-8 w-8 fill-current" />
        <MoonIcon class="swap-on h-8 w-8 fill-current" />
      </label>
    </div>
  </div>
</div>
