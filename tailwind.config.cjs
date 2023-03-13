/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'snowBg': "url('/src/assets/snow.jpg')",
        'hotBg': "url('/src/assets/hot.jpg')",
      }
    },
  },
  plugins: [],
}