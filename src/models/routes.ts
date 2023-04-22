type IRouteIcon = 'monitors' | 'alerts' | 'profile' | 'logout';

interface IRoute {
  title: string
  path: string
  icon: IRouteIcon,
}

export type {
  IRoute,
  IRouteIcon,
};
