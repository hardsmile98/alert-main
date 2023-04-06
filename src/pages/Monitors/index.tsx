import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { PageWrapper } from 'components';
import Banner from './Banner';
import MonitorsList from './MonitorsList';
import Create from './Create';
import styles from './styles';

function Monitors() {
  const [isOpenModal, setOpenModal] = useState(false);

  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  const isNoMonitons = false;

  return (
    <>
      <PageWrapper
        title="Monitors"
      >

        <Box sx={styles.head}>
          <Typography variant="h4">
            Monitors
          </Typography>

          {!isNoMonitons && (
            <Button onClick={handleOpenModal}>
              Add monitor
            </Button>
          )}
        </Box>

        <Box sx={styles.wrap}>
          {isNoMonitons
            ? <Banner onAddMonitor={handleOpenModal} />
            : <MonitorsList />}
        </Box>
      </PageWrapper>

      <Create
        open={isOpenModal}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default Monitors;
