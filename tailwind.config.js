/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,jsx,svg}"],
    theme: {
      extend: {
        fontFamily : {
          poppins: ['Poppins','sans-serif'],
        },
      },
      daisyui:{
        themes: ['light', 'dark']
      }
    },
    plugins: [
      require('daisyui'),
    ],
  }