import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GlobalHeader } from './components/GlobalHeader';
import { Routes } from './routes';

export const Root = () => (
  <Router>
    <GlobalHeader />
    <Routes />
  </Router>
);
