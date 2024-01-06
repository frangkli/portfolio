<script lang="ts">
  import Sidebar from "./Sidebar.svelte";
  import Content from "./Content.svelte";

  let overlayVisible = false;
</script>

<main
  class="flex flex-row lg:px-8 lg:mx-auto w-full lg:max-w-5xl lg:gap-20 overflow-hidden text-sm md:text-lg"
>
  <Sidebar bind:overlayVisible />
  <Content bind:overlayVisible>
    <slot />
  </Content>
  <div class="hidden md:block md:absolute md:bottom-8 md:right-8">
    <img src="/owl.png" alt="Owl" width="250" height="250" class="mx-auto" />
  </div>
</main>
