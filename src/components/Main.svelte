<script lang="ts">
  import Sidebar from "./Sidebar.svelte";
  import Content from "./Content.svelte";

  let overlayVisible = false;
  let mainContainer: HTMLElement;
  let innerWidth = window.innerWidth;

  $: gap = mainContainer ? (innerWidth - mainContainer.clientWidth) / 2 : 0;
  $: owlSize = gap > 150 ? Math.min(250, gap) : 0;
</script>

<svelte:window on:resize={() => (innerWidth = window.innerWidth)} />

<main
  class="flex flex-row lg:px-8 lg:mx-auto w-full lg:max-w-5xl lg:gap-14 overflow-hidden text-sm md:text-lg"
  bind:this={mainContainer}
>
  <Sidebar bind:overlayVisible />
  <Content bind:overlayVisible>
    <slot />
  </Content>
  <div class="hidden md:block md:absolute md:bottom-8 md:right-8">
    <img
      src="/owl.png"
      alt="Owl"
      width={owlSize ? owlSize : 0}
      height={owlSize ? owlSize : 0}
    />
  </div>
</main>
