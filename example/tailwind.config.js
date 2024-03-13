/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./bolls/*.{html,js}", "../*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'parallax': 'url("../bolls/Another Design/banner.jpg")',
        'parallax_2': 'url("../bolls/Another Design/banner.jpg")'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}