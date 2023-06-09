import { SxProps } from '@mui/material';

const styles = {
  root: {
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    flexDirection: ['column', 'column', 'row'],
  } as SxProps,

  navbar: {
    p: 2,
    flexBasis: ['auto', 'auto', 280],
    flexShrink: 0,
    backgroundColor: 'white',
    display: 'flex',
  },

  content: {
    flexGrow: 1,
    overflowY: 'auto',
  },
};

export default styles;
