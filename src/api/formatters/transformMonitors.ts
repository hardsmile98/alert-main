import { MonitorsResponse, IMonitors } from 'models';
import moment from 'moment';

export default function transformMonitors(response: MonitorsResponse): IMonitors {
  return {
    ...response,
    monitors: response.monitors.map((monitor) => ({
      ...monitor,
      frequencyFormatted: Number(monitor.frequency) === 60
        ? '1 hour'
        : `${monitor.frequency} mins`,
      timeUpdated: moment(monitor.updatedAt).fromNow(),
    })),
  };
}
