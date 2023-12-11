import plugin from 'tailwindcss/plugin';

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
                                    li: {

                                    }
                                }
                            }
                        },
                    },
                    card: {
                        css: {
                            '--tw-prose-body': "white",
                            '--tw-prose-headings': "white",
                            '--tw-prose-lead': "white",
                            '--tw-prose-links': "white",
                            '--tw-prose-bold': "white",
                            '--tw-prose-counters': "white",
                            '--tw-prose-bullets': "white",
                            '--tw-prose-hr': "white",
                            '--tw-prose-quotes': "white",
                            '--tw-prose-quote-borders': "white",
                            '--tw-prose-captions': "white",
                            '--tw-prose-code': "white",
                            '--tw-prose-pre-code': "white",
                            '--tw-prose-pre-bg': "white",
                            '--tw-prose-th-borders': "white",
                            '--tw-prose-td-borders': "white"
                        }
                    },
                    article: {
                        css: {
                            '--tw-prose-body': theme('colors.space[100]'),
                            '--tw-prose-headings': "white",
                            '--tw-prose-lead': theme('colors.space[200]'),
                            '--tw-prose-links': theme('colors.space[50]'),
                            '--tw-prose-bold': theme('colors.space[50]'),
                            '--tw-prose-counters': theme('colors.space[300]'),
                            '--tw-prose-bullets': theme('colors.space[300]'),
                            '--tw-prose-hr':theme('colors.space[200]'),
                            '--tw-prose-quotes': theme('colors.space[200]'),
                            '--tw-prose-quote-borders': theme('colors.space[500]'),
                            '--tw-prose-captions': theme('colors.space[200]'),
                            '--tw-prose-code': theme('colors.space[100]'),
                            '--tw-prose-pre-code': theme('colors.space[200]'),
                            '--tw-prose-pre-bg': theme('colors.space[900]'),
                            '--tw-prose-th-borders': "white",
                            '--tw-prose-td-borders': "white"
                        }
                    }
                }),
            },
        },
    },
);
