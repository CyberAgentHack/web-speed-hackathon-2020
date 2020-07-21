import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Root } from './root';
import { configureStore } from './flux/store';

import '../app.css';

export function render() {
  const store = configureStore();

  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>,
    document.getElementById('root'),
  );
}
