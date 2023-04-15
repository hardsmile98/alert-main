import { Box, IconButton } from '@mui/material';
import { Channel, ChannelType } from 'models';
import {
  AlternateEmail as EmailIcon,
  Telegram as TelegramIcon,
  DeleteOutlineOutlined as DeleteIcon,
} from '@mui/icons-material';
import styles from './styles';

interface Props {
  channels: Array<Channel> | [];
}

interface IconProps {
  type: ChannelType,
}

function Icon({ type }: IconProps) {
  switch (type) {
    case 'email':
      return <EmailIcon />;
    case 'telegram':
      return <TelegramIcon />;
    default:
      return null;
  }
}

function Channels({ channels }: Props) {
  if (!channels.length) {
    return (
      <Box sx={styles.noChannels}>
        Add first notification channel
      </Box>
    );
  }

  return (
    <>
      {channels.map((channel) => (
        <Box
          sx={styles.channel}
          key={channel.id}
        >
          <Box sx={styles.body}>
            <Box sx={styles.icon}>
              <Icon type={channel.type} />
            </Box>

            <Box>
              <Box sx={styles.type}>
                {channel.type}
              </Box>
              <Box sx={styles.value}>
                {channel.value}
              </Box>
            </Box>
          </Box>

          <Box>
            <IconButton>
              <DeleteIcon color="error" />
            </IconButton>
          </Box>
        </Box>
      ))}
    </>
  );
}

export default Channels;
