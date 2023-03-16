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
      'black-trans': '#00000000',
      'gray-0': '#F4F4F4',
      'gray-1': '#5a5a5a',
      'gray-2': '#333333',
      'gray-3': '#C6C6C6',
      white: '#fff',
      'fb-blue': '#4267B2',
      'whatsApp-green': '	#25D366',
      'twitter-blue': '		#1DA1F2',
      'linkedIn-blue': '		#0077b5 ',
      'gmail-red': '		#DB4437 ',
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
