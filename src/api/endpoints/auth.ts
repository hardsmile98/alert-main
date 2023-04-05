import {
  AuthResponse,
  IBuilder,
  LoginDto,
  RegisterDto,
} from 'models';

export default (builder: IBuilder) => ({
  login: builder.mutation<AuthResponse, LoginDto>({
    query: ({ email, password }) => ({
      url: '/api/auth/login',
      method: 'POST',
      body: {
        email,
        password,
      },
    }),
  }),

  register: builder.mutation<AuthResponse, RegisterDto>({
    query: ({
      email,
      password,
      firstName,
      lastName,
    }) => ({
      url: '/api/auth/register',
      method: 'POST',
      body: {
        email,
        password,
        firstName,
        lastName,
      },
    }),
  }),
});
