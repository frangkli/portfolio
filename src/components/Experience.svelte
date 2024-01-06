<script lang="ts">
  type Experience = {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description?: string[];
  };
  export let exp: Experience;
</script>

<div class="my-4">
  <div class="flex flex-row w-full">
    <span class="grow block">
      <b>{exp.position}</b> - {exp.company}
    </span>
    <span class="grow text-right">{exp.startDate} - {exp.endDate}</span>
  </div>
  {#if exp.description}
    <ul class="pl-4 list-disc list-inside">
      {#each exp.description as desc}
        <li>{desc}</li>
      {/each}
    </ul>
  {/if}
</div>
