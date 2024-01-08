<script lang="ts">
  type Experience = {
    title: string;
    subtitle: string;
    startDate: string;
    endDate: string;
  };
  export let exp: Experience;
  let innerWidth = window.innerWidth;

  // Magic number for fitting the research titles
  const FIT_SCREEN = 435;
</script>

<svelte:window on:resize={() => (innerWidth = window.innerWidth)} />

<div class="mb-4">
  <!-- mobile -->
  {#if innerWidth >= FIT_SCREEN}
    <!-- date with title-->
    <div class="flex flex-row md:hidden">
      <span class="grow block">
        <b>{exp.title}</b>
      </span>
      <span class="grow text-right flex-none"
        >{exp.startDate} - {exp.endDate}</span
      >
    </div>
    <span class="md:hidden">{exp.subtitle}</span>
  {:else}
    <!-- date on next line -->
    <span class="md:hidden">
      <b>{exp.title}</b>
    </span>
    <div class="flex flex-row flex-wrap md:hidden">
      <span class="grow block">{exp.subtitle}</span>
      <span class="grow text-right flex-none"
        >{exp.startDate} - {exp.endDate}</span
      >
    </div>
  {/if}

  <!-- desktop -->
  <div class="hidden md:flex md:flex-row w-full">
    <span class="grow block">
      <b>{exp.title}</b> - {exp.subtitle}
    </span>
    <span class="grow text-right">{exp.startDate} - {exp.endDate}</span>
  </div>
  <slot />
</div>
