type IRouteIcon = 'monitors' | 'alerts' | 'profile';

interface IRoute {
  title: string
  path: string
  icon: IRouteIcon,
}

export type {
  IRoute,
  IRouteIcon,
};
