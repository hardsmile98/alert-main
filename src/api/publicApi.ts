import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getEnvProps from 'utils/getEnvProps';
import { buildEndpoints } from './endpoints';
import tagTypes from './tagTypes';

export const publicApi = createApi({
  reducerPath: 'publicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: getEnvProps.publicApiURL,
    prepareHeaders(headers) {
      const token = localStorage.getItem('TOKEN');

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
    credentials: 'include',
  }),
  endpoints: buildEndpoints,
  tagTypes: Object.values(tagTypes),
});

export const {
  // auth
  useLoginMutation,
  useRegisterMutation,

  // user
  useCheckMeQuery,
  useChangePasswordMutation,
} = publicApi;
