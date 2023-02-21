/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        main: "url(/src/assets/img/main.png)",
      },
      fontFamily: {
        vazir : ['Vazir-1'],
        medium : ['Vazir-2']
      },
    },
  },
  plugins: [],
};
