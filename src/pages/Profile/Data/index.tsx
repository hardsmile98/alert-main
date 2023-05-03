import { useState } from 'react';
import {
  Box,
  Button,
  Typography,
} from '@mui/material';
import {
  PersonOutline as ProfileIcon,
  SettingsOutlined as PlanIcon,
} from '@mui/icons-material';

import { ProfileResponse } from 'models';
import { Wrapper } from 'components';
import { useTranslation } from 'react-i18next';
import ChangePassword from './ChangePassword';
import DeleteAccount from './DeleteAccount';
import styles from './styles';

interface Props {
  profile: ProfileResponse | undefined
}

type Modal = 'changePassword' | 'deleteAccount';

function Data({ profile }: Props) {
  const { t } = useTranslation();

  const [openModal, setOpenModal] = useState<null | Modal>(null);

  const handleCloseModal = () => setOpenModal(null);

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

            <Box sx={styles.buttons}>
              <Button
                sx={styles.button}
                variant="outlined"
                onClick={() => setOpenModal('changePassword')}
              >
                {t('profile.changePassword')}
              </Button>

              <Button
                sx={styles.button}
                variant="outlined"
                color="error"
                onClick={() => setOpenModal('deleteAccount')}
              >
                {t('profile.deleteAccount')}
              </Button>
            </Box>

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

      {openModal !== null && (
        <>
          <ChangePassword
            open={openModal === 'changePassword'}
            onClose={handleCloseModal}
          />

          <DeleteAccount
            open={openModal === 'deleteAccount'}
            onClose={handleCloseModal}
          />
        </>
      )}
    </>
  );
}

export default Data;
