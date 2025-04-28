/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.html",      // semua html di dist dan subfolder (components dll)
    "./*.html"               // semua html di root 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
