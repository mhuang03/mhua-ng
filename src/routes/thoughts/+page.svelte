<script lang="ts">
  import TagFilter from "$lib/components/TagFilter.svelte";
  import PostRow from "$lib/components/PostRow.svelte";
  import type { Post } from "$lib/types.js";

  let { data } = $props();
  let selected = $state(new Set<string>());

  let filteredPosts = $derived.by(() =>
    data.posts.filter((post: Post) => {
      if (selected.size === 0) return true;
      return Array.from(selected).every((tag) => post.tags && post.tags.includes(tag));
    })
  );
</script>

<svelte:head>
  <title>thoughts</title>
</svelte:head>

Musings of a XXI-century thinker.
<ul class="list bg-base-100 rounded-box shadow-md max-w-2xl mx-auto">
  <div class="list-row rounded-b-none gap-0">
    <TagFilter tags={data.tags} bind:selected />
  </div>
  {#each filteredPosts as post}
    <PostRow {post} />
  {/each}
</ul>

<!-- TODO: pagination -->
