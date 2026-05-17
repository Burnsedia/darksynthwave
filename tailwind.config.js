import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {}
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        darksynthwave: {
          "primary": "#00f5d4",
          "secondary": "#ff2a6d",
          "accent": "#f9c80e",
          "neutral": "#160b2b",
          "base-100": "#0b0618",
          "base-200": "#120a24",
          "base-300": "#1b1035",
          "base-content": "#f5f3ff",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272"
        }
      }
    ]
  }
};
