import { LoadingButton } from '@mui/lab';
import { Box, TextField, Typography } from '@mui/material';
import { Modal, Select } from 'components';
import { useState } from 'react';

interface IProps {
  open: boolean
  onClose: () => void
}

function Create({ open, onClose }: IProps) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('https://');
  const [frequency, setFrequency] = useState('10');

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
            onChange={(value) => setFrequency(value)}
            options={[{ value: '10', title: '10' }]}
            fullWidth
          />
        </Box>

        <LoadingButton
          variant="contained"
          fullWidth
          type="submit"
        >
          Submit
        </LoadingButton>
      </form>
    </Modal>
  );
}

export default Create;
