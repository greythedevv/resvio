/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        terracotta: {
          DEFAULT: '#C1694F',
          dark: '#a8573f',
          light: '#F3E7E0',
        },
        ink: '#1F2421',
        sage: '#9CAF88',
        ivory: '#FAF6F1',
        border: '#E8D9CD',
        muted: '#7A756D',
        body: '#5A5650',
      },
      fontFamily: {
        serif: ['Georgia', '"Source Serif 4"', 'serif'],
        sans: ['Inter', '"General Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};