// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         salernomi: ["Salernomi J"],
//         inter: ["Inter Display", "sans-serif"],
//       },
//     },
//   },
//   plugins: [require("@tailwindcss/forms")],
// };

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./src/components/**/*.{js,ts,jsx}",
    "./src/app/**/*.{js,ts,jsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all files in the src directory
  ],

  theme: {
    extend: {
      screens: {
        fhd: "1920px", // Full HD (1080p)
        qhd: "2460px", // Quad HD (1440p)
        lhd: "1500px", // Quad HD (1440p)
      },
      fontFamily: {
        salernomi: ["Salernomi J"],
        inter: ['"Inter Display"', "sans-serif"],
      },
    },
  },
};

export default tailwindConfig;
