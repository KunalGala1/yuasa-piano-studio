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
    },
  },
  plugins: [],
};
export default config;
