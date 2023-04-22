import { Box, Typography } from '@mui/material';
import limit from 'assets/images/limit.svg';
import { Wrapper } from 'components';

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
  return (
    <Wrapper sx={styles.root}>
      <Box
        component="img"
        src={limit}
        alt="limit"
        sx={styles.image}
      />

      <Typography variant="h4" gutterBottom>
        Reached limit monitors
      </Typography>

      <Box color="text.secondary">
        To add more monitoring upgrade your tariff plan
      </Box>
    </Wrapper>
  );
}

export default Limit;
