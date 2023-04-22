import { SxProps } from '@mui/material';

const styles = {
  root: {
    flexGrow: 1,
    bgcolor: 'background.paper',
    display: 'flex',
    minHeight: 180,
    borderRadius: 2,
    flexDirection: ['column', 'row'],
  } as SxProps,

  tabs: {
    borderRight: [0, 1],
    borderBottom: [1, 0],
    borderColor: ['divider', 'divider'],
    flexShrink: 0,
  },

  tab: {
    minHeight: 55,
    justifyContent: 'flex-start',
  },
};

export default styles;
