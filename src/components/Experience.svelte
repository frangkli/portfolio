<script lang="ts">
  type Experience = {
    subtitle: string;
    title: string;
    startDate: string;
    endDate: string;
  };
  export let exp: Experience;
</script>

<div class="mb-4">
  <div class="flex flex-row md:hidden">
    <span class="grow block">
      <b>{exp.title}</b>
    </span>
    <span class="grow text-right">{exp.startDate} - {exp.endDate}</span>
  </div>
  <span class="md:hidden">{exp.subtitle}</span>
  <div class="hidden md:flex md:flex-row w-full">
    <span class="grow block">
      <b>{exp.title}</b> - {exp.subtitle}
    </span>
    <span class="grow text-right">{exp.startDate} - {exp.endDate}</span>
  </div>
  <slot />
</div>
