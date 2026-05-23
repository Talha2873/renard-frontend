/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        champagne: {
          400: '#c9a84c',
          500: '#b8973e',
        },
        navy: {
          950: '#050d1a',
          900: '#0a1628',
        },
        charcoal: {
          900: '#111318',
        },
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
