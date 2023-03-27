import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import getEnvProps from 'utils/getEnvProps';
import { buildEndpoints } from './endpoints';
import tagTypes from './tagTypes';

export const publicApi = createApi({
  reducerPath: 'publicApi',
  baseQuery: fetchBaseQuery({
    baseUrl: getEnvProps.publicApiURL,
    prepareHeaders(headers) {
      return headers;
    },
    credentials: 'include',
  }),
  endpoints: buildEndpoints,
  tagTypes: Object.values(tagTypes),
});

export const {
  // auth
  useCheckMeQuery,
} = publicApi;
