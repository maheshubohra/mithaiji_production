// tailwind.config.js or tailwind.config.mjs

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this based on your folder structure
  ],
  theme: {
    extend: {
      keyframes: {
        takeoff: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "50%": { transform: "translateY(-50px)", opacity: "0.8" },
          "100%": { transform: "translateY(-100px)", opacity: "0" },
        },
      },
      animation: {
        takeoff: "takeoff 0.8s ease-in-out",
      },
    },
  },
  plugins: [],
};
