/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        accent: "#00d9ff",
        accentPurple: "#915EFF",
        accentPink: "#ff4d8d",
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        display: ["'Outfit'", "sans-serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        neon: "0 0 20px rgba(0,217,255,0.5), 0 0 60px rgba(0,217,255,0.2)",
        neonPurple: "0 0 20px rgba(145,94,255,0.5), 0 0 60px rgba(145,94,255,0.2)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/herobg.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
