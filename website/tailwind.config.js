/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./src/**/*.{jsx,js,html}'],
  prefix: '',
  safelist: [
    {
      pattern: /(agile|devops|security|alm|aiops)/,
      variants: ['hover', 'dark', 'focus', 'focus-visible', 'active'],
    },
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        brand: '#649A3D',
        agile: '#33D389',
        devops: '#279FEA',
        security: '#205AB7',
        alm: '#61B3B8',
        aiops: '#F7B731',
      },
      keyframes: {
        'accordion-down': {
          from: {height: '0'},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: '0'},
        },
        meteor: {
          '0%': {transform: 'rotate(215deg) translateX(0)', opacity: '1'},
          '70%': {opacity: '1'},
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'meteor-effect': 'meteor 5s linear infinite',
      },
    },
    plugins: [require('tailwindcss-animate')],
  },
};
