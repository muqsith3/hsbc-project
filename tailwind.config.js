/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondColor: "#BFD7D7",
        footer: "#4C5254",
        white2: "#F8F3F2",
      },
    },
  },
  plugins: [],
};
