<script lang="ts">
  import SEO from "$lib/components/SEO.svelte";

  let { data } = $props();

  let defaultImage = "https://mhua.ng/favicon.svg";
</script>

<SEO
  title="things"
  description="A fairly random collection of potentially cool things."
  image="https://mhua.ng/favicon-96x96.png"
/>

<p class="mb-5">A fairly random collection of potentially cool things.</p>
<div class="flex flex-wrap gap-5">
  {#each data.things as thing}
    <div class="card items-center bg-base-200 shadow-md w-[45%] min-w-64 grow">
      <figure class="px-5 pt-5 w-full overflow-hidden">
        <a class="w-full" href={thing.visitURL ?? undefined} target="_blank" rel="noopener noreferrer">
          <img class="rounded-lg w-full h-32 object-cover" src={thing.image ?? defaultImage} alt={thing.title} />
        </a>
      </figure>
      <div class="card-body w-full">
        <a
          class={thing.visitURL ? "link-hover" : ""}
          href={thing.visitURL ?? undefined}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 class="card-title">{thing.title}</h2>
        </a>
        <p>{thing.description}</p>
        <div class="card-actions justify-around">
          {#if thing.postSlug}
            <a class="link link-hover uppercase text-xs font-semibold" href="/thoughts/{thing.postSlug}">read more</a>
          {/if}
        </div>
      </div>
    </div>
  {/each}
</div>

<!-- TODO: pagination -->
