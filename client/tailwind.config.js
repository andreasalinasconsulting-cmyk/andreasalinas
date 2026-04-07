/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        copper: {
          DEFAULT: '#B87333',
          light: '#D4956A',
          dark: '#8B5A1A',
        },
        charcoal: '#1C1C1C',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
