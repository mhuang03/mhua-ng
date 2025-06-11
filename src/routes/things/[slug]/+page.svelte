<script>
  import PageWrapper from "$lib/components/PageWrapper.svelte";

  let { data } = $props();
  let { title, date, math } = data.metadata;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="date" content={date} />

  <!-- {#if math}
    <script>
      MathJax = {
        tex: {
          inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
          ],
          displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"],
          ],
        },
        svg: {
          fontCache: "global",
        },
      };
    </script>
    <script type="text/javascript" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js">
    </script>
  {/if} -->
</svelte:head>

<PageWrapper activeTab="things">
  <article class="prose">
    <data.content />
  </article>
</PageWrapper>
