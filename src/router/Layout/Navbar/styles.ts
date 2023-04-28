import { SxProps } from '@mui/material';

const styles = {
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: ['row', 'row', 'column'],
    alignItems: ['center', 'center', 'flex-start'],
    justifyContent: ['space-between', 'space-between', 'flex-start'],
  } as SxProps,

  logo: {
    width: 130,
    height: 'auto',
  },

  menu: {
    width: '100%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    mt: 3,
  },
};

export default styles;
