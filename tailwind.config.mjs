const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
            ...colors,
            "principal": "#005900",
            "principal_border": "#267f26",
            "principal_hover": "#1c6b1c",
            "txt": "#0C0F14",
            "txt_read": "#0C0F14dd",
            "background": "#dfffe3",
            "background_selected": "#C4DDCA",
            "alice": "#EBF2FA",
            "white": "#ffffff",
            "yellow": "#ffb100",
        },
        extend: {

        }
    },
    plugins: [],
}
