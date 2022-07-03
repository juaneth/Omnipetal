/** @type {import('tailwindcss').Config} */

function withOpacity(cssVariable) {
    return ({ opacityValue }) => {
        return opacityValue ? `rgba(var(${cssVariable}), ${opacityValue})` : `rgb(var(${cssVariable}))`
    }
}

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,tsx}",
    ],
    theme: {
        extend: {},
        colors: {
            background: withOpacity('--color-background'),
            panel: withOpacity('--color-panel'),
            darker: withOpacity('--color-darker'),

            textPrimary: withOpacity('--color-textPrimary'),
            textSecondary: withOpacity('--color-textSecondary'),
            textTertiary: withOpacity('--color-textTertiary'),
            textHint: withOpacity('--color-textHint'),

            shadowPrimary: withOpacity('--color-shadowPrimary'),
            shadowSuccess: withOpacity('--color-shadowSuccess'),
            shadowError: withOpacity('--color-shadowError'),

            borderPrimary: withOpacity('--color-borderPrimary'),
            borderGray: withOpacity('--color-borderGray'),
            borderSuccess: withOpacity('--color-borderSuccess'),
            borderError: withOpacity('--color-borderError'),

            backgroundPrimary: withOpacity('--color-backgroundPrimary'),
            backgroundSuccess: withOpacity('--color-backgroundSuccess'),
            backgroundError: withOpacity('--color-backgroundError'),

            'min': '#E4FC53',
            'max': '#5DF644',
            'close': '#D94B4B',
        }
    },
    plugins: [
        require('flowbite/plugin')
    ],
}