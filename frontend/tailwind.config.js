/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondaryColor: '#FFF3DB', 
        primaryColor: '#161616', 
      },
      boxShadow: {
        'navbar': '0 4px 6px -1px rgba(#FFF3DB, 0.1), 0 2px 4px -1px rgba(#FFF3DB, 0.1)',
        'outer-glow': '0 4px 8px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 255, 0, 0.5)',
      },
    },
  },
  plugins: [],
}