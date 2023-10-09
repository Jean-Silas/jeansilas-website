import plugin from 'tailwindcss/plugin';

export default plugin(({ addUtilities , matchUtilities, theme }) => {
    addUtilities({
        '.text-5xl-fluid': {
            'font-size': 'clamp(1rem, 10vw, 3rem)'
        },
        '.text-2xl-fluid': {
            'font-size': 'clamp(0.75rem, 8vw, 1.5rem)',
            'line-height': 'clamp(1.75rem, 8vw, 2rem)'

   
        },
        '.text-xl-fluid': {
            'font-size': 'clamp(0.75rem, 4vw, 1.125rem)'
        }
    })
}, {
    
});
