import { Box, Tooltip } from '@mui/material';
import { History as CheckIcon } from '@mui/icons-material';
import Actions from './Actions';
import styles from './styles';

interface IProps {
  name: string
  status: string
  timeUpdated: string
  frequency: string
}

function Item({
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
            backgroundColor: 'success.main',
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
          <Actions />
        </Box>
      </Box>
    </Box>
  );
}

export default Item;
