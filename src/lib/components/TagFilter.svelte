<script lang="ts">
  import FilterIcon from "~icons/mynaui/filter";
  import CollapseIcon from "~icons/mynaui/chevron-double-up";
  import XIcon from "~icons/mynaui/x";
  import { fade } from "svelte/transition";

  let { tags, selected = $bindable(new Set<string>()) } = $props();

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

<div class={"overflow-hidden" + (isOpen ? " max-h-none" : " max-h-6")}>
  <label class="swap swap-rotate" onchange={toggleOpen}>
    <input type="checkbox" class="hidden" name="filter" />
    <FilterIcon class="cursor-pointer swap-off w-6 h-6" />
    <CollapseIcon class="cursor-pointer swap-on w-6 h-6" />
  </label>
  {#if isOpen}
    {#each tags as tag}
      <button
        transition:fade|global={{ duration: 100 }}
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
        onclick={clearFilter}>clear</button
      >
    </div>
  {/if}
</div>
