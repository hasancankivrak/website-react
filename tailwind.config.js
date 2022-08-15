module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      fontFamily: {
        primary: 'Montserrat, sans-serif',
        secondary: 'Montserrat, sans-serif',
        
      },
      container: {
        padding: {
          DEFAULT: '1.5rem',
          lg: '3rem',
        },
      },
      screens: {
        sm: '200px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
  
      extend: {
        colors: {
          body: '#010208',
          white: '#fff',
          pink: 'pink',
          transparent: 'transparent',
        },
        boxShadow: {
          primary: '0px 4px 40px rgba(0, 0, 0, 0.03)',
        },
      
      },
    },
    plugins: [],
  };