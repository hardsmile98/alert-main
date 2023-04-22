/* eslint-disable no-nested-ternary */
import { Box, Tooltip } from '@mui/material';
import { History as CheckIcon } from '@mui/icons-material';
import { MonitorStatus } from 'models';
import Actions from './Actions';
import styles from './styles';

interface IProps {
  id: number
  name: string
  status: MonitorStatus
  timeUpdated: string
  frequency: string
}

function Item({
  id,
  name,
  status,
  timeUpdated,
  frequency,
}: IProps) {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.info}>
        <Box
          component="span"
          sx={{
            ...styles.status,
            ...(status === 'UP' && styles.statusUp),
            ...(status === 'DOWN' && styles.statusDown),
            ...(status === 'PAUSE' && styles.statusPause),
          }}
        />

        <Box>
          <Box sx={styles.name}>
            {name}
          </Box>

          <Box>
            {`${status} • ${timeUpdated}`}
          </Box>
        </Box>
      </Box>

      <Box sx={styles.actions}>
        <Tooltip title="Monitoring frequency">
          <Box sx={styles.checkTime}>
            <CheckIcon />
            {frequency}
          </Box>
        </Tooltip>

        <Box ml={5}>
          <Actions
            id={id}
            status={status}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Item;
