import { LoadingButton } from '@mui/lab';
import { Box, TextField, Typography } from '@mui/material';
import { useChangePasswordMutation } from 'api/publicApi';
import { ErrorAlert, Modal } from 'components';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface IProps {
  open: boolean
  onClose: () => void
}

function ChangePassword({ open, onClose }: IProps) {
  const { t } = useTranslation();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const isDisabled = !currentPassword.length || !newPassword.length;

  const [changePassword, {
    isLoading,
    isSuccess,
    isError,
    error,
  }] = useChangePasswordMutation();

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess]);

  const handleChangePassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    changePassword({
      currentPassword,
      newPassword,
    });
  };

  return (
    <Modal
      onClose={onClose}
      open={open}
      title={t('profile.modal.title')}
    >
      <form onSubmit={handleChangePassword}>
        <Box mb={1}>
          <Typography gutterBottom>
            {t('profile.modal.currentPassword')}
          </Typography>

          <TextField
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder={t('profile.modal.currentPassword')}
            type="password"
            fullWidth
          />
        </Box>

        <Box mb={1}>
          <Typography gutterBottom>
            {t('profile.modal.newPassword')}
          </Typography>

          <TextField
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder={t('profile.modal.newPassword')}
            type="password"
            fullWidth
          />
        </Box>

        <LoadingButton
          fullWidth
          variant="contained"
          type="submit"
          loading={isLoading}
          disabled={isDisabled}
        >
          {t('profile.modal.button')}
        </LoadingButton>

        {isError && (
          <Box mt={1}>
            <ErrorAlert error={error} />
          </Box>
        )}
      </form>
    </Modal>
  );
}

export default ChangePassword;
