/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        voltex: {
          DEFAULT: "#6BD16D",   // Voltex green
          50: "#EEFAEF",
          100: "#D8F4DA",
          200: "#B2E9B6",
          300: "#8DDE93",
          400: "#6BD16D",
          500: "#49B64C",
          600: "#36933A",
          700: "#28702C",
          800: "#1C5220",
          900: "#113615"
        },
        base: {
          900: "#0E1116",
          800: "#141822",
          700: "#1B2130",
          600: "#232B3D",
          500: "#2C3650"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(107, 209, 109, 0.15)"
      }
    },
  },
  plugins: [],
};
