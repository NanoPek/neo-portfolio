/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'primary': '#8338EC',
            'secondary': '#BEE5BF',
            'accent': '#FF9505',
            'light': '#F5F4FC',
            "link": "#0D2996",
            'dark': '#190B28',
        },
        backgroundImage: {
            'macaronis': "url('./assets/macaronis.svg')",
            'pp': "url('./assets/pp.png')",
        },
        keyframes: {
            animatedBackground: {
                '0%': {
                    backgroundPosition: '0 0',
                },
                '100%': {
                    backgroundPosition: '-400% 0',
                },
            }
        },
        animation: {
            animatedBackground: 'animatedBackground 20s linear infinite',
            spinSlow: 'spin 10s linear infinite',
        }
    },
  },
  plugins: [],
}
