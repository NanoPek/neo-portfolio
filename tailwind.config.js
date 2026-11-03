/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

// One ink-tinted neutral ramp, three text roles per surface, one accent.
const colors = {
  transparent: 'transparent',
  current: 'currentColor',
  white: '#FFFFFF',
  // Surfaces, lightest to darkest
  paper: '#F6F5F8',
  surface: '#FFFFFF',
  raised: '#ECEAF0',
  ink: '#190B28',
  hairline: 'rgb(25 11 40 / 0.1)',
  // Text roles on paper / surface / raised
  fg: {
    DEFAULT: '#190B28',
    secondary: '#4A4453',
    muted: '#6B6575',
  },
  // Text roles on ink
  'on-ink': {
    DEFAULT: '#F6F5F8',
    secondary: '#BDB7C7',
    muted: '#9A93A6',
  },
  // The single accent, plus its shades for dark and hover
  accent: {
    DEFAULT: '#004E89',
    hover: '#003F6F',
    'on-ink': '#8DBCE8',
  },
  // Text roles on the accent surface
  'on-accent': {
    DEFAULT: '#FFFFFF',
    secondary: '#C7D8EA',
  },
};

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors,
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', ...defaultTheme.fontFamily.sans],
        mono: ['JetBrains Mono Variable', ...defaultTheme.fontFamily.mono],
      },
      borderWidth: {
        3: '3px',
      },
      boxShadow: {
        // Neo-memphis hard offset shadow in ink: one size for windows, two for controls
        block: '12px 12px 0 0 rgb(25 11 40 / 0.85)',
        'block-sm': '4px 4px 0 0 #190B28',
        'block-xs': '2px 2px 0 0 #190B28',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      transitionDuration: {
        DEFAULT: '150ms',
      },
    },
  },
  plugins: [],
};
