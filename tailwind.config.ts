import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        image: "url('/images/fourBannerImages/banner-playStation.png')",
        women: "url('/images/fourBannerImages/banner-women.png')",
        alexa: "url('/images/fourBannerImages/banner-alexa.png')",
        perfume: "url('/images/fourBannerImages/banner-perfume.png')",
      },
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
      layout: {
        radius: {
          small: '4px',
        },
      },
      themes: {
        light: {
          colors: {
            default: '#000000',
            secondary: '#f8fafc',
          },
        },
        dark: {},
      },
    }),
  ],
};
export default config;
