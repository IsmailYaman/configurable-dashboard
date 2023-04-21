/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './node_modules/@tremor/**/*.{js,ts,jsx,tsx}'
    ],

    theme: {
        extend: {
            transitionProperty: {
                opacity: 'opacity'
            }
        }
    },
    plugins: [require('daisyui')]
};
