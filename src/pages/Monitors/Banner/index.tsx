import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import { Wrapper } from 'components';
import { useTranslation } from 'react-i18next';
import styles from './styles';

interface IProps {
  onAddMonitor: () => void
}

function Banner({ onAddMonitor } : IProps) {
  const { t } = useTranslation();

  return (
    <Wrapper sx={styles.root}>
      <Typography variant="h4">
        {t('monitors.noMonitors.title')}
      </Typography>

      <Box sx={styles.description}>
        {t('monitors.noMonitors.description')}
      </Box>

      <Button onClick={onAddMonitor}>
        {t('monitors.addMonitorButton')}
      </Button>
    </Wrapper>
  );
}

export default Banner;
