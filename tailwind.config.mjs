/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        salernomi: ["Salernomi J"],
        inter: ["Inter Display", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
