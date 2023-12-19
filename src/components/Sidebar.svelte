<script lang="ts">
  import Link from "./Link.svelte";
  import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail,
  } from "@tabler/icons-svelte";
</script>

<aside class="h-screen py-64 sticky top-0">
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
      <p>&copy; 2023 Frank Li.</p>
    </div>
  </div>
</aside>
