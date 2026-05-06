import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          indigo: "#6366F1",
          purple: "#8B5CF6",
          cyan: "#22D3EE",
        },
        dark: {
          primary: "#0F0F1A",
          secondary: "#1E1E2E",
          card: "#16162A",
          border: "rgba(99, 102, 241, 0.15)",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #6366F1, #8B5CF6)",
        "gradient-brand-cyan": "linear-gradient(135deg, #6366F1, #22D3EE)",
        "gradient-dark": "linear-gradient(135deg, #1E1E2E, #16162A)",
      },
      animation: {
        shimmer: "shimmer 1.5s infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      boxShadow: {
        "glow-indigo": "0 0 20px rgba(99, 102, 241, 0.3)",
        "glow-purple": "0 0 20px rgba(139, 92, 246, 0.3)",
        "glow-cyan": "0 0 20px rgba(34, 211, 238, 0.3)",
        "card": "0 4px 24px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
