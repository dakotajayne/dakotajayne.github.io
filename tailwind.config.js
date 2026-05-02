/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "snpro" : ['SN Pro', 'sans-serif'],
        "bakbak" : ['BakBak One', 'sans-serif'],
        "serif" : ['Source Serif 4', 'sans-serif'],
        "merri" : ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

