/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "dark-blue": "#002147",
        "light-blue": "#68C8FC",
        "dark-gray": "#333333",
        "light-gray": "#d6d6d6",
        "background-gray": "#f9f9f9",
      },
    },
  },
  plugins: [],
};
