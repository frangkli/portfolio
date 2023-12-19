<script lang="ts">
  export let href: string;
  export let text: string = "";
</script>

<a
  {href}
  on:mousemove={(event) => {
    const modal = event.currentTarget.children[0];
    if (modal instanceof HTMLElement) {
      modal.style.top = `${event.clientY + 10}px`;
      if (text !== "") {
        modal.style.left = `${event.offsetX + 10}px`;
      } else {
        modal.style.left = `${event.clientX + 10}px`;
      }
    }
  }}
  on:mouseenter={(event) => {
    const modal = event.currentTarget.children[0];
    modal.classList.remove("hidden");
  }}
  on:mouseleave={(event) => {
    const modal = event.currentTarget.children[0];
    modal.classList.add("hidden");
  }}
>
  <div class="absolute bg-black text-white hidden font-mono px-2 py-1 text-xs">
    {href}
  </div>
  {#if text !== ""}
    {text}
  {:else}
    <span class="underline underline-offset-2">
      <slot />
    </span>
  {/if}
</a>
