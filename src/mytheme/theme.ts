import { createTheme, responsiveFontSizes } from '@mui/material';

const mytheme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },

    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },

      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          paddingBottom: 8,
          paddingTop: 8,

          ':hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  },

  palette: {
    primary: {
      main: '#7165D4',
    },
    background: {
      default: '#F9F9FC',
    },
    success: {
      main: '#7AC689',
    },
    text: {
      primary: '#09093a',
    },
    error: {
      main: '#DB616C',
    },
    secondary: {
      main: '#15c630',
    },
  },
});

export default responsiveFontSizes(mytheme);
