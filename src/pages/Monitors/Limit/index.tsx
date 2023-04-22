import { Box, Typography } from '@mui/material';
import limit from 'assets/images/limit.svg';

const styles = {
  root: {
    p: 3,
    backgroundColor: 'white',
    borderRadius: 2,
    textAlign: 'center',
  },

  image: {
    mb: 2,
    width: 260,
  },
};

function Limit() {
  return (
    <Box sx={styles.root}>
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
    </Box>
  );
}

export default Limit;
