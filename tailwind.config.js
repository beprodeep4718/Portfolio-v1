/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490DC',
        secondary: '#FFC312',
        tertiary: '#FF6384',
        quaternary: '#36A2EB',
        quinary: '#78C679',
        senary: '#F79F1F',
        septenary: '#C70039',
        cyenPrimary: '#15F5BA',
        
      }
    },
  },
  plugins: [],
}