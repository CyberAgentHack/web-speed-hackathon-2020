import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalHeader } from './components/GlobalHeader';
import { Routes } from './routes';

export function Root() {
  return (
    <Suspense fallback={<div />}>
      <Router>
        <GlobalHeader />
        <Routes />
      </Router>
    </Suspense>
  );
}
