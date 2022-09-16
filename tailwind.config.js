/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'shadow': 'rgba(25, 25, 25, 0.67)',
      },
      backgroundImage: {
        'hero-img': 'radial-gradient(circle, rgba(247,246,157,0.006039915966386533) 22%, rgba(18,18,18,0.6474964985994398) 60%), url("/images/cover.png")'
      },
      fontFamily: {
        'vt323': ['VT323', 'monospace'] 
      },
      animation: {
        'bg-fade-out-1.5': 'bgFadeOut 1.5s ease-in-out',
        'fade-in-2': 'fadeIn 2s ease-in-out'
      },
      keyframes: theme => ({
        bgFadeOut: {
          '0%': { backgroundColor: theme('colors.black') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
        fadeIn: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'},
        }
      }),
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [],
}
