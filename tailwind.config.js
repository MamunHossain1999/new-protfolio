/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        'code': ['Fira Code', 'monospace'],
      },
      animation: {
        'gradient-shift': 'gradientShift 4s ease infinite',
        'wave': 'wave 2s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        wave: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '75%': { transform: 'rotate(-10deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), 0 0 20px currentColor',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3), 0 0 30px currentColor',
            transform: 'scale(1.05)'
          },
        },
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
