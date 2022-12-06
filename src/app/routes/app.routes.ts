import pageRoutes from './page-routes';
import authRoutes from './auth.routes';
import { IPageRoute } from '@interfaces/IPageRoute';

const appRoutes: IPageRoute[] = [...pageRoutes, ...authRoutes];

export default appRoutes;
