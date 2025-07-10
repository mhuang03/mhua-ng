import tailwind_theme from "tailwindcss/defaultTheme";

const config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...tailwind_theme.fontFamily.sans],
      },
    },
  },
};

export default config;
