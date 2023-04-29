import { Box, Typography } from '@mui/material';
import limit from 'assets/images/limit.svg';
import { Wrapper } from 'components';
import { useTranslation } from 'react-i18next';

const styles = {
  root: {
    textAlign: 'center',
  },

  image: {
    mb: 2,
    width: 260,
  },
};

function Limit() {
  const { t } = useTranslation();

  return (
    <Wrapper sx={styles.root}>
      <Box
        component="img"
        src={limit}
        alt="limit"
        sx={styles.image}
      />

      <Typography variant="h4" gutterBottom>
        {t('monitors.limit.title')}
      </Typography>

      <Box color="text.secondary">
        {t('monitors.limit.description')}
      </Box>
    </Wrapper>
  );
}

export default Limit;
