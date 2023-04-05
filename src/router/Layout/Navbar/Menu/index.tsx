import { useLocation } from 'react-router-dom';
import { MenuItem, MenuList } from '@mui/material';
import { Link } from 'components';
import { ROUTES } from 'constants/index';
import styles from './styles';
import MenuIcons from './MenuIcons';

function Menu() {
  const { pathname } = useLocation();

  return (
    <MenuList sx={styles.root}>
      {ROUTES.map(({ title, path, icon }) => (
        <MenuItem
          key={path}
          sx={{
            ...styles.link,
            ...(pathname === path && styles.active),
          }}
        >
          <Link to={path}>
            <MenuIcons icon={icon} />
            {title}
          </Link>
        </MenuItem>
      ))}
    </MenuList>
  );
}

export default Menu;
