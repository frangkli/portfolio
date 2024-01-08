<script lang="ts">
  import Link from "./Link.svelte";
  import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail,
    IconMenu2,
  } from "@tabler/icons-svelte";
  import { fade } from "svelte/transition";

  export let overlayVisible: boolean;
</script>

<div
  class="fixed lg:hidden z-20 w-full bg-gradient-to-b from-light via-light pb-5"
>
  <button
    class="p-5"
    on:click={() => {
      overlayVisible = !overlayVisible;
    }}><IconMenu2 /></button
  >
</div>

{#if overlayVisible}
  <aside
    class="absolute bg-light h-dvh w-screen text-center lg:hidden z-10"
    transition:fade={{ duration: 300 }}
  >
    <div class="flex flex-col gap-10 pt-40">
      <div>
        <h1 class="italic text-5xl font-cursive">Frank Li</h1>
      </div>
      <div>
        <ul class="leading-loose text-xl">
          <li><Link href="/" noLine>Home</Link></li>
          <li><Link href="/cv" noLine>CV</Link></li>
          <li><Link href="/projects" noLine>Projects</Link></li>
          <li><Link href="/academics" noLine>Academics</Link></li>
          <li><Link href="/tech" noLine>Tech</Link></li>
        </ul>
      </div>
      <div class="w-full flex flex-row gap-5 px-10 justify-center">
        <div class="mx-auto">
          <Link href="https://github.com/frangkli"
            ><IconBrandGithub size={32} /></Link
          >
        </div>

        <div class="mx-auto">
          <Link href="https://linkedin.com/in/anglifrank"
            ><IconBrandLinkedin size={32} /></Link
          >
        </div>

        <div class="mx-auto">
          <Link href="mailto://frankla0203@outlook.com"
            ><IconMail size={32} /></Link
          >
        </div>
      </div>
      <div class="text-lg">
        <p>&copy; 2024 Frank Li.</p>
      </div>
    </div>
  </aside>
{/if}

<aside class="h-screen py-64 sticky top-0 hidden lg:block">
  <div class="flex flex-col gap-10 h-full">
    <div class="w-max">
      <h1 class="italic text-5xl font-cursive">Frank Li</h1>
    </div>
    <div class="container grow text-right">
      <ul class="leading-loose">
        <li><Link href="/" noLine>Home</Link></li>
        <li><Link href="/cv" noLine>CV</Link></li>
        <li><Link href="/projects" noLine>Projects</Link></li>
        <li><Link href="/academics" noLine>Academics</Link></li>
        <li><Link href="/tech" noLine>Tech</Link></li>
      </ul>
    </div>
    <div class="container items-center flex flex-row gap-5">
      <Link href="https://github.com/frangkli"><IconBrandGithub /></Link>

      <Link href="https://linkedin.com/in/anglifrank"
        ><IconBrandLinkedin /></Link
      >
      <Link href="mailto://frankla0203@outlook.com"><IconMail /></Link>
    </div>
    <div>
      <p>&copy; 2024 Frank Li.</p>
    </div>
  </div>
</aside>
