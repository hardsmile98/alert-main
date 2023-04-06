import { Box, Tooltip } from '@mui/material';
import { History as CheckIcon } from '@mui/icons-material';

const styles = {
  root: {
    p: 3,
    backgroundColor: 'white',
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mt: 1,
  },

  info: {
    display: 'flex',
    alignItems: 'center',
  },

  status: {
    display: 'block',
    width: 15,
    height: 15,
    borderRadius: '50%',
    mr: 2,
  },

  name: {
    fontWeight: 'fontWeightBold',
    mb: 0.5,
  },

  actions: {
    display: 'flex',
    alignItems: 'center',
  },

  checkTime: {
    display: 'flex',
    alignItems: 'center',

    svg: {
      mr: 0.5,
    },
  },
};

function MonitorsItem() {
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
            name
          </Box>

          <Box>
            UP • 53m from now
          </Box>
        </Box>
      </Box>

      <Box sx={styles.actions}>
        <Tooltip title="Monitoring frequency">
          <Box sx={styles.checkTime}>
            <CheckIcon />
            20m
          </Box>
        </Tooltip>

        <Box ml={5}>
          12313
        </Box>
      </Box>
    </Box>
  );
}

export default MonitorsItem;
