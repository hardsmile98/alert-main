import { Box, Typography } from '@mui/material';
import { PageWrapper } from 'components';
import Data from './Data';

function Profile() {
  return (
    <PageWrapper
      title="Profile"
    >
      <Typography variant="h4">
        My Profile
      </Typography>

      <Box mt={2}>
        <Data />
      </Box>
    </PageWrapper>
  );
}

export default Profile;
