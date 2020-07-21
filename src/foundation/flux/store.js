import { createStore } from 'redux';

import { rootReducer, createReducer } from './reducers';

export function configureStore() {
  const store = createStore(createReducer(), { blogList: [] });
  store.asyncReducers = {};

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  return store;
}
