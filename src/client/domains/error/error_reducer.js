import { Map } from 'immutable';
import { ACTION_ERROR_NOT_FOUND } from './error_actions';

export function errorReducer(state = Map(), action) {
  switch (action.type) {
    case ACTION_ERROR_NOT_FOUND: {
      return state.set('error', action.type);
    }

    default: {
      return state;
    }
  }
}
