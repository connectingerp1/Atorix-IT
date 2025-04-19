/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0fc',
          100: '#cce0f9',
          200: '#99c1f3',
          300: '#66a3ed',
          400: '#3384e7',
          500: '#0065e1', // Brand blue
          600: '#0051b4',
          700: '#003d87',
          800: '#00285a',
          900: '#00142d',
        },
        secondary: {
          50: '#fce8f3',
          100: '#f8d0e7',
          200: '#f2a1cf',
          300: '#ec73b7',
          400: '#e6449f',
          500: '#e01587', // Brand pink
          600: '#b3116c',
          700: '#860d51',
          800: '#590836',
          900: '#2d041b',
        },
        accent: {
          50: '#e6fcfe',
          100: '#ccf9fe',
          200: '#99f3fc',
          300: '#66edfb',
          400: '#33e7f9',
          500: '#00e1f8', // Brand cyan
          600: '#00b4c6',
          700: '#008795',
          800: '#005a63',
          900: '#002d32',
        },
        dark: {
          50: '#EAEAEA',
          100: '#D5D5D5',
          200: '#ABABAB',
          300: '#808080',
          400: '#565656',
          500: '#2B2B2B',
          600: '#222222',
          700: '#1A1A1A',
          800: '#111111',
          900: '#090909',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Lexend', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      borderRadius: {
        '4xl': '2rem',
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 15px 0 rgba(0, 0, 0, 0.1)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern-light': "url('/src/assets/bg-pattern-light.svg')",
        'hero-pattern-dark': "url('/src/assets/bg-pattern-dark.svg')",
        'grid-pattern-light': "url('/src/assets/grid-pattern-light.svg')",
        'grid-pattern-dark': "url('/src/assets/grid-pattern-dark.svg')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'gradient': 'gradient 15s ease infinite',
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          },
          '100%': {
            backgroundPosition: '0% 50%'
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [],
}
