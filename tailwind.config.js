/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#071446",
        ocean: "#0788f5",
        violet: "#6112d6",
        magenta: "#f01499",
        ember: "#ff8a19",
      },
      boxShadow: {
        glow: "0 22px 60px rgba(34, 88, 245, 0.18)",
        soft: "0 18px 45px rgba(7, 20, 70, 0.09)",
      },
    },
  },
  plugins: [],
};
