<script lang="ts">
  import FilterIcon from "~icons/mynaui/filter";
  import SearchIcon from "~icons/mynaui/search";
  import CollapseIcon from "~icons/mynaui/chevron-double-up";
  import XIcon from "~icons/mynaui/x";
  import { fade } from "svelte/transition";

  let { tags, selected = $bindable(new Set<string>()), searchQuery = $bindable("") } = $props();

  let saved = $state(new Set<string>());
  let isOpen = $state(false);

  const toggleTag = (tag: string) => () => {
    if (tag) {
      if (selected.has(tag)) {
        selected.delete(tag);
      } else {
        selected.add(tag);
      }
    }
    selected = new Set(selected); // reassignment triggers reactivity
  };

  const toggleOpen = (e: any) => {
    isOpen = e.target.checked;
    if (!isOpen) {
      saved = new Set(selected);
      selected = new Set();
    } else {
      selected = new Set(saved);
    }
  };

  const clearFilter = () => {
    selected = new Set();
  };
</script>

<div class="list-row p-5 rounded-box flex flex-col sm:flex-row justify-between gap-2">
  <div class="flex items-end flex-row gap-2">
    <label class="input bg-base-200 w-full sm:min-w-50 input-xs self-start">
      <SearchIcon class="h-[1em] opacity-50" />
      <input type="search" name="search" required placeholder="Search" bind:value={searchQuery} />
    </label>

    <label class="swap swap-rotate self-start" onchange={toggleOpen}>
      <input type="checkbox" class="hidden" name="filter" />
      <FilterIcon class="cursor-pointer swap-off w-6 h-6" />
      <CollapseIcon class="cursor-pointer swap-on w-6 h-6" />
    </label>
  </div>
  <div class={"self-start overflow-hidden" + (isOpen ? "" : " h-0")}>
    {#if isOpen}
      <div transition:fade={{ duration: 100 }}>
        {#each tags as tag}
          <button
            class={"cursor-pointer badge badge-xs mr-1 gap-1 whitespace-nowrap" +
              (selected.has(tag) ? " badge-outline pr-1 font-bold" : " badge-dash")}
            onclick={toggleTag(tag)}
          >
            {tag}
            {#if selected.has(tag)}
              <XIcon class="w-2 h-2 inline-block" />
            {/if}
          </button>
        {/each}
        <div class="w-full flex flex-row-reverse">
          <button
            transition:fade|global={{ duration: 100 }}
            class="cursor-pointer text-xs text-right self-end block"
            onclick={clearFilter}>clear tags</button
          >
        </div>
      </div>
    {/if}
  </div>
</div>
