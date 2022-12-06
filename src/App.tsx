import React, { Suspense } from 'react';
import appRoutes from './app/routes/app.routes';
import { RouterOutlet } from './app/shared/utils/custom-router-dom';
import { app } from './app/core/services/firebase';
import './App.css';

function App() {
  return (
    <Suspense fallback={<div>...Loading</div>}>
      <RouterOutlet routes={appRoutes} />
    </Suspense>
  );
}

export default App;
