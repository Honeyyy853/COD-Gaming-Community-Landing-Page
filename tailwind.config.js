/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        venite: ["Venite Adoremus", "sans-serif"],
        veniteStraight: ["Venite Adoremus Straight", "sans-serif"],
        zentry: ["Venite Adoremus Straight", "sans-serif"],
        "circular-web": ["Venite Adoremus", "sans-serif"],
        general: ["Venite Adoremus", "sans-serif"],
        "robert-medium": ["Venite Adoremus Straight", "sans-serif"],
        "robert-regular": ["Venite Adoremus", "sans-serif"],
      },
    },
  },
  plugins: [],
};
