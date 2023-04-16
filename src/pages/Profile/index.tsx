import { Box, Typography } from '@mui/material';
import { PageWrapper } from 'components';
import { useGetProfileQuery } from 'api/publicApi';
import Data from './Data';

function Profile() {
  const { data, isLoading, isError } = useGetProfileQuery({});

  return (
    <PageWrapper
      isLoading={isLoading}
      isError={isError}
      title="Profile"
    >
      <Typography variant="h4">
        My Profile
      </Typography>

      <Box mt={2}>
        <Data profile={data} />
      </Box>
    </PageWrapper>
  );
}

export default Profile;
