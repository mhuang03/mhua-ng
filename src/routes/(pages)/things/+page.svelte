<script lang="ts">
  import SEO from "$lib/components/SEO.svelte";
  import ThingCard from "$lib/components/ThingCard.svelte";
  import SearchFilter from "$lib/components/SearchFilter.svelte";
  import type { Thing } from "$lib/types.js";

  let { data } = $props();
  let selected = $state(new Set<string>());
  let searchQuery = $state("");

  let filteredThings = $derived.by(() =>
    data.things.filter((thing: Thing) => {
      const matchTags =
        selected.size === 0 ? true : Array.from(selected).every((tag) => thing.tags && thing.tags.includes(tag));
      const matchSearch =
        thing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        thing.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchTags && matchSearch;
    })
  );
</script>

<SEO
  title="things"
  description="A fairly random collection of potentially cool things."
  image="https://mhua.ng/favicon-96x96.png"
/>

<h1 class="mb-5">A fairly random collection of potentially cool things.</h1>
<div class="flex flex-wrap gap-5">
  <div class="card bg-base-200 shadow-md border border-base-300 basis-full">
    <SearchFilter tags={data.tags} bind:selected bind:searchQuery />
  </div>
  {#if filteredThings.length === 0}
    <p class="text-gray-500 basis-full">Nothing found matching your criteria.</p>
  {/if}
  {#each filteredThings as thing}
    <ThingCard {thing} />
  {/each}
  {#if filteredThings.length % 2 === 1}
    <div class="w-[45%] min-w-64 grow basis-0.5"></div>
  {/if}
</div>

<!-- TODO: pagination -->
