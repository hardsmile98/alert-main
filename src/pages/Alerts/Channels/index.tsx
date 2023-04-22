import { Box, IconButton } from '@mui/material';
import { ChannelType, ChannelsResponse } from 'models';
import {
  AlternateEmail as EmailIcon,
  Telegram as TelegramIcon,
  DeleteOutlineOutlined as DeleteIcon,
} from '@mui/icons-material';
import { useDeleteChannelMutation } from 'api/publicApi';
import { Wrapper } from 'components';
import styles from './styles';

interface Props {
  channels: ChannelsResponse | undefined;
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
  const [deleteChannel, { isLoading }] = useDeleteChannelMutation();

  const handleDeleteChannel = (id: number) => {
    deleteChannel({ id });
  };

  if (!channels?.length) {
    return (
      <Wrapper sx={styles.noChannels}>
        Add first notification channel
      </Wrapper>
    );
  }

  return (
    <>
      {channels.map(({ id, type, value }) => (
        <Wrapper
          sx={styles.channel}
          key={id}
        >
          <Box sx={styles.body}>
            <Box sx={styles.icon}>
              <Icon type={type} />
            </Box>

            <Box>
              <Box sx={styles.type}>
                {type}
              </Box>
              <Box sx={styles.value}>
                {value}
              </Box>
            </Box>
          </Box>

          <Box>
            <IconButton
              disabled={isLoading}
              onClick={() => handleDeleteChannel(id)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Wrapper>
      ))}
    </>
  );
}

export default Channels;
