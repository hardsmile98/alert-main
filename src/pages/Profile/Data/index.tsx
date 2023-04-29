import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import {
  PersonOutline as ProfileIcon,
  SettingsOutlined as PlanIcon,
} from '@mui/icons-material';

import { ProfileResponse } from 'models';
import { Wrapper } from 'components';
import { useTranslation } from 'react-i18next';
import ChangePassword from './ChangePassword';
import styles from './styles';

interface Props {
  profile: ProfileResponse | undefined
}

function Data({ profile }: Props) {
  const { t } = useTranslation();

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
            <Typography variant="h6" gutterBottom>
              {t('profile.data')}
            </Typography>

            <Box sx={styles.fieild}>
              {'E-mail: '}
              {email}
            </Box>

            <Box sx={styles.fieild}>
              {`${t('profile.firstName')}: `}
              {firstName}
            </Box>

            <Box sx={styles.fieild}>
              {`${t('profile.lastName')}: `}
              {lastName}
            </Box>

            <Button
              sx={styles.changeButton}
              variant="outlined"
              onClick={handleOpenModal}
            >
              {t('profile.changePassword')}
            </Button>
          </Box>
        </Box>

        <Box sx={styles.block}>
          <Box sx={styles.icon}>
            <PlanIcon />
          </Box>

          <Box>
            <Typography variant="h6" gutterBottom>
              {t('profile.plan')}
            </Typography>

            <Box sx={styles.fieild}>
              {`${t('profile.type')}: `}
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
