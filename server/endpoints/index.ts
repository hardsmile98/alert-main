export default [
  { path: '/api/auth/login', method: 'post' },
  { path: '/api/auth/register', method: 'post' },

  { path: '/api/user/me' },
  { path: '/api/user/profile', data: 'profile.json' },
  { path: '/api/user/changePassword', method: 'post' },
  { path: '/api/user/channels', method: 'post' },
  { path: '/api/user/channels', method: 'delete' },
  { path: '/api/user/channels', data: 'channels.json' },

  { path: '/api/monitor/:id', data: 'monitor.json' },
  { path: '/api/monitor', data: 'monitors.json' },
  { path: '/api/monitor', method: 'post' },
  { path: '/api/monitor', method: 'delete' },
  { path: '/api/monitor/status', method: 'post' },
];
