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
                    backgroundPosition: '-400% 2000%',
                },
            }
        },
        animation: {
            animatedBackground: 'animatedBackground 100s linear infinite',
            animatedBackgroundMobile: 'animatedBackground 300s linear infinite',
            spinSlow: 'spin 10s linear infinite',
        }
    },
  },
  plugins: [],
}
