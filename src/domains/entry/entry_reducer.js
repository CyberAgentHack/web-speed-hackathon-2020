import { ACTION_ENTRY_FETCHED, ACTION_LIKE_UPDATED } from './entry_actions';

export function entryReducer(state = {}, action) {
  switch (action.type) {
    case ACTION_ENTRY_FETCHED: {
      return action.data.entry;
    }

    case ACTION_LIKE_UPDATED: {
      return { ...state, like_count: action.data.likeCount };
    }

    default: {
      return state;
    }
  }
}
