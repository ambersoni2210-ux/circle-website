/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        circle: {
          ink: '#0A0A0A',
          black: '#0A0A0A',
          charcoal: '#1C1C1F',
          paper: '#FAFAFA',
          'paper-deep': '#F0F0F2',
          mist: '#E4E4E8',
          accent: '#2547FF',
          'accent-deep': '#1B34C4',
          // legacy aliases (existing class names keep working)
          cream: '#FAFAFA',
          'cream-deep': '#F0F0F2',
          warm: '#E4E4E8',
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
