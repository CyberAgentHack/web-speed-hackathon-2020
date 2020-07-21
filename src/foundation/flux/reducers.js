import { combineReducers } from 'redux';

import { errorReducer } from '../../domains/error/error_reducer';
import { blogReducer } from '../../domains/blog/blog_reducer';
import { entryListReducer } from '../../domains/entry_list/entry_list_reducer';
import { entryReducer } from '../../domains/entry/entry_reducer';
import { commentListReducer } from '../../domains/comment_list/comment_list_reducer';

export function createReducer(asyncReducer) {
  return combineReducers({
    error: errorReducer,
    blog: blogReducer,
    entryList: entryListReducer,
    entry: entryReducer,
    commentList: commentListReducer,
    ...asyncReducer,
  });
}
