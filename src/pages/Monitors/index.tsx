import { useState } from 'react';
import {
  Box, Button, Typography,
} from '@mui/material';
import { useGetMonitorsQuery } from 'api/publicApi';
import { PageWrapper } from 'components';
import { useTranslation } from 'react-i18next';
import Banner from './Banner';
import List from './List';
import Create from './Create';
import styles from './styles';
import Limit from './Limit';

function Monitors() {
  const { t } = useTranslation();

  const [isOpenModal, setOpenModal] = useState(false);

  const { data, isLoading, isError } = useGetMonitorsQuery({});
  const { monitors, isLimit } = data || {};

  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  const isNoMonitons = monitors?.length === 0;

  return (
    <>
      <PageWrapper
        title={t('monitors.title')}
        isLoading={isLoading}
        isError={isError}
      >

        <Box sx={styles.head}>
          <Typography variant="h4">
            {t('monitors.title')}
          </Typography>

          {!isNoMonitons && (
            <Button
              disabled={isLimit}
              onClick={handleOpenModal}
            >
              {t('monitors.addMonitorButton')}
            </Button>
          )}
        </Box>

        <Box sx={styles.wrap}>
          {isNoMonitons
            ? <Banner onAddMonitor={handleOpenModal} />
            : <List monitors={monitors} />}
        </Box>

        {isLimit && (
          <Box sx={styles.wrap}>
            <Limit />
          </Box>
        )}
      </PageWrapper>

      {isOpenModal && (
        <Create
          open={isOpenModal}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
}

export default Monitors;
