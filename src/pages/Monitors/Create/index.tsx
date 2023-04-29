import { LoadingButton } from '@mui/lab';
import { Box, TextField, Typography } from '@mui/material';
import { useAddMonitorMutation } from 'api/publicApi';
import { ErrorAlert, Modal, Select } from 'components';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface IProps {
  open: boolean
  onClose: () => void
}

const frequencyOptions = [
  { value: 10, title: '10 mins' },
  { value: 20, title: '20 mins' },
  { value: 30, title: '30 mins' },
  { value: 60, title: '1 hour' },
];

const methodOptions = [
  { value: 'get', title: 'GET' },
  { value: 'post', title: 'POST' },
];

function Create({ open, onClose }: IProps) {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [url, setUrl] = useState('https://');
  const [frequency, setFrequency] = useState(10);
  const [method, setMehtod] = useState('get');

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
      method,
    });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={t('monitors.modal.title')}
    >
      <form onSubmit={() => {}}>
        <Box mb={1}>
          <Typography gutterBottom>
            {t('monitors.modal.name')}
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
            {t('monitors.modal.frequency')}
          </Typography>

          <Select
            value={frequency}
            onChange={(value) => setFrequency(Number(value))}
            options={frequencyOptions}
            fullWidth
          />
        </Box>

        <Box mb={1}>
          <Typography gutterBottom>
            {t('monitors.modal.method')}
          </Typography>

          <Select
            value={method}
            onChange={(value) => setMehtod(String(value))}
            options={methodOptions}
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
          {t('monitors.modal.submit')}
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
