import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalHeader } from './components/GlobalHeader';
import { Routes } from './routes';

export function Root() {
  return (
    <Router>
      <GlobalHeader />
      <Suspense fallback={<div />}>
        <Routes />
      </Suspense>
    </Router>
  );
}
