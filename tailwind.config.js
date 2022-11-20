module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      body: 'Lato',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
      },
      colors: {
        primary: '#0054a6',
        secondary: '#f0f0f0',
        tertiary: '#0054a6',
        accent: {
          DEFAULT: '#2f89fc',
          hover: '#2d6cdf',
        },
        paragraph: '#00000',
      },
    },
  },
  plugins: [],
};