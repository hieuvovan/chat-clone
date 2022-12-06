import React, { lazy } from 'react';
import { IPageRoute } from '@interfaces/IPageRoute';

const Home = lazy(() => import('../../pages/home'));

const homeRoutes: IPageRoute[] = [
  {
    path: '/',
    element: Home,
    isProtected: true,
  },
];

export default homeRoutes;
