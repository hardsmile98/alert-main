import { createTheme, responsiveFontSizes } from '@mui/material';

const mytheme = createTheme({
  typography: {
    h1: {
      fontWeight: 'fontWeightBold',
    },
    h2: {
      fontWeight: 'fontWeightBold',
    },
    h3: {
      fontWeight: 'fontWeightBold',
    },
    h4: {
      fontWeight: 'fontWeightBold',
    },
    h5: {
      fontWeight: 'fontWeightBold',
    },
    h6: {
      fontWeight: 'fontWeightBold',
    },
  },

  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0px 4px 15px -5px rgba(34, 60, 80, 0.2)',
        },
      },
    },

    MuiTooltip: {
      defaultProps: {
        arrow: true,
        enterTouchDelay: 0,
      },
      styleOverrides: {
        tooltip: {
          fontSize: '14px',
        },
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
