/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: "'Saira', sans-serif ",
    },
    container: {
      padding: '1rem',
      center: true,
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#23262F',
        accent: '#286F6F',
        grey: {
          DEFAULT: '#919297',
          1: '#D9D9D9',
          2: '#E7E9EB',
          3: '#F5F5F5',
        },
        white: '#fff',
        pink: 'pink',
      },
      backgroundImage: {
        hero: 'url("/src/assets/img/hero-bg.png")',
        newsletter: 'url("/src/assets/img/newsletter.png")',
      },
      dropShadow: { primary: '0px 4px 10px rgba(15,27,51,0.05)' },
      boxShadow: {
        1: '0px 4px 30px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
