<script lang="ts">
  export let href: string;
  export let noLine: boolean = false;
</script>

<a
  {href}
  on:mousemove={(event) => {
    const text = event.currentTarget;
    const modal = event.currentTarget.children[0];
    if (modal instanceof HTMLElement && text instanceof HTMLElement) {
      const selfLeft = text.getBoundingClientRect().left;
      const parentLeft = text.parentElement?.getBoundingClientRect().left;
      let diff = 0;
      if (parentLeft && selfLeft - parentLeft > event.offsetX) {
        diff = selfLeft - parentLeft;
      }
      modal.style.left = `${event.offsetX + diff + 10}px`;
      modal.style.top = `${event.clientY + 10}px`;
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
  <div
    class="scale-0 lg:scale-100 absolute bg-black text-white hidden font-mono px-2 py-1 text-xs"
  >
    {href}
  </div>
  <span class={noLine ? "" : "underline underline-offset-2"}>
    <slot />
  </span>
</a>
