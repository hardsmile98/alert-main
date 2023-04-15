import { Box, Typography } from '@mui/material';
import { PageWrapper } from 'components';
import Create from './Create';
import Channels from './Channels';

function Alerts() {
  return (
    <PageWrapper
      title="Alerts"
    >
      <Typography variant="h4">
        Alerts
      </Typography>

      <Box mt={2}>
        <Create />
      </Box>

      <Box mt={2}>
        <Channels channels={[]} />
      </Box>
    </PageWrapper>
  );
}

export default Alerts;
