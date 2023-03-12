/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#b37300',
      'primary-dark': '#191000',
      black: '#000',
      'gray-0': '#F4F4F4',
      'gray-1': '#5a5a5a',
      'gray-2': '#333333',
      'gray-3': '#C6C6C6',
      white: '#fff',
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
