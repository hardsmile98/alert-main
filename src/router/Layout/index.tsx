import { Box } from '@mui/material';
import styles from './styles';
import Navbar from './Navbar';

interface IProps {
  children: React.ReactNode,
}

function Layout({ children }: IProps) {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.navbar}>
        <Navbar />
      </Box>

      <Box sx={styles.content}>
        {children}
      </Box>
    </Box>
  );
}

export default Layout;
