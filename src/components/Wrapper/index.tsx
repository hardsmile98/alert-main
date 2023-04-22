import { Box, SxProps } from '@mui/material';

const styles = {
  root: {
    p: 3,
    backgroundColor: 'white',
    borderRadius: 2,
  },
};

interface IProps {
  sx?: SxProps,
  children?: React.ReactNode;
}

function Wrapper({ sx, children }: IProps) {
  return (
    <Box sx={{ ...styles.root, ...sx }}>{children}</Box>
  );
}

export default Wrapper;
