// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'professional-black': '#000000',
        'corporate-red': '#8E1616',
        'golden-beige': '#E8C999',
        'cream-white': '#F8EEDF',
        'dark-gray': '#333333',
        'medium-gray': '#666666',
        'light-gray': '#999999',
        'very-light-gray': '#CCCCCC',
        'background-gray': '#F5F5F5',
        'success': '#2E7D32',
        'warning': '#F57F17',
        'error': '#8E1616',
        'info': '#1565C0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        fadeInDown: 'fadeInDown 0.3s ease-out forwards',
        fadeInUp: 'fadeInUp 0.3s ease-out forwards',
        pulseScale: 'pulseScale 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
