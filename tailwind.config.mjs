/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        light: "#fffdf8",
        dark: "#131420",
        secondary: "#150d16",
        "purple-1": "#836ba8",
        "purple-2": "#a16ba8",
      },
      fontFamily: {
        sans: ["Cormorant Garamond", "sans-serif"],
        cursive: ["Cedarville Cursive", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
