/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#f5f5f5",
        primary: "#4b6cb7",
        secondary: "#182848",
        accent: "#f9a826",
        beige: "#f5e6d3", // add your beige color
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        proxima: ['Proxima Nova', 'sans-serif'],
      },
      spacing: {
        '128': '32rem', // example custom spacing
      },
    },
  },
  plugins: [],
}
