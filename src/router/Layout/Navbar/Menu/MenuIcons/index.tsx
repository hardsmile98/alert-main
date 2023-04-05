import { IRouteIcon } from 'models';
import {
  PermContactCalendar as RecordIcon,
  Settings as SettingIcon,
  PeopleAlt as ClientsIcon,
} from '@mui/icons-material';

interface IProps {
  icon: IRouteIcon
}

const ICONS = {
  profile: <RecordIcon />,
  alerts: <ClientsIcon />,
  monitors: <SettingIcon />,
};

function MenuIcons({ icon }: IProps) {
  return ICONS[icon];
}

export default MenuIcons;
