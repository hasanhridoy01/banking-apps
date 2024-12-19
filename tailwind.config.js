/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3A8A", 
        secondary: "#10B981", 
        accent: "#F59E0B", 
        dark: {
          bg: "#1F2937", 
          text: "#D1D5DB", 
          border: "#374151", 
        },
        light: {
          bg: "#FFFFFF", 
          text: "#1F2937", 
          border: "#E5E7EB", 
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#1F2937",
            h1: { color: "#1E3A8A" },
            h2: { color: "#1E3A8A" },
            h3: { color: "#1E3A8A" },
            a: { color: "#10B981", "&:hover": { color: "#059669" } },
          },
        },
        dark: {
          css: {
            color: "#D1D5DB",
            h1: { color: "#FFFFFF" },
            h2: { color: "#FFFFFF" },
            h3: { color: "#FFFFFF" },
            a: { color: "#F59E0B", "&:hover": { color: "#D97706" } },
          },
        },
      },
    },
  },
  plugins: [],
};
