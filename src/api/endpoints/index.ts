import { IBuilder } from 'models';
import auth from './auth';

export default {
  auth,
};

export const buildEndpoints = (builder: IBuilder) => ({
  ...auth(builder),
});
