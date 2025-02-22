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
        background: "var(--background)",
        foreground: "var(--foreground)",
        line: "var(--line)",
      },
      width: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
} satisfies Config;
