import Layout from '../../shared/components/layout';
import { IPageRoute } from './../../core/interfaces/IPageRoute';
import homeRoutes from './home-routes';

const pageRoutes: IPageRoute[] = [
  {
    path: '/',
    element: Layout,
    children: [...homeRoutes],
  },
];

export default pageRoutes;
