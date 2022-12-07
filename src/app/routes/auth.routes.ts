import React, { lazy } from 'react';
import { IPageRoute } from '../core/interfaces';
const Login = lazy(() => import('../pages/login'));
const AuthLayout = lazy(() => import('../shared/components/layout/AuthLayout'));

const authRoutes: IPageRoute[] = [
  {
    path: '/auth',
    element: AuthLayout,
    children: [
      {
        path: '',
        redirect: 'login',
      },
      {
        path: 'login',
        element: Login,
      },
    ],
  },
];

export default authRoutes;
