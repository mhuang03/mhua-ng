<script lang="ts">
  import type { Thing } from "$lib/types";
  import { fade } from "svelte/transition";

  const defaultImage = "https://mhua.ng/favicon.svg";

  let { thing }: { thing: Thing } = $props();

  let tags = thing.tags ? thing.tags.sort((a, b) => a.localeCompare(b)) : [];
</script>

<div
  class="card items-center bg-base-200 shadow-md w-[45%] min-w-64 max-w-80 grow basis-0.5 border border-base-300"
  transition:fade={{ duration: 100 }}
>
  <figure class="px-5 pt-5 w-full overflow-hidden">
    <a class="w-full" href={thing.visitURL ?? undefined} target="_blank" rel="noopener noreferrer">
      <img
        class="rounded-lg w-full h-32 object-cover object-top"
        src={thing.image ?? defaultImage}
        alt={thing.title}
      />
    </a>
  </figure>
  <div class="card-body w-full">
    <div>
      <a
        class={thing.visitURL ? "link-hover" : ""}
        href={thing.visitURL ?? undefined}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 class="card-title">{thing.title}</h2>
      </a>
      {#if thing.tags}
        <p>
          {#each tags as tag}
            <span class="badge badge-xs badge-outline mr-1">{tag}</span>
          {/each}
        </p>
      {/if}
    </div>
    <p>{thing.description}</p>
    <div class="card-actions justify-around">
      {#if thing.postSlug}
        <a class="link link-hover uppercase text-xs font-semibold" href="/thoughts/{thing.postSlug}">read more</a>
      {/if}
    </div>
  </div>
</div>
