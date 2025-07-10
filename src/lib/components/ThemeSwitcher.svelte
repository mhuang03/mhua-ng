<script lang="ts">
  import { page } from "$app/state";
  import "../../styles.css";
  import SunIcon from "~icons/mynaui/sun";
  import MoonIcon from "~icons/mynaui/moon";

  let currentTheme = $state(page.data.theme || "light");
  let isDark = $derived(currentTheme == "business");

  const setThemeCookie = (e: any) => {
    const theme = e.target.checked ? "business" : "light";
    currentTheme = theme;

    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `theme=${theme}; expires=${expires.toUTCString()}; path=/; SameSite=Strict; Secure`;
  };
</script>

<label class="btn btn-ghost btn-circle swap swap-rotate" onchange={setThemeCookie}>
  <input type="checkbox" class="theme-controller" value="business" bind:checked={isDark} />
  <SunIcon class="swap-off h-8 w-8 fill-current" />
  <MoonIcon class="swap-on h-8 w-8 fill-current" />
</label>
