<script module>
  import img from "$lib/components/ThoughtsImage.svelte";
  export { img };
</script>

<script>
  import { setContext } from "svelte";
  let { children } = $props();
  setContext("imageCounter", { count: 0 });
</script>

{@render children()}
