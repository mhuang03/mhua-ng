<script>
  import "katex/dist/katex.min.css";
  import SEO from "$lib/components/SEO.svelte";
  import { page } from "$app/state";

  let { data } = $props();
  let title = $derived(data.metadata.title);
  let description = $derived(data.metadata.description);
  let jsonLd = $derived(
    JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description,
      datePublished: data.metadata.date,
      author: { "@type": "Person", name: "Michael Huang" },
      url: `https://mhua.ng${page.url.pathname}`,
    })
  );
</script>

<SEO {title} {description} ogType="article" />

<svelte:head>
  {@html `<script type="application/ld+json">${jsonLd}<\/script>`}
</svelte:head>

<article class="prose">
  <h1>{title}</h1>
  <data.content />
</article>
