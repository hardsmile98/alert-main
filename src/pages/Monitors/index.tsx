import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useGetMonitorsQuery } from 'api/publicApi';
import { PageWrapper } from 'components';
import Banner from './Banner';
import List from './List';
import Create from './Create';
import styles from './styles';

function Monitors() {
  const [isOpenModal, setOpenModal] = useState(false);

  const { data, isLoading, isError } = useGetMonitorsQuery({});

  const handleCloseModal = () => setOpenModal(false);
  const handleOpenModal = () => setOpenModal(true);

  const isNoMonitons = data?.length === 0;

  return (
    <>
      <PageWrapper
        title="Monitors"
        isLoading={isLoading}
        isError={isError}
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
            : <List monitors={data} />}
        </Box>
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
