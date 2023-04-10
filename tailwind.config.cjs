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
        'defaultBg': "url('/src/assets/default.jpg')",
        'clearBg': "url('/src/assets/clear.jpg')",
        'cloudsBg': "url('/src/assets/clouds.jpg')",
        'drizzleBg': "url('/src/assets/Drizzle.jpg')",
        'mistBg': "url('/src/assets/Mist.jpg')",
        'rainBg': "url('/src/assets/Rain.jpg')",
        'thunderstormBg': "url('/src/assets/Thunderstorm.jpg')",
      }
    },
  },
  plugins: [],
}