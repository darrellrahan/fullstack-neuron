import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "rotate-slow": "rotate 100s linear infinite",
        "rotate-normal": "rotate 95s linear infinite",
        "rotate-fast": "rotate 90s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
