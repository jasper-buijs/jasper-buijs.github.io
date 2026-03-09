//import { radixThemePreset } from "radix-themes-tw";
import type { Config } from "tailwindcss";
//import colors from "tailwindcss/colors";

//const radixColors = radixThemePreset.theme?.colors ?? {};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    { pattern: /col-start-./ },
    { pattern: /col-span-./ },
    { pattern: /row-start-./ },
    { pattern: /row-span-./ },
  ],
  theme: {
    /*colors: {
      ...colors,
      ...radixColors,
    },*/
    extend: {
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-15deg)" },
          "50%": { transform: "rotate(15deg)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  //presets: [radixThemePreset]
};
export default config;
