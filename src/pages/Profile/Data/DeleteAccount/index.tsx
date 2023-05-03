import { ErrorAlert, Modal } from 'components';
import { Box, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useTranslation } from 'react-i18next';
import { useDeleteAccountMutation } from 'api/publicApi';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from 'store/slices/auth';

interface IProps {
  open: boolean
  onClose: () => void
}

function DeleteAccount({ open, onClose }: IProps) {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const [deleteAccount, {
    isSuccess,
    isLoading,
    isError,
    error,
  }] = useDeleteAccountMutation();

  useEffect(() => {
    if (isSuccess) {
      dispatch(logout());
    }
  }, [isSuccess]);

  return (
    <Modal
      onClose={onClose}
      open={open}
      title={t('profile.deleteAccountModal.title')}
    >
      <Box>
        {t('profile.deleteAccountModal.text')}
      </Box>

      <Box mt={2} display="flex" gap={1}>
        <LoadingButton
          fullWidth
          variant="contained"
          loading={isLoading}
          color="error"
          onClick={deleteAccount}
        >
          {t('profile.deleteAccountModal.okButton')}
        </LoadingButton>

        <Button
          fullWidth
          onClick={onClose}
        >
          {t('profile.deleteAccountModal.noButton')}
        </Button>
      </Box>

      {isError && (
        <Box mt={1}>
          <ErrorAlert error={error} />
        </Box>
      )}
    </Modal>
  );
}

export default DeleteAccount;
