/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#1e3a8a", // A deep blue for dark mode
          secondary: "#9333ea", // A vibrant purple for dark mode
          accent: "#f59e0b", // A warm amber for dark mode
          neutral: "#1f2937", // A dark gray for dark mode
          "base-100": "#1f2937", // A dark gray background for dark mode
          info: "#0ea5e9", // A bright blue for info
          success: "#10b981", // A fresh green for success
          warning: "#f97316", // A bold orange for warnings
          error: "#ef4444", // A striking red for errors
        },
      },
    ],
  },
  darkMode: "class", // Enable dark mode via class
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
