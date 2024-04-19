/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",],
  theme: {
    extend: {
      boxShadow: {
        img_shadow: '10px 10px #8000ff'
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      }
    },
    fontFamily: {
      amaranth: ["'Amaranth'", "sans-serif"],
      dm: ["'DM Sans'", "sans-serif"],
      fira: ["'Fira Code'", "monospace"],
      titillium: ["'Titillium  Web'", "sans-serif"],
    }
  },
  plugins: [
  ]
}

