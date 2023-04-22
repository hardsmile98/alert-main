import { Box, Typography } from '@mui/material';
import { useGetMonitorQuery } from 'api/publicApi';
import { PageWrapper, Back } from 'components';
import { useParams } from 'react-router-dom';
import Info from './Info';
import ResponseTime from './ResponseTime';

function Monitor() {
  const { id } = useParams();

  const monitorId = Number(id);
  const skip = !Number.isInteger(monitorId);

  const { data, isLoading, isError } = useGetMonitorQuery(monitorId, {
    skip,
    refetchOnMountOrArgChange: true,
  });

  const { info, chartData } = data || {};

  return (
    <PageWrapper
      title="Monitor"
      isLoading={isLoading}
      isError={isError || skip}
    >
      <Back
        to="/monitors"
        buttonText="Monitors"
      />

      <Typography
        variant="h4"
        mt={1}
      >
        Overview
      </Typography>

      <Box mt={2}>
        <Info info={info} />
      </Box>

      <Box mt={2}>
        <ResponseTime chartData={chartData} />
      </Box>
    </PageWrapper>
  );
}

export default Monitor;
