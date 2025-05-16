// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['Fira Code', 'monospace']
      },
            boxShadow: {
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }, },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
