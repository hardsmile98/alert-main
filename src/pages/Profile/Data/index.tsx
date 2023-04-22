import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import {
  PersonOutline as ProfileIcon,
  SettingsOutlined as PlanIcon,
} from '@mui/icons-material';

import { ProfileResponse } from 'models';
import { Wrapper } from 'components';
import ChangePassword from './ChangePassword';
import styles from './styles';

interface Props {
  profile: ProfileResponse | undefined
}

function Data({ profile }: Props) {
  const [isOpenModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  const {
    email,
    firstName,
    lastName,
    plan,
  } = profile || {};

  return (
    <>
      <Wrapper sx={styles.root}>
        <Box sx={styles.block}>
          <Box sx={styles.icon}>
            <ProfileIcon />
          </Box>

          <Box>
            <Typography variant="h6">
              Data
            </Typography>

            <Box sx={styles.fieild}>
              {' E-mail: '}
              {email}
            </Box>

            <Box sx={styles.fieild}>
              {'First name: '}
              {firstName}
            </Box>

            <Box sx={styles.fieild}>
              {'Last name: '}
              {lastName}
            </Box>

            <Button
              sx={styles.changeButton}
              variant="outlined"
              onClick={handleOpenModal}
            >
              Change password
            </Button>
          </Box>
        </Box>

        <Box sx={styles.block}>
          <Box sx={styles.icon}>
            <PlanIcon />
          </Box>

          <Box>
            <Typography variant="h6">
              Plan
            </Typography>

            <Box sx={styles.fieild}>
              {'Type: '}
              {plan}
            </Box>
          </Box>
        </Box>
      </Wrapper>

      <ChangePassword
        open={isOpenModal}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default Data;
