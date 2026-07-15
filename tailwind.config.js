/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "Noto Sans Tamil", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "Noto Sans Tamil", "serif"],
      },
      colors: {
        ink: "#071446",
        ocean: "#0788f5",
        violet: "#6112d6",
        magenta: "#f01499",
        ember: "#ff8a19",
        forest: "#173f35",
        leaf: "#2f7a62",
        mist: "#edf5ef",
        pearl: "#fffaf0",
        gold: "#c9953f",
        clay: "#9b5f38",
      },
      boxShadow: {
        glow: "0 22px 60px rgba(34, 88, 245, 0.18)",
        soft: "0 18px 45px rgba(7, 20, 70, 0.09)",
        premium: "0 24px 70px rgba(20, 32, 29, 0.14)",
      },
    },
  },
  plugins: [],
};
