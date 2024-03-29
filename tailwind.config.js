/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'blue': '#001F32',
        'green': {
          100: '#E5FFB7',
          200: '#DAF7A6',
          300: '#8fc93a'
        },
        'brown' : {
          100: '#926D53',
          200: '#784212'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
