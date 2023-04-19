interface AddMonitorDto {
  name: string
  url: string
  frequency: number
}

type MonitorStatus = 'UP' | 'DOWN' | 'PAUSE';

type MonitorsResponse = Array<{
  id: number
  name: string
  url: string
  frequency: string
  status: MonitorStatus
  userId: number
  createdAt: string
  updatedAt: string
}>;

export type {
  AddMonitorDto,
  MonitorsResponse,
  MonitorStatus,
};
