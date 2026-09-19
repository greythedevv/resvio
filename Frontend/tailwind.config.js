/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: '#C1694F',
          dark: '#a8573f',
          light: '#F3E7E0',
        },
        ink: '#171614',
        sage: {
          DEFAULT: '#9CAF88',
          soft: '#EEF2E8',
        },
        red: {
          soft: '#FBEAEA',
          text: '#B14A4A',
        },
        ivory: '#FBF9F6',
        border: '#E9E4DD',
        muted: '#8A8378',
        body: '#57534A',
      },
      fontFamily: {
        serif: ['Georgia', '"Source Serif 4"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
      },
    },
  },
  plugins: [],
};