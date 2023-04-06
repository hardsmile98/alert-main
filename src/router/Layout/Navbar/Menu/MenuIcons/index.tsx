import { IRouteIcon } from 'models';
import {
  PersonOutline as ProfileIcon,
  Language as MonitorsIcon,
  NotificationsNoneOutlined as AlerIcon,
} from '@mui/icons-material';

interface IProps {
  icon: IRouteIcon
}

const ICONS = {
  profile: <ProfileIcon />,
  alerts: <AlerIcon />,
  monitors: <MonitorsIcon />,
};

function MenuIcons({ icon }: IProps) {
  return ICONS[icon];
}

export default MenuIcons;
