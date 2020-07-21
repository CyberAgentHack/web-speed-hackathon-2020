import { Map, fromJS } from 'immutable';
import { ACTION_BLOG_FETCHED } from './blog_actions';

export function blogReducer(state = Map(), action) {
  switch (action.type) {
    case ACTION_BLOG_FETCHED: {
      return fromJS(action.data.blog);
    }

    default: {
      return state;
    }
  }
}
