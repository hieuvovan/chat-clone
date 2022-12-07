import React, { lazy } from 'react';
import { IPageRoute } from '../../core/interfaces';
const Home = lazy(() => import('../../pages/home'));

const homeRoutes: IPageRoute[] = [
  {
    path: '/',
    element: Home,
    isProtected: true,
  },
];

export default homeRoutes;
