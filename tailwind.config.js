/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'], 
      },
      colors: {
        'red-500': '#F43F3F',
        'gray-100': '#EFEFEF',
        'gray-150': '#D7D7D7',
        'gray-200': '#E2E9ED',
        'gray-300': '#C9C9C9',
        'gray-350': '#ADADAD',
        'gray-500': '#2C2C30',
        'gray-550': '#3B3B42',
        'gray-600': '#26272B',
        'gray-950': '#131316'
      }, 
      boxShadow: {
        'custom': '0px 28px 22.1px -32px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(95.99deg, #202024 -0.24%, rgba(32, 29, 33, 0) 100%)',
      },
      overflow: {
        'x-initial': 'initial', 
      },
    },
  },
  plugins: [],
};
