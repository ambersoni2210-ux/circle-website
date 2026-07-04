/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'Cormorant', 'Georgia', 'serif'],
      },
      colors: {
        circle: {
          ink: '#0A0A0A',
          black: '#0A0A0A',
          charcoal: '#2A2824',
          cream: '#F6F3EE',
          'cream-deep': '#EDE7DC',
          warm: '#E7E0D4',
          mist: '#C9C1B3',
        },
      },
      boxShadow: {
        soft: '0 24px 80px rgba(10,10,10,0.10)',
        premium: '0 40px 120px rgba(10,10,10,0.20)',
      },
    },
  },
  plugins: [],
};
