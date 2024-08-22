/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      laptop: { max: "768px" },
      desktop: "1042px",
      ldesktop: "1520px",
      xldesktop: "1820px",
    },
    extend: {
      backgroundColor: {
        customgradient: "linear-gradient(to right  , #13b0f5 3%, #e70faa 100%)",
      },
    },
  },
  plugins: [],
};
