import { ChangePasswordDto, IBuilder, ProfileResponse } from 'models';

export default (builder: IBuilder) => ({
  checkMe: builder.query({
    query: () => '/api/user/me',
  }),

  getProfile: builder.query<ProfileResponse, {}>({
    query: () => '/api/user/profile',
  }),

  changePassword: builder.mutation<{}, ChangePasswordDto>({
    query: ({ currentPassword, newPassword }) => ({
      url: '/api/user/changePassword',
      method: 'POST',
      body: {
        currentPassword,
        newPassword,
      },
    }),
  }),
});
