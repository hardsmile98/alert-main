import { LoadingButton } from '@mui/lab';
import { Box, TextField, Typography } from '@mui/material';
import { Modal } from 'components';
import { useState } from 'react';

interface IProps {
  open: boolean
  onClose: () => void
}

function ChangePassword({ open, onClose }: IProps) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <Modal
      onClose={onClose}
      open={open}
      title="Change password"
    >
      <form onSubmit={() => {}}>
        <Box mb={1}>
          <Typography gutterBottom>
            Current password
          </Typography>

          <TextField
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Current password"
            fullWidth
          />
        </Box>

        <Box mb={1}>
          <Typography gutterBottom>
            New password
          </Typography>

          <TextField
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New password"
            fullWidth
          />
        </Box>

        <LoadingButton
          fullWidth
          variant="contained"
        >
          Change
        </LoadingButton>
      </form>
    </Modal>
  );
}

export default ChangePassword;
