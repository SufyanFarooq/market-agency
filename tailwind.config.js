/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4B0082', // Indigo - Sophistication
        secondary: '#F5F6FA', // Light Gray
        accent: '#3498DB', // Electric Blue
        background: '#FAFAFA', // Off-white
        text: '#2D3436', // Charcoal
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 