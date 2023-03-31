import { Box } from '@mui/material';
import { Loader } from 'components';

const styles = {
  root: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

function PageLoader() {
  return (
    <Box sx={styles.root}>
      <Loader text="Загрузка..." />
    </Box>
  );
}

export default PageLoader;
