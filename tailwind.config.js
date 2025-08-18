/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        sage: {
          50: '#f6f7f6',
          100: '#e3e5e3',
          200: '#c7ccc7',
          300: '#a3aca3',
          400: '#7a857a',
          500: '#5f6b5f',
          600: '#4a554a',
          700: '#3d463d',
          800: '#333a33',
          900: '#2a302a',
        },

        espresso: {
          50: '#FFFCF7',
          100: '#F4EFE4',
          200: '#E7DBC4',
          300: '#DECEB0',
          400: '#D5C19C',
          500: '#CCB488',
          600: '#C3A774',
          700: '#BA9A60',
          800: '#B18D4C',
          900: '#5B4C3A',
        }
      },
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
        'slackside': ['Slackside One', 'cursive'],
      }
    },
  },
  plugins: [],
}

