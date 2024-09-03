const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(dropdown|navbar|menu|divider|popover|button|ripple|spinner).js"
  ],
  theme: {
    extend: {
      height:{
        header:"560px",
        rate:"400px",
      },
      fontSize:{
        h1:"2.6rem",
      },
      screens:{
        xs:"475px",
      },
      colors: {
        primary: "#3498db",
        main: "#080A1A",
        subMain: "#F20000",
        dry: "#0B0F29",
        dark: "#1A1D23",
        light: "#F7F7F7",
        star: "#FFB000",
        text: "#C0C0C0",
        border: "#4b5563",
        dryGray: "#E0D505",
        charcoal : "#34495e",
        NavBG: "#0B123F",
        midNightGreen:"#004953",
        bluishWhite:"#7D78C7",
      },
    },
  },
  plugins: [nextui()],
}