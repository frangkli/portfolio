<script lang="ts">
  import Sidebar from "./Sidebar.svelte";
  import Content from "./Content.svelte";

  let overlayVisible = false;
</script>

<main
  class="flex flex-row lg:px-8 lg:mx-auto w-full lg:max-w-5xl lg:gap-20 overflow-hidden text-sm md:text-base lg:text-lg"
>
  <Sidebar bind:overlayVisible />
  <Content bind:overlayVisible>
    <slot />
  </Content>
</main>
