interface RegisterDto {
  email: string
  password: string
  lastName: string
  firstName: string
}

interface AuthResponse {
  token: string
}

interface LoginDto {
  email: string
  password: string
}

export type {
  RegisterDto,
  LoginDto,
  AuthResponse,
};
