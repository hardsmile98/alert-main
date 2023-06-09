/* eslint-disable no-nested-ternary */
import { Box, Tooltip } from '@mui/material';
import { History as CheckIcon } from '@mui/icons-material';
import { MonitorStatus } from 'models';
import { Link, Wrapper } from 'components';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  return (
    <Wrapper sx={styles.root}>
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
          <Link
            to={`/monitor/${id}`}
            sx={styles.name}
          >
            {name}
          </Link>

          <Box>
            {`${status} • ${timeUpdated}`}
          </Box>
        </Box>
      </Box>

      <Box sx={styles.actions}>
        <Tooltip title={t('monitors.tooltip')}>
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
    </Wrapper>
  );
}

export default Item;
