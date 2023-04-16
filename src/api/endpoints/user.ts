import {
  IBuilder,
  ChangePasswordDto,
  ProfileResponse,
  ChannelsResponse,
  AddChannelDto,
} from 'models';
import {
  FullTagDescription,
} from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import tags from '../tagTypes';

export default (builder: IBuilder) => ({
  checkMe: builder.query({
    query: () => '/api/user/me',
  }),

  getProfile: builder.query<ProfileResponse, {}>({
    query: () => '/api/user/profile',
  }),

  getChannels: builder.query<ChannelsResponse, {}>({
    query: () => '/api/user/channels',
    providesTags: [tags.channels as unknown as FullTagDescription<never>],
  }),

  addChannel: builder.mutation<{}, AddChannelDto>({
    query: ({ type, value }) => ({
      url: '/api/user/channels',
      method: 'POST',
      body: {
        type,
        value,
      },
    }),
    invalidatesTags: [tags.channels as unknown as FullTagDescription<never>],
  }),

  deleteChannel: builder.mutation<{}, { id: number }>({
    query: ({ id }) => ({
      url: '/api/user/channels',
      method: 'DELETE',
      body: {
        id,
      },
    }),
    invalidatesTags: [tags.channels as unknown as FullTagDescription<never>],
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
