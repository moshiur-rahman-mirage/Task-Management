/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'light': '#F8F5FC',
      'dark':'#2E1F4B',
      'primary':'#7A3BC4',
      'secondary':'#BE3BC4',
      'white-200':'#EBE2F6',
      'white-400':'#DECEF0',
      'pink':'#db2777'


    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

