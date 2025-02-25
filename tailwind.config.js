/** @type {import('tailwindcss').Config} */
export default {
    theme: {
        extend: {
            screens: {
                'max-lg': '1000px', // додано новий брейкпоінт
                'max-sm': '500px', // ще один новий брейкпоінт
            },
        },
    },
    plugins: [],
}