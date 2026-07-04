/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  safelist: [
    'bg-circle-purple','bg-circle-sky','bg-circle-green','bg-circle-yellow','bg-circle-coral',
    'bg-circle-purple-soft','bg-circle-sky-soft','bg-circle-green-soft','bg-circle-yellow-soft','bg-circle-coral-soft',
    'text-circle-purple','text-circle-sky','text-circle-green','text-circle-yellow','text-circle-coral',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-space)', 'Outfit', 'Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
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
          tint: '#EEF2FF',
          'tint-2': '#E6ECFF',
          purple: '#6D4AFF', 'purple-soft': '#EFEBFF',
          sky: '#2FA8FF', 'sky-soft': '#E7F4FF',
          green: '#1FB57A', 'green-soft': '#E4F7EF',
          yellow: '#FFC93C', 'yellow-soft': '#FFF6E0',
          coral: '#FF5A5A', 'coral-soft': '#FFECEC',
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
