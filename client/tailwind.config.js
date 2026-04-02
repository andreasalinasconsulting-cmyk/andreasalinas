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
        charcoal: '#1A1A1A',
        offwhite: '#F5F0EB',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
