<script lang="ts">
  import TagFilter from "$lib/components/TagFilter.svelte";
  import PostRow from "$lib/components/PostRow.svelte";
  import SearchIcon from "~icons/mynaui/search";
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

<svelte:head>
  <title>thoughts</title>
</svelte:head>

Musings of a XXI-century thinker.
<ul class="list bg-base-100 rounded-box shadow-md max-w-2xl mx-auto">
  <div class="list-row p-5 rounded-box flex flex-col-reverse sm:flex-row justify-between gap-2 sm:gap-5">
    <TagFilter tags={data.tags} bind:selected />
    <label class="input w-full sm:max-w-50 sm:input-xs">
      <SearchIcon class="h-[1em] opacity-50" />
      <input type="search" name="search" required placeholder="Search" bind:value={searchQuery} />
    </label>
  </div>
  {#each filteredPosts as post}
    <PostRow {post} />
  {/each}
</ul>

<!-- TODO: pagination -->
