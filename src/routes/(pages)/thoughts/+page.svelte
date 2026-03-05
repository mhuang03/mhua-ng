<script lang="ts">
  import SEO from "$lib/components/SEO.svelte";
  import SearchFilter from "$lib/components/SearchFilter.svelte";
  import PostRow from "$lib/components/PostRow.svelte";
  import { filterByTagsAndSearch } from "$lib/utils";

  let { data } = $props();
  let selected = $state(new Set<string>());
  let searchQuery = $state("");

  let filteredPosts = $derived(filterByTagsAndSearch(data.posts, selected, searchQuery));
</script>

<SEO title="thoughts" description="The meandering musings of a XXI-century thinker." />

<h1 class="mb-5">The meandering musings of a XXI-century thinker.</h1>
<ul class="list bg-base-200 rounded-box shadow-md border border-base-300">
  <li>
    <SearchFilter tags={data.tags} bind:selected bind:searchQuery />
  </li>
  {#if filteredPosts.length === 0}
    <li class="text-base-content/60 list-row">Nothing found.</li>
  {/if}
  {#each filteredPosts as post}
    <PostRow {post} />
  {/each}
</ul>
