import plugin from 'tailwindcss/plugin';

export default plugin(({ addComponents, matchUtilities, theme }) => {}, {
    theme: {
        extend: {
            colors: {
                lich: '#f5f568',
                honey: {
                    50: '#fcfde9',
                    100: '#f8fbc6',
                    200: '#f4f890',
                    300: '#f5f568',
                    400: '#eee621',
                    500: '#decd14',
                    600: '#c0a20e',
                    700: '#99770f',
                    800: '#7f5e14',
                    900: '#6c4d17',
                    950: '#3f2909',
                },
                bone: {
                    50: '#fff7eb',
                    100: '#fee7d2',
                    200: '#f9d1b9',
                    300: '#e99b77',
                    400: '#d37750',
                    500: '#b44c41',
                    600: '#8e4948',
                    700: '#654543',
                    800: '#4c3d39',
                    900: '#362e2b',
                    950: '#1c1717',
                },
                space: {
                    50: '#f6f7f9',
                    100: '#ecedf2',
                    200: '#d5d8e2',
                    300: '#afb4ca',
                    400: '#848cac',
                    500: '#656e92',
                    600: '#505779',
                    700: '#424762',
                    800: '#393d53',
                    900: '#35384a',
                    950: '#22242f',
                },
            },
            aspectRatio: {
                '4/3': '4 / 3',
                tarot: '11 / 19',
            },
        },
    },
});
