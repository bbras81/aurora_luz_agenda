import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f1ecf1",
        foreground: "#262626",
        primary: "#d099d4",
        secondary: "#493548",
      },
    },
  },
  plugins: [],
} satisfies Config;
