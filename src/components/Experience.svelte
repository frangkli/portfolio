<script lang="ts">
  type Experience = {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
  };
  export let exp: Experience;
</script>

<div class="mb-4">
  <div class="flex flex-row md:hidden">
    <span class="grow block">
      <b>{exp.position}</b>
    </span>
    <span class="grow text-right">{exp.startDate} - {exp.endDate}</span>
  </div>
  <span class="md:hidden">{exp.company}</span>
  <div class="hidden md:flex md:flex-row w-full">
    <span class="grow block">
      <b>{exp.position}</b> - {exp.company}
    </span>
    <span class="grow text-right">{exp.startDate} - {exp.endDate}</span>
  </div>
  <slot />
</div>
