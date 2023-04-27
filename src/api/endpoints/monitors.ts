import { FullTagDescription } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import tags from 'api/tagTypes';
import {
  AddMonitorDto,
  IBuilder,
  IMonitors,
  IMonitor,
} from 'models';
import { transformMonitors, transformMonitor } from 'api/formatters';

export default (builder: IBuilder) => ({
  getMonitors: builder.query<IMonitors, {}>({
    query: () => '/api/monitor',
    transformResponse: transformMonitors,
    providesTags: [tags.monitors as unknown as FullTagDescription<never>],
  }),

  getMonitor: builder.query<IMonitor, {}>({
    query: (id: number) => `/api/monitor/${id}`,
    transformResponse: transformMonitor,
  }),

  addMonitor: builder.mutation<{}, AddMonitorDto>({
    query: ({
      name, url, frequency, method,
    }) => ({
      url: '/api/monitor',
      method: 'POST',
      body: {
        name,
        url,
        frequency,
        method,
      },
    }),
    invalidatesTags: [tags.monitors as unknown as FullTagDescription<never>],
  }),

  deleteMonitor: builder.mutation<{}, { id: number }>({
    query: ({ id }) => ({
      url: '/api/monitor',
      method: 'DELETE',
      body: {
        id,
      },
    }),
    invalidatesTags: [tags.monitors as unknown as FullTagDescription<never>],
  }),

  changeStatusMonitor: builder.mutation<{}, { id: number }>({
    query: ({ id }) => ({
      url: '/api/monitor/status',
      method: 'POST',
      body: {
        id,
      },
    }),
    invalidatesTags: [tags.monitors as unknown as FullTagDescription<never>],
  }),
});
