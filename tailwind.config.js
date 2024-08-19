/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        customTheme: {
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
      "dark",  // Default dark theme
      "cupcake" // Additional cupcake theme
    ],
  },
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e3a8a",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#9333ea",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#f59e0b",
          foreground: "#ffffff",
        },
        neutral: {
          DEFAULT: "#1f2937",
          foreground: "#ffffff",
        },
        info: {
          DEFAULT: "#0ea5e9",
          foreground: "#ffffff",
        },
        success: {
          DEFAULT: "#10b981",
          foreground: "#ffffff",
        },
        warning: {
          DEFAULT: "#f97316",
          foreground: "#ffffff",
        },
        error: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
        slideIn: 'slideIn 1s ease-in-out',
      },
    },
  },
  plugins: [require("daisyui")],
};
