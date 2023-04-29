import { useState } from 'react';
import {
  AlternateEmail as EmailIcon,
  Telegram as TelegramIcon,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import {
  Box, Tabs, Tab,
} from '@mui/material';
import type { ChannelType } from 'models';
import { useIsMobile } from 'hooks';
import TabPanel from './TabPanel';
import AddChannel from './AddChannel';
import styles from './styles';

function Create() {
  const { t } = useTranslation();

  const { isMobile } = useIsMobile();

  const [value, setValue] = useState(0);
  const [channelType, setChannelType] = useState<null | ChannelType>(null);

  const handleCloseAdding = () => setChannelType(null);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={styles.root}>
        <Tabs
          orientation={isMobile
            ? 'horizontal'
            : 'vertical'}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={styles.tabs}
        >
          <Tab
            iconPosition="start"
            icon={<EmailIcon />}
            sx={styles.tab}
            label="Email"
          />
          <Tab
            iconPosition="start"
            icon={<TelegramIcon />}
            sx={styles.tab}
            label="Telegram"
          />
        </Tabs>
        <TabPanel
          value={value}
          index={0}
          title={t('alerts.email.title')}
          description={t('alerts.email.description')}
          onAddChannel={() => setChannelType('email')}
        />

        <TabPanel
          value={value}
          index={1}
          title={t('alerts.telegram.title')}
          description={t('alerts.telegram.description')}
          onAddChannel={() => setChannelType('telegram')}
          enabled={false}
        />
      </Box>

      {!!channelType && (
        <AddChannel
          isOpen={!!channelType}
          onClose={handleCloseAdding}
          channelType={channelType}
        />
      )}
    </>
  );
}

export default Create;
