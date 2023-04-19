import { IBuilder } from 'models';
import auth from './auth';
import user from './user';
import monitors from './monitors';

export default {
  auth,
  user,
  monitors,
};

export const buildEndpoints = (builder: IBuilder) => ({
  ...auth(builder),
  ...user(builder),
  ...monitors(builder),
});
