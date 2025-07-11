<script>
  import SEO from "$lib/components/SEO.svelte";
  import { TypeWriter } from "svelte-typewrite";
  import GithubIcon from "~icons/mdi/github";
  import greetings from "$lib/greetings.json";
  import { shuffle } from "$lib/utils";
</script>

<SEO />

<div class="hero min-h-[calc(100vh-64px)]">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <div class="font-display text-5xl font-bold">
        <TypeWriter texts={shuffle(greetings)} blinkDuration={1000} />
      </div>
      <p class="pt-6">
        They really just let <em>anyone</em> have a website these days, huh? Well, this one's property of me,
        <span class="font-semibold">Michael Huang</span>.
      </p>
      <br />
      <p>I'm a fourth-year undergraduate at the University of Minnesota, studying Computer Science and Mathematics.</p>
      <div class="divider"></div>
      <div class="flex flex-row justify-between items-center">
        <p class="text-xs font-semibold">huan1623 [at] umn [dot] edu</p>
        <div class="flex flex-row gap-2">
          <a
            class="btn btn-sm btn-circle btn-ghost"
            href="https://github.com/mhuang03/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon class="cursor-pointed w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
