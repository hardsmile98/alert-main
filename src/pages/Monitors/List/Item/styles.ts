import { SxProps } from '@mui/material';
import { keyframes } from '@emotion/react';

const pulse = (r: number, g: number, b: number) => keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(${r}, ${g}, ${b}, 0.7);
  }
  
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(${r}, ${g}, ${b}, 0);
  }
  
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(${r}, ${g}, ${b}, 0);
  }
`;

const pulseGreen = pulse(122, 198, 137);

const styles = {
  root: {
    p: 3,
    backgroundColor: 'white',
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mt: 1,
    flexDirection: ['column', 'row'],
    textAlign: ['center', 'left'],
  } as SxProps,

  info: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: ['column', 'row'],
  } as SxProps,

  status: {
    display: 'block',
    width: 15,
    height: 15,
    borderRadius: '50%',
    mr: [0, 2],
    mb: [1, 0],
    transform: 'scale(1)',
  },

  statusUp: {
    animation: `${pulseGreen} 2s infinite`,
    backgroundColor: 'success.main',
  },

  statusDown: {
    backgroundColor: 'error.main',
  },

  statusPause: {
    backgroundColor: 'warning.main',
  },

  name: {
    fontWeight: 'fontWeightBold',
    mb: 0.5,
  },

  actions: {
    display: 'flex',
    alignItems: 'center',
  },

  checkTime: {
    display: 'flex',
    alignItems: 'center',

    svg: {
      mr: 0.5,
    },
  },
};

export default styles;
