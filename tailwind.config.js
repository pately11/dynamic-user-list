/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      sm: '0.875rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['SFMono-Regular', 'ui-monospace'],
    },
    extend: {
      colors: {
        primary: '#1D4ED8',
        secondary: '#F59E0B',
      },
    },
  },
  plugins: [],
};
