/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'hero-img': "linear-gradient(to right bottom, rgba(43, 108, 176, 0.9), rgba(43, 108, 176, 0.9)), url('/images/cover.png')"
        'hero-img': "radial-gradient(circle, rgba(247,246,157,0.006039915966386533) 22%, rgba(18,18,18,0.6474964985994398) 60%), url('/images/cover.png')"
      }
    },
  },
  plugins: [],
}
