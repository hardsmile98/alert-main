import { IBuilder } from 'models';
import auth from './auth';
import user from './user';

export default {
  auth,
  user,
};

export const buildEndpoints = (builder: IBuilder) => ({
  ...auth(builder),
  ...user(builder),
});
