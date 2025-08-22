/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        voltex: {
          DEFAULT: "hsl(var(--voltex))",
          50: "hsl(var(--voltex-50))",
          100: "hsl(var(--voltex-100))",
          200: "hsl(var(--voltex-200))",
          300: "hsl(var(--voltex-300))",
          400: "hsl(var(--voltex-400))",
          500: "hsl(var(--voltex-500))",
          600: "hsl(var(--voltex-600))",
          700: "hsl(var(--voltex-700))",
          800: "hsl(var(--voltex-800))",
          900: "hsl(var(--voltex-900))"
        },
        base: {
          900: "hsl(var(--base-900))",
          800: "hsl(var(--base-800))",
          700: "hsl(var(--base-700))",
          600: "hsl(var(--base-600))",
          500: "hsl(var(--base-500))"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(107, 209, 109, 0.15)"
      }
    },
  },
  plugins: [],
};
