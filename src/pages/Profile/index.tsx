import { Box, Typography } from '@mui/material';
import { PageWrapper } from 'components';

function Profile() {
  return (
    <PageWrapper
      title="Profile"
    >
      <Box>
        <Typography variant="h4">
          My Profile
        </Typography>

        <Box>
          FORM
        </Box>
      </Box>
    </PageWrapper>
  );
}

export default Profile;
