import produce from 'immer';
import { ACTION_ERROR_NOT_FOUND } from './error_actions';

export function errorReducer(state = new Map(), action) {
  switch (action.type) {
    case ACTION_ERROR_NOT_FOUND:
      return produce(state, (draftState) => {
        draftState.set('error', action.type);
      });
    default: {
      return state;
    }
  }
}
