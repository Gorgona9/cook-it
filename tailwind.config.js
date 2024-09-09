/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      transitionTimingFunction: {
        bounce: 'cubic-bezier(.25,1.55,.65,.97)',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'accent-50': 'hsl(30, 89%, 96%)',
        'accent-100': 'hsl(31, 95%, 92%)',
        'accent-200': 'hsl(28, 93%, 83%)',
        'accent-300': 'hsl(27, 91%, 72%)',
        'accent-400': 'hsl(24, 90%, 61%)',
        'accent-500': 'hsl(21, 89%, 53%)',
        'accent-600': 'hsl(17, 85%, 47%)',
        'accent-700': 'hsl(14, 83%, 40%)',
        'accent-800': 'hsl(12, 74%, 34%)',
        'accent-900': 'hsl(12, 70%, 28%)',
        'accent-950': 'hsl(10, 76%, 15%)',
        'primary-50': '#ffffff',
        'primary-100': '#efefef',
        'primary-200': '#dcdcdc',
        'primary-300': '#bdbdbd',
        'primary-400': '#989898',
        'primary-500': '#7c7c7c',
        'primary-600': '#656565',
        'primary-700': '#525252',
        'primary-800': '#464646',
        'primary-900': '#3d3d3d',
        'primary-950': '#292929',
        'green-50': '#fefefd',
        'green-100': '#f4f4ea',
        'green-200': '#e7e6d0',
        'green-300': '#d2cfa7',
        'green-400': '#b8b278',
        'green-500': '#a09a57',
        'green-600': '#858144',
        'green-700': '#6c6938',
        'green-800': '#5b5931',
        'green-900': '#4d4c2d',
        'green-950': '#33331e',
        'accent-secondary-50': '#f6f7f9',
        'accent-secondary-100': '#eceff2',
        'accent-secondary-200': '#d5dae2',
        'accent-secondary-300': '#b1bbc8',
        'accent-secondary-400': '#8696aa',
        'accent-secondary-500': '#677990',
        'accent-secondary-600': '#526177',
        'accent-secondary-700': '#495669',
        'accent-secondary-800': '#3a4452',
        'accent-secondary-900': '#343b46',
        'accent-secondary-950': '#22272f',
        'black-50': '#f6f6f6',
        'black-100': '#e7e7e7',
        'black-200': '#d1d1d1',
        'black-300': '#b0b0b0',
        'black-400': '#888888',
        'black-500': '#6d6d6d',
        'black-600': '#5d5d5d',
        'black-700': '#4f4f4f',
        'black-800': '#454545',
        'black-900': '#3d3d3d',
        'black-950': '#000000',
      },
      backgroundImage: {
        checkmark: 'url("/assets/icons/checkIcon.svg")',
      },
    },
  },
  plugins: [],
};
