/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
        h1: ["48px", "130%"],
        h2: ["40px", "130%"],
        h3: ["33px", "130%"],
        h4: ["28px", "130%"],
        h5: ["23px", "130%"],
        body: ["16px", "130%"],
        c1: ["13px", "130%"],
        c2: ["11px", "130%"],
        title: ["19px", "130%"],
      },
    },
  },
  plugins: [require("daisyui")],
};
