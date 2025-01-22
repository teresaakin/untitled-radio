// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        pulseButton: "pulseButton 1.5s infinite",
      },
      keyframes: {
        pulseButton: {
          "0%": {
            transform: "scale(0.95)",
            boxShadow: "0 0 0 0 rgba(11, 63, 209, 0.8)", // blue glow at the start
          },
          "70%": {
            transform: "scale(1)",
            boxShadow: "0 0 0 10px rgba(0, 0, 0, 0)", // pulse effect with glow
          },
          "100%": {
            transform: "scale(0.95)",
            boxShadow: "0 0 0 0 rgba(0, 0, 0, 0)", // back to og state

          },
        },
      },
      colors: {
        customBlue: "#083AC4",
        customBlack: "#0A0A0A",
        loveBlue: "#D9E2FF",
      },
      fontFamily: {
        mono: ["Overpass Mono", "monospace"], // Overpass Mono
        serif: ["Instrument Serif", "serif"], // Instrument Serif
        playground: ["PP Playground", "sans-serif"], // PP Playground
        inter: ["Inter", "sans-serif"], // Inter font
        vcr: ["VCR OSD MONO", "monospace"] // VCR OSD Mono
      },
    },
  },
  plugins: [],
};
