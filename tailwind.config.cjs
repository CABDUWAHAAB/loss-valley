/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,scss}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f7f1e7",
        navy: "#101a35",
        violet: "#7868ff",
        "violet-light": "#9c90ff",
        peach: "#f4a287",
        "peach-dark": "#ca694d",
        acid: "#d8ff72",
        slate: "#647087"
      },
      fontFamily: {
        sans: ["Aptos", "Segoe UI Variable", "Segoe UI", "sans-serif"],
        mono: ["Cascadia Mono", "SFMono-Regular", "Consolas", "monospace"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      boxShadow: {
        lab: "0 30px 90px rgba(16, 26, 53, 0.18)"
      },
      keyframes: {
        curveDraw: { from: { strokeDashoffset: "1200" }, to: { strokeDashoffset: "0" } },
        markerPulse: { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.16)" } },
        rise: { from: { opacity: "0", transform: "translateY(24px)" }, to: { opacity: "1", transform: "translateY(0)" } }
      },
      animation: {
        "curve-draw": "curveDraw 1.25s cubic-bezier(.2,.8,.2,1) both",
        "marker-pulse": "markerPulse 1.8s ease-in-out infinite",
        rise: "rise .7s cubic-bezier(.2,.8,.2,1) both"
      }
    }
  },
  plugins: []
};
