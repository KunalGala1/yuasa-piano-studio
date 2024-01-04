import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        linearGradient:
          'linear-gradient(90deg, rgba(56,104,176,1) 0%, rgba(56,104,176,1) 25%, rgba(255,255,255,0) 100%)',
        linearGradient2:
          'linear-gradient(90deg, rgba(175,112,138,0) 0%, rgba(56,104,176,0.5) 100%)',
      },
      colors: {
        main: '#3868B0',
        light: 'rgb(202,212,228)',

        linkColor: '#af708a',
        textColor: '#697587',
        headingColor: '#102647',
        /* Rates Ticket Component */
        ratesTicketColorOne: '#E1EAE0',
        ratesTicketColorTwo: 'rgb(178, 198, 231)',
        ratesTicketColorThree: 'rgb(248, 240, 176)',
      },
      screens: {
        xs: '450px',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '25%, 75%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%': {
            transform: 'translateX(-6px)',
          },
          '50%': {
            transform: 'translateX(6px)',
          },
          '75%': { transform: 'translateX(-3px)' },
          '100%': { transform: 'translateX(0)' },
        },
        throb: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
      animation: {
        wiggle: 'wiggle 500ms ease-in-out',
        shake: 'shake 500ms ease-in-out',
        throb: 'throb 500ms ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
