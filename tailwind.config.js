/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideinLeft: {
          from: { transform: 'translateX(-100%);' },
          to: { transform: 'translateX(0);' },
        },
        slideinRight: {
          from: { transform: 'translateX(100%);' },
          to: { transform: 'translateX(0);' },
        },
        slideoutLeft: {
          from: { transform: 'translateX(0);' },
          to: { transform: 'translateX(-100%);' },
        },
        slideoutRight: {
          from: { transform: 'translateX(0);' },
          to: { transform: 'translateX(100%);' },
        },
        fadein: {
          from: { opacity: '0;' },
          to: { opacity: '1;' },
        },
        fadeout: {
          from: { opacity: '1;' },
          to: { opacity: '0;' },
        },
        zoomIn: {
          from: { transform: 'scale(0.5);' },
          to: { transform: 'scale(1);' },
        },
        zoomOut: {
          from: { transform: 'scale(1);' },
          to: { transform: 'scale(0.5);' },
        },
        slideDown: {
          from: { transform: 'translateY(-100%);' },
          to: { transform: 'translateY(0);' },
        },
        slideUp: {
          from: { transform: 'translateY(0);' },
          to: { transform: 'translateY(-100%);' },
        },
        bounce: {
          'from, 20%, 50%, 80%, to': { transform: 'translateY(0);' },
          '40%': { transform: 'translateY(-30px);' },
          '60%': { transform: 'translateY(-15px);' },
        },
      },
      animation: {
        slideinLeft: 'slideinLeft 1.5s ease-out forwards ',
        slideinRight: 'slideinRight 1.5s ease-out forwards',
        slideoutLeft: 'slideoutLeft 1.5s ease-in forwards',
        slideoutRight: 'slideoutRight 1.5s ease-in forwards',
        fadein: 'fadein 1.5s ease-in forwards',
        fadeout: 'fadeout 1.5s ease-out forwards',
        zoomIn: 'zoomIn 1.5s ease-in forwards',
        zoomOut: 'zoomOut 1.5s ease-out forwards ',
        bounce: 'bounce 1.5s infinite',
        slideDown: 'slideDown 1.5s ease-out forwards',
        slideUp: 'slideUp 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
