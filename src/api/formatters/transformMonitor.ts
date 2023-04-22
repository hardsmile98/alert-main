import { MonitorResponse, IMonitor } from 'models';
import moment from 'moment';

export default function transformMonitors(response: MonitorResponse): IMonitor {
  const { monitor, data } = response || {};

  return {
    info: {
      ...response.monitor,
      checkAt: moment(monitor.checkAt).format('LLL'),
      createdAt: moment(monitor.createdAt).format('LLL'),
    },
    chartData: (data || []).map((item) => ({
      label: moment(item.createdAt).format('HH:mm'),
      value: Number(item.responseTime),
    })),
  };
}
