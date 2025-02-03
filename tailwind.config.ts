import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],
      },
      colors: {
        'white': {
          DEFAULT: "#ffffff",
          50: '#f8f8f8'
        },
        gray: {
          darker: "#1d1d1d",
          dark: "#2b2b2b",
          light: "#989898",
          lighter: "#eee",
          DEFAULT: "#3d424a",
        },
        yellow: {
          darker: '#F9A01B',
          dark: "#FBA919",
          DEFAULT: "#FCB116",
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-motion'),
    require('tailwindcss-intersect') 
  ],
} satisfies Config;
