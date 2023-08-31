/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(246, 80%, 60%)',
        work: 'hsl(15, 100%, 70%)',
        play: 'hsl(195, 74%, 62%)',
        study: 'hsl(348, 100%, 68%)',
        exercise: 'hsl(145, 58%, 55%)',
        social: 'hsl(264, 64%, 52%)',
        selfcare: 'hsl(43, 84%, 65%)',
        neutralVeryDarkBlue: 'hsl(226, 43%, 10%)',
        neutralDarkBlue: 'hsl(235, 46%, 20%)',
        neutralDesaturatedBlue: 'hsl(235, 45%, 61%)',
        neutralPaleBlue: 'hsl(236, 100%, 87%)',
      },
      fontSize: {
        cardFontSize: '18px',
      },
      fontWeight: {
        cardHeavyWeight: 500,
        cardMediumWeight: 400,
        cardLightWeight: 300,
      },
      fontFamily: {
        rubikLight: 'Rubik-Light',
        rubikRegular: 'Rubik-Regular',
        rubikMedium: 'Rubik-Medium',
      },
      keyframes: {
        fade: {
          '0%,100% ': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      animation: {
        fadeContent: 'fade 1s linear 1',
      },
    },
  },
  plugins: [],
};
