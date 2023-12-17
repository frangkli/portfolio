/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: "#ecedf4",
        background: "#131420",
        primary: "#836ba8",
        secondary: "#150d16",
        accent: "#a16ba8",
      },
    },
  },
  plugins: [],
};
