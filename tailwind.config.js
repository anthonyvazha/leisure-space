/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "60/20/20": "60% 20% 20%",
      },
      colors: {
        primary: "#2892d7",
      },
    },
  },
  plugins: [],
};
