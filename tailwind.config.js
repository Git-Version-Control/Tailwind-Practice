/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "src/**/*.{js,jsx,ts,tsx}","public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#000000',
          secondary: '#333333',
          // Add more dark theme colors if needed
        },
        light: {
          primary: '#ffffff',
          secondary: '#f3f3f3',
          // Add more light theme colors if needed
        },
      },
    },
  },
  plugins: [],
  darkMode:"class"
}

