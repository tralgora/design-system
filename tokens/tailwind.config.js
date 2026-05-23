// Tralgora — Tailwind theme excerpt. Merge into your tailwind.config.{js,ts}.
module.exports = {
  theme: {
    extend: {
      colors: {
        bg: 'oklch(0.16 0.012 250)',
        surface: {
          1: 'oklch(0.20 0.014 250)',
          2: 'oklch(0.24 0.014 250)',
          3: 'oklch(0.28 0.014 250)',
        },
        line: {
          DEFAULT: 'oklch(0.34 0.012 250)',
          soft: 'oklch(0.27 0.010 250)',
          strong: 'oklch(0.46 0.010 250)',
        },
        ink: {
          1: 'oklch(0.97 0.005 250)',
          2: 'oklch(0.78 0.010 250)',
          3: 'oklch(0.58 0.012 250)',
        },
        signal: {
          green: 'oklch(0.82 0.20 155)',
          blue:  'oklch(0.78 0.14 235)',
          red:   'oklch(0.72 0.20 25)',
          amber: 'oklch(0.84 0.16 80)',
        },
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'ui-monospace', 'monospace'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      borderRadius: { sm: '2px', DEFAULT: '2px', md: '4px', pill: '999px' },
      letterSpacing: {
        display: '-0.025em', heading: '-0.018em',
        label: '0.06em', eyebrow: '0.14em',
      },
    },
  },
};
