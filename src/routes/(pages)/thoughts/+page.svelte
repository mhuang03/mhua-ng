<script lang="ts">
  import SEO from "$lib/components/SEO.svelte";
  import SearchFilter from "$lib/components/SearchFilter.svelte";
  import PostRow from "$lib/components/PostRow.svelte";
  import type { Post } from "$lib/types.js";

  let { data } = $props();
  let selected = $state(new Set<string>());
  let searchQuery = $state("");

  let filteredPosts = $derived.by(() =>
    data.posts.filter((post: Post) => {
      const matchTags =
        selected.size === 0 ? true : Array.from(selected).every((tag) => post.tags && post.tags.includes(tag));
      const matchSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchTags && matchSearch;
    })
  );
</script>

<SEO title="thoughts" description="The meandering musings of a XXI-century thinker." />

<h1 class="mb-5">The meandering musings of a XXI-century thinker.</h1>
<ul class="list bg-base-200 rounded-box shadow-md border border-base-300">
  <SearchFilter tags={data.tags} bind:selected bind:searchQuery />
  {#if filteredPosts.length === 0}
    <p class="text-gray-500 list-row">Nothing found.</p>
  {/if}
  {#each filteredPosts as post}
    <PostRow {post} />
  {/each}
</ul>
