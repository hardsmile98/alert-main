interface ChangePasswordDto {
  currentPassword: string
  newPassword: string
}

type Plan = 'free' | 'pro';

interface ProfileResponse {
  id: number
  email: string
  firstName: string
  lastName: string
  plan: Plan
}

type ChannelType = 'telegram' | 'email';

type ChannelsResponse = Array<{
  id: number
  type: ChannelType
  value: string
}>;

interface AddChannelDto {
  type: ChannelType
  value: string
}

export type {
  ChangePasswordDto,
  ChannelsResponse,
  ProfileResponse,
  ChannelType,
  Plan,
  AddChannelDto,
};
