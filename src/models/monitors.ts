interface AddMonitorDto {
  name: string
  url: string
  frequency: number
}

type MonitorStatus = 'UP' | 'DOWN' | 'PAUSE';

interface Monitor {
  id: number
  name: string
  url: string
  frequency: string
  status: MonitorStatus
  userId: number
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

interface IMonitors {
  isLimit: boolean
  monitors: MonitorsTrasfromed
}

export type {
  AddMonitorDto,
  Monitors,
  IMonitors,
  MonitorsResponse,
  MonitorsTrasfromed,
  MonitorStatus,
};
