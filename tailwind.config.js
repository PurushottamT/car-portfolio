/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js",
  ],

  theme: {
    extend: {
      colors: {
        customOrange: "#ffb84b",
      },
      fontSize: {
        "10xl": "240px",
      },
    },
  },
  plugins: [],
};
