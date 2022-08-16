/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        defaultDark: {
          "primary": "#2e2b3c",
          "secondary": "#25202e",
          "accent": "#D27596",
          "neutral": "#42404f",
          "base-100": "#1f1c23",
          "info": "#327EF1",
          "success": "#16a34a",
          "warning": "#F9D939",
          "error": "#F21855",
        },
      },
    ],
  },
}
