/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        white: '#fbf3f7',
        accent: '#f55b79',
        gray: '#c0aeb0',
        pink: '#f28daf',
        dark: '#3e2c26',
        swatch_6: '#de7594',
        swatch_7: '#a74f46',
        swatch_8: '#c0956b',
      },
    },
  },
  plugins: [],
};
