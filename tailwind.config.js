/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
      },
      screens: {
        xs: "300px",
        sm: "375px",
        sml: "500px",
        md: "640px",
        mdl: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        bodyFont: ["Inter", "sans-serif"],
        titleFont: ["Helvetica", "sans-serif"],
      },
      colors: {
        primeColor: "#262626",
        lightText: "#6D6D6D",
        // Primary Walmart colors
        primary: '#0071ce', // Walmart's signature blue
        secondary: '#ffc220', // Yellow often seen in promotions
        lightGray: '#f3f3f3', // Background gray for cards and sections
        darkGray: '#333333', // Text color for headings and descriptions

        // Utility colors
        danger: '#d32f2f', // Red for badges or error messages
        success: '#388e3c', // Green for positive actions or stock indicators
      },
      boxShadow: {
        testShadow: "0px 0px 54px -13px rgba(0,0,0,0.7)",
        card: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for cards
        hover: '0 6px 12px rgba(0, 0, 0, 0.15)', // Slightly stronger shadow for hover
        md: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      spacing: {
        18: '4.5rem', // Custom spacing for tighter layouts
        22: '5.5rem', // Additional custom spacing
      },
      borderRadius: {
        xl: '1rem', // Larger radius for rounded card corners
      },
      animation: {
        pulse: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
