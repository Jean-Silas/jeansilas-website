import plugin from 'tailwindcss/plugin';

export default plugin(({ addComponents, matchUtilities, theme }) => {}, {
    theme: {
        extend: {
            screens: {
                folded: '280px',
                unfolded: '540px',
            },
        },
    },
});
