import { SxProps } from '@mui/material';

const styles = {
  root: {
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    flexDirection: ['column', 'column', 'row'],
  } as SxProps,

  navbar: {
    p: [2, 2, 0],
    flexBasis: ['auto', 'auto', 320],
    flexShrink: 0,
    backgroundColor: 'white',
  },

  content: {
    flexGrow: 1,
    overflowY: 'auto',
  },
};

export default styles;
