import {
  Paper,
  Box,
  Typography,
  Button,
} from '@mui/material';
import styles from './styles';

interface IProps {
  onAddMonitor: () => void
}

function Banner({ onAddMonitor } : IProps) {
  return (
    <Paper sx={styles.root}>
      <Typography variant="h4">
        Create your first monitor
      </Typography>

      <Box sx={styles.description}>
        We will keep an eye on your server and call or message you when it goes down.
      </Box>

      <Button onClick={onAddMonitor}>
        Add monitor
      </Button>
    </Paper>
  );
}

export default Banner;