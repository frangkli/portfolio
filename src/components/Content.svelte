<script lang="ts">
  import { fly } from "svelte/transition";

  export let overlayVisible: boolean;
</script>

{#if !overlayVisible}
  <div
    class="h-max px-8 lg:px-0 py-20 lg:py-32 text-justify w-full"
    in:fly={{ y: 200, duration: 1000 }}
  >
    <slot />
  </div>
{/if}
