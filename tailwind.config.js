/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#1e3a8a", // A deep blue
          secondary: "#9333ea", // A vibrant purple
          accent: "#f59e0b", // A warm amber
          neutral: "#1f2937", // A dark gray
          "base-100": "#f3f4f6", // A light gray background
          info: "#0ea5e9", // A bright blue for info
          success: "#10b981", // A fresh green for success
          warning: "#f97316", // A bold orange for warnings
          error: "#ef4444", // A striking red for errors
        },
      },
    ],
  },
  darkMode: "class", // Use dark mode with class
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
