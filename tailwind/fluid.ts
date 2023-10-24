import plugin from 'tailwindcss/plugin';

export default plugin(({ addUtilities, matchUtilities, theme }) => {
    addUtilities({
        '.text-5xl-fluid': {
            'font-size': 'clamp(1rem, 15vw, 3rem)',
        },
        '.text-4xl-fluid': {
            'font-size': 'clamp(1.5rem, 10vw, 3rem)',
        },
        '.text-2xl-fluid': {
            'font-size': 'clamp(0.75rem, 8vw, 1.5rem)',
            'line-height': 'clamp(1.75rem, 8vw, 2rem)',
        },
        '.text-xl-fluid': {
            'font-size': 'clamp(0.75rem, 8vw, 1.125rem)',
        },

    });
    matchUtilities(
        {
            'text-fc': (value: string) => {
                const parsed_value = value.split(' ');
                return {
                    fontSize: `clamp(${parsed_value[0]}, ${parsed_value[1]}, ${parsed_value[2]})`,
                    // whiteSpace: 'nowrap',
                }
            }
        },
        { values: theme('containerSize') },
    );
}, {
    theme: {
        fluidSize: {
            h1: '4',
            h2: '3',
            h3: '2',
            h4: '1',
        },
        containerSize: {
            sm: '1.25rem_3vw_3rem',
            md: '1.25rem_3vw_3rem',
            lg: '1.25rem_3vw_3rem',
            xl: '1.25rem_3vw_3rem'
        },
        extend: {},
    },
});
