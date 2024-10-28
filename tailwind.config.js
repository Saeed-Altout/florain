/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fraunces: ["Fraunces", "serif"],
      },
    },
    colors: {
      main: "#7E6541",
      primary: "#A58F6E",
      secondary: "#EEEBE7",
    },
  },
  plugins: [],
};
