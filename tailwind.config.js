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
          "color-scheme": "dark",
          "base-100": "oklch(0% 0 0)",
          "base-200": "oklch(14% 0.004 49.25)",
          "base-300": "oklch(21% 0.006 56.043)",
          "base-content": "oklch(100% 0 0)",
          "primary": "oklch(71% 0.202 349.761)",
          "primary-content": "oklch(28% 0.109 3.907)",
          "secondary": "oklch(82% 0.111 230.318)",
          "secondary-content": "oklch(29% 0.066 243.157)",
          "accent": "oklch(75% 0.183 55.934)",
          "accent-content": "oklch(26% 0.079 36.259)",
          "neutral": "oklch(45% 0.24 277.023)",
          "neutral-content": "oklch(87% 0.065 274.039)",
          "info": "oklch(74% 0.16 232.661)",
          "info-content": "oklch(29% 0.066 243.157)",
          "success": "oklch(77% 0.152 181.912)",
          "success-content": "oklch(27% 0.046 192.524)",
          "warning": "oklch(90% 0.182 98.111)",
          "warning-content": "oklch(42% 0.095 57.708)",
          "error": "oklch(73.7% 0.121 32.639)",
          "error-content": "oklch(23.501% 0.096 290.329)",
          "radius-selector": "1rem",
          "radius-field": "0.5rem",
          "radius-box": "0.5rem",
          "size-selector": "0.25rem",
          "size-field": "0.25rem",
          "border": "1px",
          "depth": "0",
          "noise": "0"
        }
      }
    ]
  }
};
