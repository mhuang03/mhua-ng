<script>
  let { data } = $props();
  let { title, date, math } = data.metadata;
</script>

<svelte:head>
  <title>{title}</title>

  {#if math}
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
      };
    </script>
    <script type="text/javascript" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
    </script>
  {/if}
</svelte:head>

<article class="prose">
  <data.content />
</article>
