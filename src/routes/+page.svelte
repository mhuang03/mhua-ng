<script>
  import SEO from "$lib/components/SEO.svelte";
  import { TypeWriter } from "svelte-typewrite";
</script>

<SEO />

<div class="hero min-h-[calc(100vh-64px)]">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <div class="font-display text-5xl font-bold">
        <TypeWriter
          texts={["Hello there!"]}
          repeat={1}
          blinkDuration={1000}
          endState={{ text: "typed", caret: "blink" }}
        />
      </div>
      <p class="py-6">
        They really just let <em>anyone</em> have a website these days, huh?
        <br />
        This one's a work in progress, so please excuse the mess.
      </p>
    </div>
  </div>
</div>
