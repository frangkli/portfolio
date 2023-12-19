<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  let mounted = false;
  onMount(() => {
    mounted = true;
  });
</script>

{#if mounted}
  <div class="h-max py-32 text-justify" in:fly={{ y: 200, duration: 1000 }}>
    <slot />
  </div>
{/if}
