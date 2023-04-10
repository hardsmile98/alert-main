import { ChangePasswordDto, IBuilder } from 'models';

export default (builder: IBuilder) => ({
  checkMe: builder.query({
    query: () => '/api/user/me',
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
