import plugin from 'tailwindcss/plugin';

// Functions yoinked from https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
const round = (num: number) =>
    num
        .toFixed(7)
        .replace(/(\.[0-9]+?)0+$/, '$1')
        .replace(/\.0$/, '');
const rem = (px: number) => `${round(px / 16)}rem`;
const em = (px: number, base: number) => `${round(px / base)}em`;
const hexToRgb = (hex: string) => {
    hex = hex.replace('#', '');
    hex = hex.length === 3 ? hex.replace(/./g, '$&$&') : hex;
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `${r} ${g} ${b}`;
};
const twu = (u: number) => `${round(u * 0.25)}rem`

// TODO: Fluid text.

const articleCSS = {
    fontSize: rem(18),
    lineHeight: round(28 / 16),
    h1: {
        
        marginTop: rem(16),
        marginBottom: rem(36),
        width: '100%',
        borderRight: '16px', // Double-check rem conversion,
        borderColor: 'rgb(211 119 80)', // Use the theme color properly
        borderStyle: 'solid',
        paddingRight: rem(20),
        lineHeight: rem(48),
        fontSize: 'clamp(1.5rem, 10vw, 2.25rem)', // Make sure we have a proper function for this
        // TODO: Add in the h1:after stuff
    },
    'h1::after': {
        display: 'block',
        content: 'var(--tw-content)',
        height: rem(8),
        borderBottom: '2px',
        borderColor: 'rgb(211 119 80)', // border-bone-400 Use the theme color properly
        borderStyle: 'solid',
    },
    h2: {
        width: 'fit-content',
        borderBottom: '2px',
        borderColor: 'rgb(101 110 146)', // border-space-500 Use the theme color properly
        borderStyle: 'solid',
        padding: twu(2),
        fontSize: 'clamp(1.15rem, 4.6vw, 1.95rem)'
    },
    h3: {
        width: 'fit-content',
        borderLeft: '2px',
        borderColor: 'rgb(80 87 121)', // border-space-600 Use the theme color properly
        borderStyle: 'solid',
        paddingLeft: twu(2),
        fontSize: 'clamp(1.15rem, 4.6vw, 1.60rem)'
    },
    h4: {
        borderLeft: '4px',
        borderColor: 'rgb(66 71 98)', // border-space-700 Use the theme color properly
        borderStyle: 'solid',
        paddingLeft: twu(2),
        fontSize: 'clamp(1.15rem, 4.6vw, 1.55rem)'
    },
    h5: {
        fontWeight: '600',
        fontSize: 'clamp(1.15rem, 4.6vw, 1.45rem)'
    },
    p: {
        marginTop: '0px'
    },
    ol: {
        paddingLeft: '2ch'
    },
    ul: {
        paddingLeft: '2ch'
    },
    li: {
        paddingLeft: '0px'
    }
}

export default plugin(
    ({ addComponents, matchUtilities, theme }) => {
        matchUtilities({});
    },
    {
        theme: {
            extend: {
                // @ts-ignore
                typography: ({ theme }) => ({
                    DEFAULT: {
                        css: {
                            // "Globals"
                            fontFamily: 'Montserrat Variable, sans-serif',
                            '.frontmatter': {
                                ul: {
                                    marginTop: '0em',
                                    marginBottom: '0em',
                                    li: {
                                        backgroundColor: 'grey',
                                        borderRadius: '8px',
                                        width: 'max-content',
                                        padding: '0em 1ch',
                                    },
                                },
                            },

                            section: {
                                fontFamily: 'Montserrat Variable, sans-serif',
                            },
                            code: {
                                fontWeight: 400,
                                backgroundColor: theme('colors.space[900]'),
                                padding: '0.2ch 0.1ch',
                            },
                            h1: {
                                fontSize: '1.25em',
                            },
                            h2: {
                                fontSize: '1.125em',
                                'margin-top': 'unset',
                            },

                            '.card': {
                                ul: {
                                    li: {},
                                },
                            },
                        },
                    },
                    card: {
                        css: {
                            '--tw-prose-body': 'white',
                            '--tw-prose-headings': 'white',
                            '--tw-prose-lead': 'white',
                            '--tw-prose-links': 'white',
                            '--tw-prose-bold': 'white',
                            '--tw-prose-counters': 'white',
                            '--tw-prose-bullets': 'white',
                            '--tw-prose-hr': 'white',
                            '--tw-prose-quotes': 'white',
                            '--tw-prose-quote-borders': 'white',
                            '--tw-prose-captions': 'white',
                            '--tw-prose-code': 'white',
                            '--tw-prose-pre-code': 'white',
                            '--tw-prose-pre-bg': 'white',
                            '--tw-prose-th-borders': 'white',
                            '--tw-prose-td-borders': 'white',
                        },
                    },
                    article: {
                        css: {
                            '--tw-prose-body': theme('colors.space[50]'),
                            '--tw-prose-headings': 'white',
                            '--tw-prose-lead': theme('colors.space[200]'),
                            '--tw-prose-links': theme('colors.space[50]'),
                            '--tw-prose-bold': theme('colors.space[50]'),
                            '--tw-prose-counters': theme('colors.space[300]'),
                            '--tw-prose-bullets': theme('colors.space[300]'),
                            '--tw-prose-hr': theme('colors.space[200]'),
                            '--tw-prose-quotes': theme('colors.space[200]'),
                            '--tw-prose-quote-borders': theme('colors.space[500]'),
                            '--tw-prose-captions': theme('colors.space[200]'),
                            '--tw-prose-code': theme('colors.space[100]'),
                            '--tw-prose-pre-code': theme('colors.space[200]'),
                            '--tw-prose-pre-bg': theme('colors.space[900]'),
                            '--tw-prose-th-borders': 'white',
                            '--tw-prose-td-borders': 'white',
                            ...articleCSS
                        }
                    }
                }),
            },
        },
    },
);
