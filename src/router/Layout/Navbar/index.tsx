import { Box } from '@mui/material';
import logo from 'assets/images/logo.svg';
import { Link } from 'components';
import { useIsMobile } from 'hooks';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import styles from './styles';

function Navbar() {
  const { isTablet } = useIsMobile();

  return (
    <Box
      component="nav"
      sx={styles.root}
    >
      <Link to="/">
        <Box
          sx={styles.logo}
          component="img"
          src={logo}
          alt="logo"
        />
      </Link>

      {isTablet
        ? <MobileMenu />
        : (
          <Box sx={styles.menu}>
            <Menu />
          </Box>
        )}
    </Box>
  );
}

export default Navbar;
