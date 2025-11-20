/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // 🌙 Enables manual dark mode toggling
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        terracotta: {
          light: "#f3d1b0",
          DEFAULT: "#b07443",
          dark: "#754b24",
        },
        sand: "#fbeee2",
        clay: "#fffaf6",
      },
      boxShadow: {
        glow: "0 0 30px rgba(176, 116, 67, 0.3)",
        soft: "0 8px 32px rgba(176, 116, 67, 0.15)",
      },
      keyframes: {
        waveFloat: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-25px)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        waveFloat: "waveFloat 18s ease-in-out infinite alternate",
        fadeIn: "fadeIn 0.8s ease-in-out both",
      },
    },
  },
  plugins: [],
};
