import {
  BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta,
} from '@reduxjs/toolkit/dist/query';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

type IBuilder = EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, 'publicApi'>;

interface IError {
  data: {
    message: string
  }
}

export type {
  IBuilder,
  IError,
};
