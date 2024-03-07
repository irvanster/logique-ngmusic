/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'white-opacity': '#FFFFFF22',
        'purple': '#7b34dd',
        'primary-500': '#712bda',
        'primary-200': '#a45deb',
        'primary-opacity': '#945DE6BF',
        'dark-opacity': '#1C1C2DE6',
        'base-100':'#64748b',
        'base-500':'#334155',
        'gold-500':'#f5b014',
        'green-500':'#10b981',
      },
  },
  plugins: [],
};
