/** @type {import('tailwindcss').Config} */

export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto':'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
}
