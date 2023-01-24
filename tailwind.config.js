/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/prefer-default-export
const MyColors = {
    primary: '#004E89',
    secondary: '#FCD757',
    accent: '#FC5656',
    light: '#F5F4FC',
    link: '#0D2996',
    dark: '#190B28',
    grey: '#C8C8C8',
    purple: '#ab7edb',
};

module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: MyColors,
            backgroundImage: {
                macaronis: "url('./assets/macaronis.svg')",
                pp: "url('./assets/pp.png')",
                png: "url('https://assets.website-files.com/5e87e737ee7085b9ba02c101/5e87e737ee7085fccd02c10d_pattern-grey.svg')",
            },
            keyframes: {
                animatedBackground: {
                    '0%': {
                        backgroundPosition: '0 0',
                    },
                    '100%': {
                        backgroundPosition: '-400% 2000%',
                    },
                },
            },
            animation: {
                animatedBackground: 'animatedBackground 100s linear infinite',
                animatedBackgroundMobile: 'animatedBackground 300s linear infinite',
                spinSlow: 'spin 10s linear infinite',
            },
        },
    },
    plugins: [],
};
