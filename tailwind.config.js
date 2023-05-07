/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        brown:"#603606",
        fade:"rgba(0,0,0,.3)",
        fade2:"rgba(0,0,0,.5)",
        iconB:"rgba(255, 255, 255, 0.13);",
      }
    },
  },
  plugins: [],
}

