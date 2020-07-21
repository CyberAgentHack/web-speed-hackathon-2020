import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Root } from './root';
import { configureStore } from './flux/store';

export function render() {
  const root = document.getElementById('root');
  const store = configureStore();

  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    root,
  );
}
