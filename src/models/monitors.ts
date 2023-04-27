type Method = 'get' | 'post';

interface AddMonitorDto {
  name: string
  url: string
  frequency: number
  method: string
}

type MonitorStatus = 'UP' | 'DOWN' | 'PAUSE';

interface Monitor {
  id: number
  name: string
  url: string
  frequency: string
  status: MonitorStatus
  method: Method
  userId: number
  checkAt: string
  createdAt: string
  updatedAt: string
}

interface MonitorTrasfromed extends Monitor {
  frequencyFormatted: string
  timeUpdated: string
}

type MonitorsTrasfromed = Array<MonitorTrasfromed>;

type Monitors = Array<Monitor>;

interface MonitorsResponse {
  monitors: Monitors
  isLimit: boolean
}

interface ResponseTime {
  id: number
  createdAt: string
  responseTime: number
}

type MonitorData = Array<ResponseTime>;

interface MonitorResponse {
  monitor: Monitor
  data: MonitorData
}

interface ChartValue {
  label: string
  value: number
}

type ChartData = Array<ChartValue>;

interface IMonitor {
  info: Monitor
  chartData: ChartData
}

interface IMonitors {
  isLimit: boolean
  monitors: MonitorsTrasfromed
}

export type {
  AddMonitorDto,
  Monitors,
  IMonitors,
  IMonitor,
  Monitor,
  MonitorsResponse,
  MonitorResponse,
  MonitorsTrasfromed,
  MonitorStatus,
  ChartData,
};
