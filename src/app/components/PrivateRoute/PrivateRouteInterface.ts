export default interface PrivateRouteInterface {
  name: string;
  path: string;
  component: any;
  match?: any;
  history?: any;
  location?: any;
  exact?: boolean;
};
