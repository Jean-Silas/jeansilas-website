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
                                fontFamily: "'Martian Mono Variable', serif",
                                backgroundColor: theme('colors.spacedust[800]'),
                                padding: '0ch 0.1ch',
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
                    }
                }),
            },
        },
    },
);
