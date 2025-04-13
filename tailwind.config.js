/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00FFFF",
        neonPurple: "#A020F0",
        neonCyan: "#00FFCC"
      },
      // 可根据需要在此处扩展字体、断点等
    }
  },
  plugins: []
};
