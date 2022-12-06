import React from 'react';
import { Navigate } from 'react-router';

function isAuthenticated(): boolean {
  const token = localStorage.getItem('token');
  return token ? true : false;
}

export function privateRoute(Wrapped: any) {
  return (props: any) => isAuthenticated() ? <Wrapped /> : <Navigate to="/auth/login" />;
}
