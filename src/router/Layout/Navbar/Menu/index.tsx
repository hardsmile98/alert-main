/* eslint-disable jsx-a11y/anchor-is-valid */
import { useLocation } from 'react-router-dom';
import { MenuItem, MenuList } from '@mui/material';
import { Link } from 'components';
import { ROUTES } from 'constants/index';
import { useDispatch } from 'react-redux';
import { logout } from 'store/slices/auth';
import { publicApi } from 'api/publicApi';
import { useTranslation } from 'react-i18next';
import MenuIcons from './MenuIcons';
import styles from './styles';

interface IProps {
  onClickItem?: () => void
}

function Menu({ onClickItem }: IProps) {
  const dispatch = useDispatch();

  const { t } = useTranslation();

  const { pathname } = useLocation();

  const handleClickMenu = () => {
    if (onClickItem) {
      onClickItem();
    }
  };

  const handleLogout = () => {
    dispatch(publicApi.util.resetApiState());
    dispatch(logout());
  };

  return (
    <MenuList sx={styles.root}>
      {ROUTES.map(({ title, path, icon }) => (
        <MenuItem
          onClick={handleClickMenu}
          key={path}
          sx={{
            ...styles.link,
            ...(pathname === path && styles.active),
          }}
        >
          <Link to={path}>
            <MenuIcons icon={icon} />
            {t(title)}
          </Link>
        </MenuItem>
      ))}

      <MenuItem
        sx={styles.link}
        onClick={handleLogout}
      >
        <a href="#">
          <MenuIcons icon="logout" />
          {t('main.routes.logout')}
        </a>
      </MenuItem>
    </MenuList>
  );
}

export default Menu;
