import { IBuilder } from 'models';

export default (builder: IBuilder) => ({
  checkMe: builder.query({
    query: () => '/api/user/me',
  }),
});
