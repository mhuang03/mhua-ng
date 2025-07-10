<script lang="ts">
  import TagFilter from "$lib/components/TagFilter.svelte";
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

<svelte:head>
  <title>thoughts</title>
</svelte:head>

<p class="mb-5">Musings of a XXI-century thinker.</p>
<ul class="list bg-base-200 rounded-box shadow-md">
  <TagFilter tags={data.tags} bind:selected bind:searchQuery />
  {#each filteredPosts as post}
    <PostRow {post} />
  {/each}
</ul>

<!-- TODO: pagination -->
