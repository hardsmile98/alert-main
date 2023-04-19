import { LoadingButton } from '@mui/lab';
import { Box, TextField, Typography } from '@mui/material';
import { useAddMonitorMutation } from 'api/publicApi';
import { ErrorAlert, Modal, Select } from 'components';
import { useEffect, useState } from 'react';

interface IProps {
  open: boolean
  onClose: () => void
}

const options = [
  { value: 10, title: '10 mins' },
  { value: 20, title: '20 mins' },
  { value: 30, title: '30 mins' },
  { value: 60, title: '1 hour' },
];

function Create({ open, onClose }: IProps) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('https://');
  const [frequency, setFrequency] = useState(10);

  const [addMonitor, {
    isLoading,
    isSuccess,
    error,
    isError,
  }] = useAddMonitorMutation();

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess]);

  const isDisabled = !name.length || !url.length;

  const handleAddMonitor = () => {
    addMonitor({
      url,
      name,
      frequency,
    });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Create monitor"
    >
      <form onSubmit={() => {}}>
        <Box mb={1}>
          <Typography gutterBottom>
            Name
          </Typography>

          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="eg. Site"
            fullWidth
          />
        </Box>

        <Box mb={1}>
          <Typography gutterBottom>
            URL
          </Typography>

          <TextField
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://"
            fullWidth
          />
        </Box>

        <Box mb={1}>
          <Typography gutterBottom>
            Frequency
          </Typography>

          <Select
            value={frequency}
            onChange={(value) => setFrequency(Number(value))}
            options={options}
            fullWidth
          />
        </Box>

        <LoadingButton
          onClick={handleAddMonitor}
          variant="contained"
          fullWidth
          type="submit"
          disabled={isDisabled}
          loading={isLoading}
        >
          Submit
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

export default Create;
