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
          "0%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "slow-bounce": "up-down 4s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
