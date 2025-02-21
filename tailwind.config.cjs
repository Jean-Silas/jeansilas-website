import siteColors from './tailwind/colors';
import proseStyles from './tailwind/prose';
import fluidText from './tailwind/fluid';
import deviceBreakpoints from './tailwind/device';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        // I think I've stopped using Inter entirely at this point.
        fontFamily: {
            sans: ["'Montserrat Variable', sans-serif"],
            title: ["'Montserrat Variable', sans-serif"],
            mono: ['Martian Mono Variable', 'consolas', 'serif'],
        },
        extend: {
            aspectRatio: {
                '4/3': '4 / 3',
                tarot: '11 / 19',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/container-queries'),
        siteColors,
        proseStyles,
        fluidText,
        deviceBreakpoints,
    ],
};
