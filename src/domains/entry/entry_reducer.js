import { fromJS, Map } from 'immutable';
import { ACTION_ENTRY_FETCHED, ACTION_LIKE_UPDATED } from './entry_actions';

export function entryReducer(state = Map(), action) {
  switch (action.type) {
    case ACTION_ENTRY_FETCHED: {
      return fromJS(action.data.entry);
    }

    case ACTION_LIKE_UPDATED: {
      return state.set('like_count', action.data.likeCount);
    }

    default: {
      return state;
    }
  }
}
