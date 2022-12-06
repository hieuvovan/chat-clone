export interface IPageRoute {
  path: string;
  element?: any;
  isProtected?: boolean; // default is false,
  redirect?: string;
  children?: IPageRoute[];
}
