import { ACTION_ERROR_NOT_FOUND } from './error_actions';

export function errorReducer(state = {}, action) {
  switch (action.type) {
    case ACTION_ERROR_NOT_FOUND: {
      return {
        ...state,
        error: action.type,
      };
    }

    default: {
      return state;
    }
  }
}
