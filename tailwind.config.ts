import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B6B',
        secondary: '#240b69',
        tertiary: '#0f0715',
        quaternary: '#050709',
        quinary: '#82368C',
        senary: '#FF6B6B',
        septenary: '#FFD166',
        octonary: '#33D9B2',
        nonary: '#6A3093',
        denary: '#82368C',
      },
    },
  },
  plugins: [],
} satisfies Config
