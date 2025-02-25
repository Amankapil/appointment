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
  content: ["./src/components/**/*.{js,ts,jsx}", "./src/app/**/*.{js,ts,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        salernomi: ["Salernomi J"],
        inter: ["Inter Display", "sans-serif"],
      },
      colors: {
        customBg: "var(--bg-custom)",
        customText: "var(--text-custom)",
        darkHover: "var(--text-dark-hover)",
      },
      fontSize: {
        custom64: "var(--text-64)",
        custom56: "var(--text-56)",
        custom20: "var(--text-20)",
      },
      width: {
        custom50: "var(--w-60)",
        custom75: "var(--w-200)",
        custom90: "var(--w-40)",
        w540: "540px",
        680: "680px",
        614: "614px",
        1200: "1200px",
        500: "500px",
        582: "582px",
        550: "550px",
      },
      height: {
        custom400: "var(--h-400)",
        custom600: "var(--h-600)",
        h540: "540px",
        680: "680px",
        1200: "1200px",
        500: "500px",
        276: "276px",
        308: "308px",
        340: "340px",
      },
      padding: {
        custom10: "var(--p-10)",
        custom20: "var(--p-20)",
      },
      margin: {
        custom15: "var(--m-15)",
        custom30: "var(--m-30)",
      },
      borderRadius: {
        customLg: "var(--rounded-lg)",
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  safelist: [{ pattern: /.*/ }],
};

export default tailwindConfig;
