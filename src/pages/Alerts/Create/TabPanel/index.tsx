import { Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface TabPanelProps {
  index: number
  value: number
  title: string
  description: string
  enabled?: boolean
  onAddChannel: () => void
}

const styles = {
  description: {
    mt: 1,
    color: 'text.secondary',
  },

  button: {
    mt: 2,
  },
};

function TabPanel(props: TabPanelProps) {
  const { t } = useTranslation();

  const {
    value,
    index,
    title,
    description,
    enabled = true,
    onAddChannel,
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && (
      <Box p={3}>
        <Typography variant="h5">
          {title}
        </Typography>

        <Box sx={styles.description}>
          {description}
        </Box>

        <Button
          disabled={!enabled}
          sx={styles.button}
          onClick={onAddChannel}
        >
          {t('alerts.addChannel')}
        </Button>
      </Box>
      )}
    </div>
  );
}

export default TabPanel;
