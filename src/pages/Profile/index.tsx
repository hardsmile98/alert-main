import { Box, Typography } from '@mui/material';
import { PageWrapper } from 'components';
import { useGetProfileQuery } from 'api/publicApi';
import { useTranslation } from 'react-i18next';
import Data from './Data';

function Profile() {
  const { t } = useTranslation();

  const { data, isLoading, isError } = useGetProfileQuery({});

  return (
    <PageWrapper
      isLoading={isLoading}
      isError={isError}
      title={t('profile.title')}
    >
      <Typography variant="h4">
        {t('profile.title')}
      </Typography>

      <Box mt={2}>
        <Data profile={data} />
      </Box>
    </PageWrapper>
  );
}

export default Profile;
