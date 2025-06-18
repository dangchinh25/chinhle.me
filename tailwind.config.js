/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // Notion-like color palette with more subtle options
        'notion-bg': '#ffffff',
        'notion-bg-secondary': '#f7f6f3',
        'notion-bg-subtle': '#fafafa',
        'notion-bg-muted': '#f5f5f5',
        'notion-text': '#37352f',
        'notion-text-secondary': '#787774',
        'notion-text-muted': '#9b9a97',
        'notion-border': '#e3e2e0',
        'notion-border-subtle': '#f0f0f0',
        'notion-border-hover': '#d3d2d0',
        'notion-accent': '#2e75cc',
        'notion-accent-hover': '#1e5bb8',
        'notion-gray': '#9b9a97',
        'notion-gray-light': '#f0f0ef',
        'notion-gray-subtle': '#f8f8f7',
        'notion-gray-dark': '#6b6b6b',
        // Additional subtle gray scale
        'gray-25': '#fcfcfc',
        'gray-35': '#fafafa',
        'gray-45': '#f8f8f8',
        // Keep some original colors for backward compatibility
        richBlack: '#0D1B2A',
        oxfordBlue: '#1B263B',
        yInMnBlue: '#415A77',
        silverLakeBlue: '#778DA9',
        platinum: '#E0E1DD',
      },
      fontFamily: {
        notion: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        notion:
          'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 2px 4px',
        'notion-hover':
          'rgba(15, 15, 15, 0.1) 0px 0px 0px 1px, rgba(15, 15, 15, 0.1) 0px 5px 10px',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-up': 'slideUp 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(4px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
