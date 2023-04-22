import { SxProps } from '@mui/material';

const styles = {
  noChannels: {
    textAlign: 'center',
    color: 'text.secondary',
  },

  channel: {
    mb: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', 'row'],
    textAlign: ['center', 'left'],
  } as SxProps,

  body: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: ['column', 'row'],
    mr: [0, 1],
    mb: [1, 0],
  } as SxProps,

  icon: {
    mr: [0, 2],
    mb: [1, 0],
    backgroundColor: 'divider',
    height: 40,
    width: 40,
    borderRadius: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  type: {
    textTransform: 'uppercase',
    fontWeight: 'fontWeightBold',
    mb: 0.5,
  },

  value: {
    color: 'text.secondary',
  },
};

export default styles;
