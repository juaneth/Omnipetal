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
            boxShadow: {
                't-sm': '0 -1px 2px 0 rgba(0, 0, 0, 0.05)',
                't-md': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                't-lg': '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                't-xl': '0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                't-2xl': '0 -25px 50px -12px rgba(0, 0, 0, 0.25)',
                't-3xl': '0 -35px 60px -15px rgba(0, 0, 0, 0.3)',
            }
        },
    },
    plugins: [require("daisyui")],

    daisyui: {
        themes: [{
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
        }, ],
    },
}