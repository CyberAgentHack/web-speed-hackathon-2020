import { fromJS, List } from 'immutable';
import { ACTION_COMMENT_LIST_FETCHED } from './comment_list_actions';

export function commentListReducer(state = List(), action) {
  switch (action.type) {
    case ACTION_COMMENT_LIST_FETCHED: {
      return fromJS(action.data.comments);
    }

    default: {
      return state;
    }
  }
}
