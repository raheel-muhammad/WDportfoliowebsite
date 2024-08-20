import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['poppins', 'sans-serif'],

      },
      backgroundImage: {
        background: "linear-gradient(to right,#7000C020,#9500FF20)",
        back: "linear-gradient(to right,#9D00FF,#FF00AA)",
        line: "linear-gradient(to right,#990AFF,#C779FF,#990AFF)",
        submit: "linear-gradient(to right,#9D00FF10,#FF00AA10)",


      },

      backgroundColor: {
        primary: "#0F0D15",
      }
    },
  },
  plugins: [],
};
export default config;
