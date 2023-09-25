/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    listStyleType: {
      disc: 'disc',
    }
  },
  plugins: [require('tailwind-scrollbar'),],
}

