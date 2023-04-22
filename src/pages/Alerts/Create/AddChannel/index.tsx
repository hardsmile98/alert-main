import { Box, Typography, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { ErrorAlert, Modal } from 'components';
import { ChannelType } from 'models';
import { useEffect, useState } from 'react';
import { useAddChannelMutation } from 'api/publicApi';

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

  const isDisabled = !value.length;

  const [addChannel, {
    isLoading,
    isSuccess,
    isError,
    error,
  }] = useAddChannelMutation();

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess]);

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
              onClick={() => addChannel({ type: channelType, value })}
              fullWidth
              variant="contained"
              type="submit"
              disabled={isDisabled}
              loading={isLoading}
            >
              Add
            </LoadingButton>

            {isError && (
              <Box mt={1}>
                <ErrorAlert error={error} />
              </Box>
            )}
          </form>
        </Modal>
      );
    default:
      return null;
  }
}

export default AddChannel;
