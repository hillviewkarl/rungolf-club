import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: "#1B3A2B",
        green: {
          DEFAULT: "#2D6A4F",
          dark: "#1B3A2B",
          light: "#52B788",
        },
        gold: {
          DEFAULT: "#C9963B",
          light: "#E8B96A",
          dark: "#A67C2A",
        },
        cream: "#F5F0E8",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
