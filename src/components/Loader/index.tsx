import { Box, CircularProgress } from '@mui/material';

type Props = {
  color?: 'primary.main' | 'white'
  text?: string,
};

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  text: {
    mt: 1,
    fontSize: 'body2.fontSize',
  },
};

function Loader({ color = 'primary.main', text }: Props) {
  return (
    <Box sx={styles.root}>
      <Box color={color}>
        <CircularProgress />
      </Box>

      {text && (
        <Box sx={styles.text}>
          {text}
        </Box>
      )}
    </Box>
  );
}

export default Loader;
