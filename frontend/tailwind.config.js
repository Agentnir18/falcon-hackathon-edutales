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
        'navbar': '0 -40px 80px 0px rgba(#FFF3DB, 0.1)',
        'outer-glow': '0 0 20px -10px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}