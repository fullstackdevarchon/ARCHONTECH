/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "up-down": {
          "0%, 100%": { transform: "translateY(10px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
      },
      animation: {
        "slow-bounce": "up-down 4s ease-in-out infinite",
        "glow": "pulse-glow 6s ease-in-out infinite",
      },
      colors: {
        "hero-bg": "#f0f4ff", // light pastel blue shade for hero section
      },
    },
  },
  plugins: [],
};
