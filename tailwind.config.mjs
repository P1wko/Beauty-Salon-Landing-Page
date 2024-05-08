const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        pinkLight: '#fbf3f7',
        accent: '#f55b79',
        gray: '#c0aeb0',
        pink: '#f28daf',
        dark: '#3e2c26',
        swatch_6: '#de7594',
        swatch_7: '#a74f46',
        swatch_8: '#c0956b',
      },
    },
    screens: {
      'mobile': '1080px',
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme, addBase }) {
      const components = {
        '.title': {
          fontSize: '30px',
          fontWeight: 'bold',
        },
        '.sectionTitle': {
          color: theme('colors.accent'),
          fontWeight: 'bold',
        },
        '.accentButton': {
          background: theme('colors.accent'),
          color: theme('colors.white'),
          borderRadius: '10px',
          padding: '15px 25px',
        },
      };
      addComponents(components);
      addBase({
        html: {
          scrollBehavior: 'smooth',
        },
        body: {
          lineHeight: '1.4',
        },
      });
    }),
    require('tailwind-hamburgers')
  ],
};
