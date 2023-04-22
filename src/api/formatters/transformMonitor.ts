import { Monitor } from 'models';
import moment from 'moment';

export default function transformMonitors(response: Monitor): Monitor {
  return {
    ...response,
    checkAt: moment(response.checkAt).format('LLL'),
    createdAt: moment(response.createdAt).format('LLL'),
  };
}
