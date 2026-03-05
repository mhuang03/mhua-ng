<script lang="ts">
  import type { Thing } from "$lib/types";
  import { fade } from "svelte/transition";
  import EnhancedImage from "./EnhancedImage.svelte";

  const defaultImage = "https://mhua.ng/favicon.svg";

  let { thing, loading = "lazy" }: { thing: Thing; loading?: "lazy" | "eager" } = $props();

  let tags = $derived(thing.tags ? thing.tags.sort((a, b) => a.localeCompare(b)) : []);
</script>

<div
  class="card items-center bg-base-200 shadow-md w-[45%] min-w-64 grow basis-0.5 border border-base-300"
  transition:fade={{ duration: 100 }}
>
  <figure class="px-5 pt-5 w-full overflow-hidden">
    {#if thing.visitURL}
      <a class="w-full" href={thing.visitURL} target="_blank" rel="noopener noreferrer">
        <EnhancedImage
          src={thing.image ?? defaultImage}
          alt={thing.title}
          sizes="min(640px, calc(45vw - 40px))"
          class="rounded-lg w-full h-32 object-cover object-top"
          {loading}
        />
      </a>
    {:else}
      <EnhancedImage
        src={thing.image ?? defaultImage}
        alt={thing.title}
        sizes="min(640px, calc(45vw - 40px))"
        class="rounded-lg w-full h-32 object-cover object-top"
        {loading}
      />
    {/if}
  </figure>
  <div class="card-body w-full">
    <div>
      {#if thing.visitURL}
        <a class="link-hover" href={thing.visitURL} target="_blank" rel="noopener noreferrer">
          <h2 class="card-title">{thing.title}</h2>
        </a>
      {:else}
        <h2 class="card-title">{thing.title}</h2>
      {/if}
      <p>
        {#each tags as tag}
          <span class="badge badge-xs badge-outline mr-1">{tag}</span>
        {/each}
      </p>
    </div>
    <p>{thing.description}</p>
    <div class="card-actions justify-around">
      {#if thing.postSlug}
        <a class="link link-hover uppercase text-xs font-semibold" href="/thoughts/{thing.postSlug}">read more about {thing.title}</a>
      {/if}
    </div>
  </div>
</div>
