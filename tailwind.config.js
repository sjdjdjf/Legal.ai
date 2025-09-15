/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f2ff',
          100: '#e6eaff',
          500: '#1a2a6c',
          600: '#162458',
          700: '#121e44',
          800: '#0e1930',
          900: '#0a131c',
        },
        gold: {
          400: '#ffd700',
          500: '#d4af37',
          600: '#c19b26',
          700: '#a68215',
        }
      },
      fontFamily: {
        'serif': ['Merriweather', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      }
    },
  },
  plugins: [],
};