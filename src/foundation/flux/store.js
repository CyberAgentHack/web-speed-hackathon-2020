import { createStore } from 'redux';

import { rootReducer } from './reducers';

export function configureStore() {
  const store = createStore(rootReducer);

  return store;
}
