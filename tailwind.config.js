/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        trip: {
          primary: '#7c5be8',    // Violet
          secondary: '#e87a5a',  // Coral
          accent: '#3a8fc4',     // Electric blue
          dark: '#0d0a1a',       // Dark base
        }
      }
    },
  },
  plugins: [],
}
