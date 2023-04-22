import { SxProps } from '@mui/material';

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
