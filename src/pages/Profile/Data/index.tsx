import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import {
  PersonOutline as ProfileIcon,
  SettingsOutlined as PlanIcon,
} from '@mui/icons-material';

import ChangePassword from './ChangePassword';
import styles from './styles';

function Data() {
  const [isOpenModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  return (
    <>
      <Box sx={styles.root}>
        <Box sx={styles.block}>
          <Box sx={styles.icon}>
            <ProfileIcon />
          </Box>

          <Box>
            <Typography variant="h6">
              Data
            </Typography>

            <Box sx={styles.fieild}>
              E-mail: aaaa
            </Box>

            <Box sx={styles.fieild}>
              First name: aaaa
            </Box>

            <Box sx={styles.fieild}>
              Last name: aaaa
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
              Type: Trial plan
            </Box>
          </Box>
        </Box>
      </Box>

      <ChangePassword
        open={isOpenModal}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default Data;
