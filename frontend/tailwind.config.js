/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <-- Tambahkan ini agar dark mode manual
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // Plugin Flowbite
  ],
}
