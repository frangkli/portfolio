<script lang="ts">
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  export let overlayVisible: boolean;
  let mounted = false;
  onMount(() => {
    mounted = true;
  });
</script>

{#if !overlayVisible && mounted}
  <div
    class="h-max px-8 lg:px-0 py-20 lg:py-32 text-justify w-full"
    in:fly={{ y: 200, duration: 1000 }}
  >
    <slot />
  </div>
{/if}
