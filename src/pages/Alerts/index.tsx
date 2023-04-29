import { Box, Typography } from '@mui/material';
import { PageWrapper } from 'components';
import { useGetChannelsQuery } from 'api/publicApi';
import { useTranslation } from 'react-i18next';
import Create from './Create';
import Channels from './Channels';

function Alerts() {
  const { t } = useTranslation();

  const { data, isLoading, isError } = useGetChannelsQuery({});

  return (
    <PageWrapper
      title={t('alerts.title')}
      isLoading={isLoading}
      isError={isError}
    >
      <Typography variant="h4">
        {t('alerts.title')}
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
