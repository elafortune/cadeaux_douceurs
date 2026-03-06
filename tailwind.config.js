/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Fonds
        pearl:         '#FFFFFF',
        ivory:         '#F0F9FF',   // bleu très clair
        linen:         '#FEF4F7',   // rose très clair

        // Texte
        stone:         '#8898AA',
        slate:         '#5A6A7E',
        charcoal:      '#2C3E50',
        onyx:          '#1A2B3C',

        // Primaire — bleu ciel (logo)
        sky:           '#5BAAD2',
        'sky-dark':    '#3A7CA5',
        'sky-light':   '#87CEEB',
        'sky-xlight':  '#D6EFFA',

        // Accent — rose/fuchsia (cœurs du logo)
        rose:          '#E8799B',
        'rose-dark':   '#C45578',
        'rose-light':  '#F7C4D2',
        'rose-xlight': '#FEF0F4',

        // Chaud / doré
        warm:          '#F5A623',
        'warm-light':  '#FDE8C0',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans:  ['Nunito', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in':      'fadeIn 0.9s ease-out forwards',
        'fade-in-up':   'fadeInUp 0.9s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        shimmer:        'shimmer 0.55s ease forwards',
        float:          'float 6s ease-in-out infinite',
        'bounce-slow':  'bounceSlow 2s ease-in-out infinite',
        'logo-appear':  'logoAppear 1.3s cubic-bezier(0.34, 1.4, 0.64, 1) 0.2s both',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%':   { opacity: '0', transform: 'translateY(-18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { left: '-100%' },
          '100%': { left: '150%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
          '50%':      { transform: 'translateX(-50%) translateY(10px)' },
        },
        logoAppear: {
          '0%':   { opacity: '0', transform: 'rotate(3deg) translateY(12px) scale(0.95)' },
          '70%':  { opacity: '1', transform: 'rotate(-0.5deg) translateY(-2px) scale(1.01)' },
          '100%': { opacity: '1', transform: 'rotate(0deg) translateY(0) scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
