/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        circle: {
          black: '#050505',
          charcoal: '#111111',
          graphite: '#1B1B1B',
          cream: '#F6F3EE',
          warm: '#D8D0C4',
          mist: '#B7B7B7',
        },
      },
      boxShadow: {
        soft: '0 24px 80px rgba(0,0,0,0.12)',
        premium: '0 40px 120px rgba(0,0,0,0.22)',
      },
      animation: {
        'fade-up': 'fadeUp .75s ease forwards',
        'fade-in': 'fadeIn .75s ease forwards',
        'circle-reveal': 'circleReveal 1.45s cubic-bezier(.76,0,.24,1) forwards',
        'ring-spin': 'ringSpin 16s linear infinite',
        'soft-float': 'softFloat 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        circleReveal: {
          '0%': { opacity: '1', transform: 'scale(.82)' },
          '65%': { opacity: '1', transform: 'scale(1.08)' },
          '100%': { opacity: '0', transform: 'scale(1.5)', visibility: 'hidden' },
        },
        ringSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        softFloat: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
