/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "",
        light: "#fff",
        accent: "",
        darken: "#1f2937",
        muted: "#374151",
      },
      fontFamily: {
        "sans-pro": ["Source Sans Pro", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "540px",
        md: "720px",
        lg: "960px",
        xl: "1140px",
        "2xl": "1320px",
      },
    },
  },

  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
