import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f2f7f0",
          100: "#dff0d8",
          200: "#b7dba8",
          400: "#6aad58",
          600: "#3d7a32",
          800: "#1e4219",
        },
        earth: {
          50: "#faf6f0",
          200: "#e8d8be",
          400: "#c4a07a",
          600: "#8b6743",
        },
        bloom: {
          400: "#e8785a",
          600: "#c45530",
        },
      },
      fontFamily: {
        sans: ["var(--font-heebo)", "sans-serif"],
        display: ["var(--font-frank-ruhl)", "serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
