/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-black': '#121212',
        'apple-white': '#F9F9F9',
        'apple-gray': '#E0E0E0',
      },
    },
  },
  plugins: [],
}

