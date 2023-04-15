type ChannelType = 'telegram' | 'email';

interface Channel {
  id: number | string
  type: ChannelType
  value: string
}

export type {
  ChannelType,
  Channel,
};
