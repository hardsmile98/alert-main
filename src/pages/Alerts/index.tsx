import { Box, Typography } from '@mui/material';
import { PageWrapper } from 'components';
import { useGetChannelsQuery } from 'api/publicApi';
import Create from './Create';
import Channels from './Channels';

function Alerts() {
  const { data, isLoading, isError } = useGetChannelsQuery({});

  return (
    <PageWrapper
      title="Alerts"
      isLoading={isLoading}
      isError={isError}
    >
      <Typography variant="h4">
        Alerts
      </Typography>

      <Box mt={2}>
        <Create />
      </Box>

      <Box mt={2}>
        <Channels channels={data} />
      </Box>
    </PageWrapper>
  );
}

export default Alerts;
