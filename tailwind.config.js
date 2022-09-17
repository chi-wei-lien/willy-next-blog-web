/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'phone': '250px',
      'tablet': '750px',
      'laptop': '1024px',
      'desktop': '1280px',
    },
    extend: {
      colors: {
        'shadow': 'rgba(25, 25, 25, 0.67)',
        'dark': 'rgba(34, 34, 46)'
      },
      backgroundImage: {
        'hero-img': 'radial-gradient(circle, rgba(247,246,157,0.006039915966386533) 22%, rgba(18,18,18,0.6474964985994398) 60%), url("/images/cover.png")'
      },
      fontFamily: {
        'vt323': ['VT323', 'monospace'],
        'ibm-sans': ['IBM Plex Sans', 'sans-serif'],
        'ibm-mono': ['IBM Plex Sans', 'monospace'],
      },
      animation: {
        'bg-fade-out-1.5': 'bgFadeOut 1.5s ease-in-out',
        'fade-in-2': 'fadeIn 2s ease-in-out',

        /* Typing effect learned from https://vanntile.com/blog/composited-typing-animation#the-starting-point */
        'cursor': 'cursor 0.4s linear infinite alternate',
        'type': 'type 2s ease-out 0.8s 1 normal both',
      },
      keyframes: theme => ({
        bgFadeOut: {
          '0%': { backgroundColor: theme('colors.black') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
        fadeIn: {
          '0%': { opacity: '0'},
          '100%': { opacity: '1'},
        },

        /* Typing effect learned from https://vanntile.com/blog/composited-typing-animation#the-starting-point */
        type: {
          '0%': { width: '0ch' },
          '7.5%': { width: '1ch' },
          '15%': { width: '2ch' },
          '22.5%': { width: '3ch' },
          '30%': { width: '4ch' },
          '37.5%': { width: '5ch' },
          '45%': { width: '6ch' },
          '52.5%': { width: '7ch' },
          '60%': { width: '8ch' },
          '67.5%': { width: '9ch' },
          '75%': { width: '10ch' },
          '82.5%': { width: '11ch' },
          '90%': { width: '12ch' },
          '100%': { width: '13ch' },
        },
        cursor: {
          '0%, 50%': { opacity: 0 },
          '51%, 100%': { opacity: 1 },
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
