<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

{#if visible}
  <div
    class="h-max px-8 md:px-0 py-20 md:py-32 text-justify w-full"
    in:fly={{ y: 200, duration: 1000 }}
  >
    <slot />
  </div>
{/if}
