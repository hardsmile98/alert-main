import { createTheme } from '@mui/material';

const mytheme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        size: 'large',
        variant: 'contained',
      },

      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',

          ':hover': {
            boxShadow: 'none',
          },
        },
      },
    },
  },

  palette: {
    primary: {
      main: '#755DD7',
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

export default mytheme;
