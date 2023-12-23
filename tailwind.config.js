/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'richBlack': '#0D1B2A',
        'oxfordBlue': '#1B263B',
        'yInMnBlue': '#415A77',
        'silverLakeBlue': '#778DA9',
        'platinum': '#E0E1DD',
      }
    },
  },
  plugins: [],
}
