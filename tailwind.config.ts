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
        // SynFin brand colors
        teal: {
          50:  "#e6faf8",
          100: "#b3f0ea",
          200: "#80e6dc",
          300: "#4ddcce",
          400: "#1ad2c0",
          500: "#00BFB3",   // Primary brand teal
          600: "#009e94",
          700: "#007d75",
          800: "#005c56",
          900: "#003b37",
        },
        navy: {
          50:  "#e8ecf4",
          100: "#c0cce3",
          200: "#98acd2",
          300: "#708bc1",
          400: "#4a6aad",
          500: "#1e3a6e",   // Primary navy
          600: "#183060",
          700: "#122652",
          800: "#0c1c44",
          900: "#060e24",
        },
        brand: {
          teal:     "#00BFB3",
          "teal-dark": "#009e94",
          blue:     "#0A7EC4",
          navy:     "#0F172A",
          "gray-light": "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #00BFB3 0%, #0A7EC4 100%)",
        "hero-gradient":  "linear-gradient(135deg, #0F172A 0%, #1e3a6e 60%, #00BFB3 120%)",
      },
    },
  },
  plugins: [],
};

export default config;
