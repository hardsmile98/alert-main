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

export type {
  ChangePasswordDto,
  ProfileResponse,
  Plan,
};
