import { Box, Typography, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Modal } from 'components';
import { ChannelType } from 'models';
import { useState } from 'react';

interface Props {
  isOpen: boolean,
  onClose: () => void,
  channelType: ChannelType | null
}

function AddChannel({
  isOpen,
  onClose,
  channelType,
}: Props) {
  const [value, setValue] = useState('');

  switch (channelType) {
    case 'email':
      return (
        <Modal
          open={isOpen}
          onClose={onClose}
          title="Add email notification channel"
        >
          <form onSubmit={() => {}}>
            <Box mb={1}>
              <Typography gutterBottom>
                E-mail
              </Typography>

              <TextField
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="example@mail.com"
                fullWidth
              />
            </Box>

            <LoadingButton
              fullWidth
              variant="contained"
              type="submit"
            >
              Add
            </LoadingButton>
          </form>
        </Modal>
      );
    default:
      return null;
  }
}

export default AddChannel;
