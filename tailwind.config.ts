import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./animation/**/*.{js,ts,jsx,tsx,mdx}",
    "./responsive/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#061311",
        pine: "#0B3D35",
        chlorophyll: "#3FBF8C",
        plasma: "#A855F7",
        ion: "#7DE2D1",
        bone: "#F7F3EA",
        fog: "#DDE8E3"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "Space Grotesk", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(6, 19, 17, 0.13)",
        glow: "0 0 44px rgba(63, 191, 140, 0.26)"
      },
      backgroundImage: {
        grid: "linear-gradient(rgba(11, 61, 53, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(11, 61, 53, 0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
