<script lang="ts">
  import RightChevron from "~icons/mynaui/chevron-right";
  import { formatDate } from "$lib/utils";

  let { post } = $props();
</script>

<a href={`/thoughts/${post.slug}`}>
  <li class="list-row">
    <div>
      <div class="text-base font-bold">{post.title}</div>
      <div class="text-xs uppercase font-semibold opacity-60">{formatDate(post.date)}</div>
      <br />
      <p class="text-xs">{post.description}</p>
      {#if post.tags}
        {#each post.tags.sort() as tag}
          <span class="badge badge-xs badge-outline mr-1">{tag}</span>
        {/each}
      {/if}
    </div>
    <div></div>
    <RightChevron class="self-center w-5 h-5" />
  </li>
</a>

<style>
  li.list-row:hover {
    background-color: var(--color-base-300);
  }
</style>
