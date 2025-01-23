/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{html,js}"];
export const theme = {
  extend: {
    animation: {
      fadeIn: 'fadeIn 0.3s ease-out forwards',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0, transform: 'translateY(20px)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
  },
};
export const plugins = [];
