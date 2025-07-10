<script lang="ts">
  import { page } from "$app/state";

  const commonData = {
    title: "mhua.ng",
    description: "The personal website of Michael Huang.",
    image: "https://mhua.ng/favicon-96x96.png",
  };

  let { formatTitle = true, title = "", description = commonData.description, image = commonData.image } = $props();

  let formattedTitle = $derived(
    formatTitle ? (title ? `${title} | ${commonData.title}` : `${commonData.title}`) : title
  );
</script>

<svelte:head>
  <title>{formattedTitle}</title>
  <meta name="description" content={description} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={formattedTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
  <meta name="twitter:image:alt" content={formattedTitle} />
  <meta property="og:title" content={formattedTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />

  <link rel="canonical" href={`https://mhua.ng/${page.url.pathname}`} />
</svelte:head>
