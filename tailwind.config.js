/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
      },
      fontSize: {
        xs: ["12px", "15.62px"], // 12px font size with 15.62px line height
      },
      fontWeight: {
        medium: "500", // DM Sans Medium (500)
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-none': {
          scrollbarWidth: 'none', /* Firefox */
        },
        '.scrollbar-hidden': {
          '&::-webkit-scrollbar': {
            display: 'none', /* Hide scrollbar for Webkit browsers */
          },
        },
      });
    },
  ]
}

