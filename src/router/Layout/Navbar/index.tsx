import { Box } from '@mui/material';
import logo from 'assets/images/logo.svg';
import { Link } from 'components';
import Menu from './Menu';

const styles = {
  root: {},

  logo: {
    width: 130,
    height: 'auto',
  },

  menu: {
    mt: 3,
  },
};

function Navbar() {
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

      <Box sx={styles.menu}>
        <Menu />
      </Box>
    </Box>
  );
}

export default Navbar;
