import { IRouteIcon } from 'models';
import {
  PersonOutline as ProfileIcon,
  Language as MonitorsIcon,
  NotificationsNoneOutlined as AlerIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';

interface IProps {
  icon: IRouteIcon
}

const ICONS = {
  profile: <ProfileIcon />,
  alerts: <AlerIcon />,
  monitors: <MonitorsIcon />,
  logout: <LogoutIcon />,
};

function MenuIcons({ icon }: IProps) {
  return ICONS[icon];
}

export default MenuIcons;
