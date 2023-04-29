import { Box } from '@mui/material';
import { Loader } from 'components';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <Box sx={styles.root}>
      <Loader text={t('main.loading')} />
    </Box>
  );
}

export default PageLoader;
