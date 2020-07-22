import { combineReducers } from 'redux';

import { errorReducer } from '../../domains/error/error_reducer';

export function createReducer(asyncReducer) {
  return combineReducers({
    error: errorReducer,
    ...asyncReducer,
  });
}
