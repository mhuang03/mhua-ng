<script lang="ts">
  import { slide } from "svelte/transition";
  import RightChevron from "~icons/mynaui/chevron-right";
  import { formatDate } from "$lib/utils";
  import type { Post } from "$lib/types";

  let { post }: { post: Post } = $props();

  let tags = $derived(post.tags ? post.tags.sort((a, b) => a.localeCompare(b)) : []);
</script>

<li class="list-row hover:bg-base-300" transition:slide={{ duration: 50, axis: "y" }}>
  <a href={`/thoughts/${post.slug}`} class="contents">
    <div>
      <div class="text-base font-bold">{post.title}</div>
      <div class="text-xs uppercase font-semibold opacity-75">{formatDate(post.date)}</div>
      <br />
      <p class="text-xs">{post.description}</p>
      <p>
        {#each tags as tag}
          <span class="badge badge-xs badge-outline mr-1">{tag}</span>
        {/each}
      </p>
    </div>
    <div></div>
    <RightChevron class="self-center w-5 h-5" />
  </a>
</li>
